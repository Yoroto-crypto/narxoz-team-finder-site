// ---------- i18n ----------

const TEXT = {
  ru: {
    title: "Доска объявлений: ищем сокомандников",
    subtitle: "Дипломы, курсовые, хакатоны, стартап-идеи — оставь анкету или найди тех, кто ищет тебя.",
    searchPlaceholder: "Поиск по навыку, теме, языку...",
    addBtn: "Разместить анкету",
    emptyTitle: "Пока анкет нет",
    emptySub: "Будьте первым, кто разместит объявление, и позовите друзей.",
    noResults: "По этому запросу никого не нашлось.",
    modalTitleNew: "Новая анкета",
    step: "Шаг {n} из 6",
    lName: "Как вас зовут и какой курс?",
    lMajor: "Специальность/направление?",
    lTopic: "Тема диплома/курсовой/проекта?",
    lSkills: "Ваши навыки (через запятую)?",
    lLooking: "Кого ищете в команду?",
    lLang: "Язык общения в команде?",
    lContactMethod: "Как с вами связаться?",
    notImportant: "Не принципиально",
    contactTelegram: "Telegram",
    contactPhone: "Телефон",
    contactEmail: "Email",
    contactPlaceholder: { telegram: "@username", phone: "+7 700 000 00 00", email: "you@example.com" },
    back: "Назад",
    next: "Далее",
    submit: "Опубликовать",
    savedNote: "Готово! Анкета опубликована. Ссылка на управление ей сохранена в этом браузере — на этом устройстве вы сможете отметить «нашёл команду» или удалить её.",
    fieldMajor: "Специальность",
    fieldTopic: "Тема/проект",
    fieldSkills: "Навыки",
    fieldLooking: "Ищет",
    fieldLang: "Язык",
    fieldContact: "Контакт",
    yourProfile: "Ваша анкета",
    foundFlag: "Команда найдена",
    markFound: "Нашёл(-ла) команду",
    reopen: "Снова в поиске",
    deleteBtn: "Удалить",
    deleteConfirm: "Удалить эту анкету без возможности восстановления?",
    errorFill: "Заполните это поле, прежде чем продолжить.",
    errorContact: "Выберите способ связи и укажите значение.",
  },
  kz: {
    title: "Хабарландырулар тақтасы: сокомандник іздейміз",
    subtitle: "Дипломдар, курстық жұмыстар, хакатондар, стартап-идеялар — анкета қалдырыңыз немесе сізді іздеп жатқандарды табыңыз.",
    searchPlaceholder: "Дағды, тақырып, тіл бойынша іздеу...",
    addBtn: "Анкета орналастыру",
    emptyTitle: "Әзірге анкеталар жоқ",
    emptySub: "Хабарландыруды алғаш орналастырған адам болыңыз, достарыңызды шақырыңыз.",
    noResults: "Бұл сұраныс бойынша ешкім табылмады.",
    modalTitleNew: "Жаңа анкета",
    step: "{n}/6 қадам",
    lName: "Атыңыз және курсыңыз қандай?",
    lMajor: "Мамандығыңыз/бағытыңыз?",
    lTopic: "Диплом/курстық/жоба тақырыбы?",
    lSkills: "Дағдыларыңыз (үтірмен)?",
    lLooking: "Командаға кімді іздейсіз?",
    lLang: "Командада қай тілде сөйлесесіз?",
    lContactMethod: "Сізбен қалай байланысуға болады?",
    notImportant: "Бәрібір",
    contactTelegram: "Telegram",
    contactPhone: "Телефон",
    contactEmail: "Email",
    contactPlaceholder: { telegram: "@username", phone: "+7 700 000 00 00", email: "you@example.com" },
    back: "Артқа",
    next: "Келесі",
    submit: "Жариялау",
    savedNote: "Дайын! Анкета жарияланды. Оны басқару сілтемесі осы браузерде сақталды — осы құрылғыда «команда табылды» деп белгілеп немесе өшіре аласыз.",
    fieldMajor: "Мамандық",
    fieldTopic: "Тақырып/жоба",
    fieldSkills: "Дағдылар",
    fieldLooking: "Іздейді",
    fieldLang: "Тіл",
    fieldContact: "Байланыс",
    yourProfile: "Сіздің анкетаңыз",
    foundFlag: "Команда табылды",
    markFound: "Команда табылды",
    reopen: "Қайта іздеуде",
    deleteBtn: "Өшіру",
    deleteConfirm: "Бұл анкетаны қайтарымсыз өшіру керек пе?",
    errorFill: "Жалғастырмас бұрын бұл өрісті толтырыңыз.",
    errorContact: "Байланыс тәсілін таңдап, мәнін көрсетіңіз.",
  },
  en: {
    title: "Bulletin board: looking for teammates",
    subtitle: "Thesis, coursework, hackathons, startup ideas — post a profile or find people looking for you.",
    searchPlaceholder: "Search by skill, topic, language...",
    addBtn: "Post a profile",
    emptyTitle: "No profiles yet",
    emptySub: "Be the first to post one and invite your friends.",
    noResults: "No one found for this search.",
    modalTitleNew: "New profile",
    step: "Step {n} of 6",
    lName: "What's your name and year of study?",
    lMajor: "Your major/field of study?",
    lTopic: "Thesis/coursework/project topic?",
    lSkills: "Your skills (comma-separated)?",
    lLooking: "Who are you looking for on the team?",
    lLang: "Communication language for the team?",
    lContactMethod: "Best way to reach you?",
    notImportant: "Doesn't matter",
    contactTelegram: "Telegram",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactPlaceholder: { telegram: "@username", phone: "+1 555 000 0000", email: "you@example.com" },
    back: "Back",
    next: "Next",
    submit: "Publish",
    savedNote: "Done! Your profile is live. A link to manage it is saved in this browser — on this device you can mark it found or delete it.",
    fieldMajor: "Major",
    fieldTopic: "Topic/project",
    fieldSkills: "Skills",
    fieldLooking: "Looking for",
    fieldLang: "Language",
    fieldContact: "Contact",
    yourProfile: "Your profile",
    foundFlag: "Team found",
    markFound: "Mark team found",
    reopen: "Searching again",
    deleteBtn: "Delete",
    deleteConfirm: "Delete this profile permanently?",
    errorFill: "Fill in this field before continuing.",
    errorContact: "Choose a contact method and enter a value.",
  },
};

const LANG_NAMES = { ru: "Русский", kz: "Қазақша", en: "English" };

let uiLang = localStorage.getItem("ui_lang") || "ru";

function t(key, vars) {
  let s = (TEXT[uiLang] && TEXT[uiLang][key]) || TEXT.ru[key] || key;
  if (vars) for (const k in vars) s = s.replace(`{${k}}`, vars[k]);
  return s;
}

// ---------- local ownership store ----------
// { [profileId]: editToken }
function getMine() {
  try { return JSON.parse(localStorage.getItem("my_profiles") || "{}"); }
  catch (e) { return {}; }
}
function saveMine(id, token) {
  const mine = getMine();
  mine[id] = token;
  localStorage.setItem("my_profiles", JSON.stringify(mine));
}
function forgetMine(id) {
  const mine = getMine();
  delete mine[id];
  localStorage.setItem("my_profiles", JSON.stringify(mine));
}

// ---------- rendering ----------

const boardEl = document.getElementById("board");
const emptyEl = document.getElementById("empty-state");

function commLangLabel(v) {
  if (v === "any") return t("notImportant");
  return LANG_NAMES[v] || v;
}

function renderCards(profiles) {
  boardEl.innerHTML = "";
  const mine = getMine();

  if (profiles.length === 0) {
    emptyEl.style.display = "block";
    document.getElementById("t-empty-title").textContent = t("emptyTitle");
    document.getElementById("t-empty-sub").textContent = t("emptySub");
    return;
  }
  emptyEl.style.display = "none";

  for (const p of profiles) {
    const card = document.createElement("div");
    card.className = "card";
    const isMine = Object.prototype.hasOwnProperty.call(mine, String(p.id));
    const skillTags = p.skills.split(",").map(s => s.trim()).filter(Boolean);

    card.innerHTML = `
      ${p.status === "found" ? `<span class="found-flag">${t("foundFlag")}</span><br>` : ""}
      ${isMine ? `<span class="owner-badge">${t("yourProfile")}</span><br>` : ""}
      <h3></h3>
      <div class="major"></div>
      <div class="field"><b>${t("fieldTopic")}</b><span class="v-topic"></span></div>
      <div class="field"><b>${t("fieldSkills")}</b><div class="tags"></div></div>
      <div class="field"><b>${t("fieldLooking")}</b><span class="v-looking"></span></div>
      <div class="contact-row">
        <span>${t("fieldLang")}: ${commLangLabel(p.language)}</span>
      </div>
      <div class="contact-row">
        <span>${t("fieldContact")}</span>
        <span class="value"></span>
      </div>
      ${isMine ? `<div class="owner-actions">
        <button class="act-toggle">${p.status === "found" ? t("reopen") : t("markFound")}</button>
        <button class="act-delete">${t("deleteBtn")}</button>
      </div>` : ""}
    `;
    card.querySelector("h3").textContent = p.full_name;
    card.querySelector(".major").textContent = p.major;
    card.querySelector(".v-topic").textContent = " " + p.topic;
    card.querySelector(".v-looking").textContent = " " + p.looking_for;
    card.querySelector(".value").textContent = p.contact_value;
    const tagsEl = card.querySelector(".tags");
    skillTags.forEach(s => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = s;
      tagsEl.appendChild(tag);
    });

    if (isMine) {
      card.querySelector(".act-toggle").addEventListener("click", () => toggleFound(p.id, p.status, mine[p.id]));
      card.querySelector(".act-delete").addEventListener("click", () => deleteProfile(p.id, mine[p.id]));
    }

    boardEl.appendChild(card);
  }
}

async function loadProfiles(query) {
  const url = query ? `/api/profiles?q=${encodeURIComponent(query)}` : "/api/profiles";
  const res = await fetch(url);
  const data = await res.json();
  renderCards(data);
}

async function toggleFound(id, currentStatus, token) {
  const newStatus = currentStatus === "found" ? "active" : "found";
  await fetch(`/api/profiles/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ edit_token: token, status: newStatus }),
  });
  loadProfiles(document.getElementById("search-input").value.trim());
}

async function deleteProfile(id, token) {
  if (!confirm(t("deleteConfirm"))) return;
  await fetch(`/api/profiles/${id}?edit_token=${encodeURIComponent(token)}`, { method: "DELETE" });
  forgetMine(id);
  loadProfiles(document.getElementById("search-input").value.trim());
}

// ---------- search ----------

let searchTimer;
document.getElementById("search-input").addEventListener("input", (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => loadProfiles(e.target.value.trim()), 250);
});

// ---------- language switch ----------

function applyStaticText() {
  document.getElementById("t-title").textContent = t("title");
  document.getElementById("t-subtitle").textContent = t("subtitle");
  document.getElementById("search-input").placeholder = t("searchPlaceholder");
  document.getElementById("open-modal-btn").textContent = t("addBtn");
  document.getElementById("t-modal-title").textContent = t("modalTitleNew");
  document.getElementById("l-name").textContent = t("lName");
  document.getElementById("l-major").textContent = t("lMajor");
  document.getElementById("l-topic").textContent = t("lTopic");
  document.getElementById("l-skills").textContent = t("lSkills");
  document.getElementById("l-looking").textContent = t("lLooking");
  document.getElementById("l-lang").textContent = t("lLang");
  document.getElementById("l-contact-method").textContent = t("lContactMethod");
  document.getElementById("lang-any-btn").textContent = t("notImportant");
  document.getElementById("cm-telegram-btn").textContent = t("contactTelegram");
  document.getElementById("cm-phone-btn").textContent = t("contactPhone");
  document.getElementById("cm-email-btn").textContent = t("contactEmail");
  document.getElementById("step-back").textContent = t("back");
  document.getElementById("step-next").textContent = t("next");
  document.getElementById("step-submit").textContent = t("submit");
  updateStepLabel();

  document.querySelectorAll("#lang-switch button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === uiLang);
  });
}

document.getElementById("lang-switch").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-lang]");
  if (!btn) return;
  uiLang = btn.dataset.lang;
  localStorage.setItem("ui_lang", uiLang);
  applyStaticText();
  loadProfiles(document.getElementById("search-input").value.trim());
});

// ---------- modal / multi-step form ----------

const backdrop = document.getElementById("modal-backdrop");
const form = document.getElementById("profile-form");
let step = 1;
const TOTAL_STEPS = 6;
let commLang = null;
let contactMethod = null;

function updateStepLabel() {
  document.getElementById("step-label").textContent = t("step", { n: step });
}

function showStep(n) {
  step = n;
  document.querySelectorAll(".form-step").forEach(el => {
    el.hidden = Number(el.dataset.step) !== n;
  });
  document.getElementById("step-back").style.visibility = n === 1 ? "hidden" : "visible";
  document.getElementById("step-next").hidden = n === TOTAL_STEPS;
  document.getElementById("step-submit").hidden = n !== TOTAL_STEPS;
  updateStepLabel();
}

function openModal() {
  step = 1;
  commLang = null;
  contactMethod = null;
  form.reset();
  document.querySelectorAll("#lang-choice button, #contact-method-choice button").forEach(b => b.classList.remove("selected"));
  document.getElementById("f-contact-value").value = "";
  document.getElementById("saved-note").style.display = "none";
  form.style.display = "block";
  showStep(1);
  backdrop.classList.add("open");
}
function closeModal() { backdrop.classList.remove("open"); }

document.getElementById("open-modal-btn").addEventListener("click", openModal);
document.getElementById("modal-close").addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });

document.getElementById("lang-choice").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-val]");
  if (!btn) return;
  commLang = btn.dataset.val;
  document.querySelectorAll("#lang-choice button").forEach(b => b.classList.toggle("selected", b === btn));
});

document.getElementById("contact-method-choice").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-val]");
  if (!btn) return;
  contactMethod = btn.dataset.val;
  document.querySelectorAll("#contact-method-choice button").forEach(b => b.classList.toggle("selected", b === btn));
  document.getElementById("f-contact-value").placeholder = t("contactPlaceholder")[contactMethod] || "";
});

function currentStepValid() {
  if (step === 1) return document.getElementById("f-name").value.trim().length > 0;
  if (step === 2) return document.getElementById("f-major").value.trim().length > 0;
  if (step === 3) return document.getElementById("f-topic").value.trim().length > 0;
  if (step === 4) return document.getElementById("f-skills").value.trim().length > 0
                       && document.getElementById("f-looking").value.trim().length > 0;
  if (step === 5) return !!commLang;
  if (step === 6) return !!contactMethod && document.getElementById("f-contact-value").value.trim().length > 0;
  return true;
}

document.getElementById("step-next").addEventListener("click", () => {
  if (!currentStepValid()) { alert(t(step === 5 || step === 6 ? "errorContact" : "errorFill")); return; }
  if (step < TOTAL_STEPS) showStep(step + 1);
});
document.getElementById("step-back").addEventListener("click", () => {
  if (step > 1) showStep(step - 1);
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!currentStepValid()) { alert(t("errorContact")); return; }

  const payload = {
    full_name: document.getElementById("f-name").value.trim(),
    major: document.getElementById("f-major").value.trim(),
    topic: document.getElementById("f-topic").value.trim(),
    skills: document.getElementById("f-skills").value.trim(),
    looking_for: document.getElementById("f-looking").value.trim(),
    language: commLang,
    contact_type: contactMethod,
    contact_value: document.getElementById("f-contact-value").value.trim(),
  };

  const res = await fetch("/api/profiles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) { alert("Error, try again"); return; }
  const data = await res.json();
  saveMine(data.id, data.edit_token);

  form.style.display = "none";
  const note = document.getElementById("saved-note");
  note.textContent = t("savedNote");
  note.style.display = "block";

  loadProfiles(document.getElementById("search-input").value.trim());
  setTimeout(closeModal, 2400);
});

// ---------- init ----------

applyStaticText();
loadProfiles();
