"""
Narxoz Team Finder — публичный сайт-доска объявлений для поиска
сокомандников (дипломы, курсовые, хакатоны, стартап-идеи).

Без входа/регистрации: любой посетитель может опубликовать анкету.
"Владение" своей анкетой (чтобы отметить "нашёл команду" или удалить)
подтверждается токеном, который сервер выдаёт при создании и который
браузер сохраняет у себя в localStorage — тот же принцип, что и cookie
"запомнить меня", но без аккаунта.

Хранилище: SQLite-файл (site.db). Для Railway путь можно вынести на
подключённый постоянный диск через переменную окружения DB_DIR — иначе
файл создаётся заново при каждом пересоздании контейнера.
"""

import datetime
import os
import sqlite3
import uuid
from contextlib import closing

from flask import Flask, jsonify, request, send_from_directory

DB_DIR = os.environ.get("DB_DIR", os.path.dirname(__file__))
DB_PATH = os.path.join(DB_DIR, "site.db")
ADMIN_KEY = os.environ.get("ADMIN_KEY")  # секрет для скачивания бэкапа базы, см. README

app = Flask(__name__, static_folder="static", static_url_path="")


def get_db() -> sqlite3.Connection:
    con = sqlite3.connect(DB_PATH)
    con.row_factory = sqlite3.Row
    return con


def db_init() -> None:
    with closing(get_db()) as con:
        con.execute(
            """
            CREATE TABLE IF NOT EXISTS profiles (
                id            INTEGER PRIMARY KEY AUTOINCREMENT,
                full_name     TEXT NOT NULL,
                major         TEXT NOT NULL,
                topic         TEXT NOT NULL,
                skills        TEXT NOT NULL,
                looking_for   TEXT NOT NULL,
                language      TEXT NOT NULL,
                contact_type  TEXT NOT NULL,
                contact_value TEXT NOT NULL,
                status        TEXT NOT NULL DEFAULT 'active',
                edit_token    TEXT NOT NULL,
                created_at    TEXT NOT NULL
            )
            """
        )
        con.commit()


REQUIRED_FIELDS = [
    "full_name", "major", "topic", "skills", "looking_for",
    "language", "contact_type", "contact_value",
]

PUBLIC_FIELDS = [
    "id", "full_name", "major", "topic", "skills", "looking_for",
    "language", "contact_type", "contact_value", "status", "created_at",
]


def row_public(row: sqlite3.Row) -> dict:
    return {k: row[k] for k in PUBLIC_FIELDS}


@app.get("/")
def index():
    return app.send_static_file("index.html")


@app.get("/api/profiles")
def list_profiles():
    q = request.args.get("q", "").strip().lower()
    with closing(get_db()) as con:
        if q:
            like = f"%{q}%"
            rows = con.execute(
                """
                SELECT * FROM profiles
                WHERE status='active'
                  AND (lower(skills) LIKE ? OR lower(looking_for) LIKE ?
                       OR lower(topic) LIKE ? OR lower(language) LIKE ?
                       OR lower(major) LIKE ?)
                ORDER BY id DESC
                """,
                (like, like, like, like, like),
            ).fetchall()
        else:
            rows = con.execute(
                "SELECT * FROM profiles WHERE status='active' ORDER BY id DESC"
            ).fetchall()
    return jsonify([row_public(r) for r in rows])


@app.post("/api/profiles")
def create_profile():
    data = request.get_json(force=True, silent=True) or {}
    missing = [f for f in REQUIRED_FIELDS if not str(data.get(f, "")).strip()]
    if missing:
        return jsonify({"error": "missing_fields", "fields": missing}), 400
    if data["contact_type"] not in ("telegram", "phone", "email"):
        return jsonify({"error": "invalid_contact_type"}), 400
    if data["language"] not in ("ru", "kz", "en", "any"):
        return jsonify({"error": "invalid_language"}), 400

    token = uuid.uuid4().hex
    with closing(get_db()) as con:
        cur = con.execute(
            """
            INSERT INTO profiles
                (full_name, major, topic, skills, looking_for, language,
                 contact_type, contact_value, status, edit_token, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active', ?, ?)
            """,
            (
                data["full_name"].strip(),
                data["major"].strip(),
                data["topic"].strip(),
                data["skills"].strip(),
                data["looking_for"].strip(),
                data["language"],
                data["contact_type"],
                data["contact_value"].strip(),
                token,
                datetime.datetime.utcnow().isoformat(),
            ),
        )
        con.commit()
        new_id = cur.lastrowid
    return jsonify({"id": new_id, "edit_token": token}), 201


def _check_owner(con: sqlite3.Connection, pid: int, token: str) -> bool:
    row = con.execute("SELECT edit_token FROM profiles WHERE id=?", (pid,)).fetchone()
    return bool(row) and row["edit_token"] == token


@app.patch("/api/profiles/<int:pid>")
def update_profile(pid: int):
    data = request.get_json(force=True, silent=True) or {}
    token = data.get("edit_token", "")
    with closing(get_db()) as con:
        if not _check_owner(con, pid, token):
            return jsonify({"error": "forbidden"}), 403

        editable = [
            "full_name", "major", "topic", "skills", "looking_for",
            "language", "contact_type", "contact_value", "status",
        ]
        sets, values = [], []
        for field in editable:
            if field in data:
                sets.append(f"{field}=?")
                values.append(data[field])
        if sets:
            values.append(pid)
            con.execute(f"UPDATE profiles SET {', '.join(sets)} WHERE id=?", values)
            con.commit()
    return jsonify({"ok": True})


@app.delete("/api/profiles/<int:pid>")
def delete_profile(pid: int):
    token = request.args.get("edit_token", "")
    with closing(get_db()) as con:
        if not _check_owner(con, pid, token):
            return jsonify({"error": "forbidden"}), 403
        con.execute("DELETE FROM profiles WHERE id=?", (pid,))
        con.commit()
    return jsonify({"ok": True})


@app.get("/api/export")
def export_db():
    """Бэкап базы для админа: /api/export?key=... (см. README про ADMIN_KEY)."""
    key = request.args.get("key", "")
    if not ADMIN_KEY or key != ADMIN_KEY:
        return jsonify({"error": "forbidden"}), 403
    if not os.path.exists(DB_PATH):
        return jsonify({"error": "no_data_yet"}), 404
    return send_from_directory(DB_DIR, "site.db", as_attachment=True, download_name="site.db")


db_init()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
