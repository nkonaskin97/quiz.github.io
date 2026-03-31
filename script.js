/* ====== МЕТАДАННЫЕ ПРОГРАММЫ ====== */
const PROGRAM_META = {
    ministry: "Министерство науки и высшего образования Российской Федерации",
    university: "ФГБОУ ВО «Поволжский государственный университет телекоммуникаций и информатики»",
    department: "связей с общественностью",
    workKind: "ОБУЧАЮЩАЯ ПРОГРАММА‑КВЕСТ",
    theme: "Преступление и правонарушение",
    discipline: "Правоведение",
    topicLine: "преступление, правонарушение и юридическая ответственность",
    authors: ["Коняшкин Никита", "Тишков Илья"],
    group: "ПрИ‑31",
    supervisor: "Шеремеев Евгений Евгеньевич",
    city: "Самара",
    year: "2026",
};

/* ====== БАЗОВЫЙ МАССИВ ВСЕХ ВОПРОСОВ (25 шт) ====== */
const baseQuizData = [
    // 1-15. Исходные вопросы
    {
        question: "Какие признаки характеризуют правонарушение?",
        options: [
            { text: "Противоправность деяния", correct: true },
            { text: "Виновность (умысел или неосторожность)", correct: true },
            { text: "Наличие юридической ответственности", correct: true },
            { text: "Всегда наказывается лишением свободы", correct: false }
        ],
        explanation: "Правонарушение — противоправное и виновное деяние, за которое предусмотрена юридическая ответственность."
    },
    {
        question: "Что отличает преступление от иных правонарушений?",
        options: [
            { text: "Повышенная общественная опасность", correct: true },
            { text: "Запрет в Уголовном кодексе", correct: true },
            { text: "Всегда относится к дисциплинарным проступкам", correct: false },
            { text: "Уголовная ответственность как вид реакции государства", correct: true }
        ],
        explanation: "Преступление — наиболее общественно опасное деяние, запрещённое УК РФ и влекущее уголовную ответственность."
    },
    {
        question: "Какие элементы входят в состав правонарушения?",
        options: [
            { text: "Объект", correct: true },
            { text: "Объективная сторона", correct: true },
            { text: "Субъект", correct: true },
            { text: "Субъективная сторона", correct: true }
        ],
        explanation: "Классическая модель включает 4 элемента: объект, объективная сторона, субъект, субъективная сторона."
    },
    {
        question: "Какие формы вины выделяют в праве?",
        options: [
            { text: "Умысел", correct: true },
            { text: "Неосторожность", correct: true },
            { text: "Случайность как форма вины", correct: false },
            { text: "Небрежность и легкомыслие (как виды неосторожности)", correct: true }
        ],
        explanation: "Основные формы вины: умысел и неосторожность. Неосторожность подразделяют на небрежность и легкомыслие."
    },
    {
        question: "Какие виды юридической ответственности относятся к основным?",
        options: [
            { text: "Уголовная", correct: true },
            { text: "Административная", correct: true },
            { text: "Дисциплинарная", correct: true },
            { text: "Гражданско-правовая", correct: true }
        ],
        explanation: "Чаще всего выделяют уголовную, административную, дисциплинарную и гражданско-правовую ответственность."
    },
    {
        question: "Что из перечисленного относится к административным наказаниям?",
        options: [
            { text: "Предупреждение", correct: true },
            { text: "Административный штраф", correct: true },
            { text: "Лишение свободы на срок", correct: false },
            { text: "Административный арест (в установленных случаях)", correct: true }
        ],
        explanation: "КоАП РФ предусматривает предупреждение, штраф, арест и др. Лишение свободы — уголовная санкция."
    },
    {
        question: "К какому виду ответственности чаще всего относится возмещение вреда?",
        options: [
            { text: "Гражданско-правовая", correct: true },
            { text: "Уголовная", correct: false },
            { text: "Дисциплинарная", correct: false },
            { text: "Административная", correct: false }
        ],
        explanation: "Возмещение имущественного вреда — типичная мера гражданско-правовой ответственности."
    },
    {
        question: "Какие признаки обычно характерны для преступления?",
        options: [
            { text: "Общественная опасность", correct: true },
            { text: "Противоправность", correct: true },
            { text: "Виновность", correct: true },
            { text: "Наказуемость", correct: true }
        ],
        explanation: "В теории права и уголовного права обычно выделяют: общественную опасность, противоправность, виновность, наказуемость."
    },
    {
        question: "Что относится к дисциплинарным взысканиям?",
        options: [
            { text: "Замечание", correct: true },
            { text: "Выговор", correct: true },
            { text: "Увольнение по соответствующим основаниям", correct: true },
            { text: "Конфискация имущества", correct: false }
        ],
        explanation: "Дисциплинарные взыскания применяются в трудовой сфере: замечание, выговор, увольнение. Конфискация — не дисциплинарная мера."
    },
    {
        question: "Какие деяния могут быть правонарушениями?",
        options: [
            { text: "Действие, нарушающее норму права", correct: true },
            { text: "Бездействие при наличии обязанности действовать", correct: true },
            { text: "Любое аморальное поведение, даже без нарушения закона", correct: false },
            { text: "Деяние при наличии вины", correct: true }
        ],
        explanation: "Правонарушения — это нарушения правовых норм (действием или бездействием) при наличии вины."
    },
    {
        question: "Какие утверждения верны про субъекта правонарушения?",
        options: [
            { text: "Субъектом является лицо, способное нести ответственность", correct: true },
            { text: "Субъект всегда только организация", correct: false },
            { text: "Возраст и вменяемость могут иметь значение", correct: true },
            { text: "Субъект не связан с вопросом вины", correct: false }
        ],
        explanation: "Субъект — лицо, которое может отвечать за деяние; важны возраст, вменяемость и иные юридические условия."
    },
    {
        question: "Какие признаки относятся к объективной стороне правонарушения?",
        options: [
            { text: "Деяние (действие/бездействие)", correct: true },
            { text: "Вредные последствия", correct: true },
            { text: "Причинная связь", correct: true },
            { text: "Мотив и цель", correct: false }
        ],
        explanation: "Объективная сторона описывает внешнюю сторону: деяние, последствия, причинную связь и условия совершения."
    },
    {
        question: "Какие утверждения корректны про противоправность?",
        options: [
            { text: "Это несоответствие поведения нормам права", correct: true },
            { text: "Она всегда означает наличие уголовной статьи", correct: false },
            { text: "Противоправность может быть административной, гражданской и др.", correct: true },
            { text: "Без противоправности нет правонарушения", correct: true }
        ],
        explanation: "Противоправность — нарушение нормы права. Это не обязательно уголовная норма; правонарушения бывают разных отраслей."
    },
    {
        question: "Какие меры чаще всего относятся к уголовным наказаниям?",
        options: [
            { text: "Штраф (в уголовно-правовом смысле)", correct: true },
            { text: "Обязательные работы", correct: true },
            { text: "Лишение свободы", correct: true },
            { text: "Предупреждение (как административная мера)", correct: false }
        ],
        explanation: "Уголовные наказания включают штраф, работы, лишение свободы и др. Предупреждение — типично административная мера."
    },
    {
        question: "Какие утверждения верны о юридической ответственности?",
        options: [
            { text: "Наступает при наличии основания, предусмотренного законом", correct: true },
            { text: "Выражается в неблагоприятных последствиях для правонарушителя", correct: true },
            { text: "Всегда применяется только судом", correct: false },
            { text: "Связана с государственным принуждением", correct: true }
        ],
        explanation: "Ответственность — форма реакции государства на правонарушение; может применяться разными органами (не только судом)."
    },
    // 16-25. Вопросы по УК РФ
    {
        question: "С какого возраста наступает уголовная ответственность за особо тяжкие преступления?",
        options: [
            { text: "С 14 лет", correct: true },
            { text: "С 16 лет", correct: false },
            { text: "С 18 лет", correct: false },
            { text: "С 21 года", correct: false }
        ],
        explanation: "По УК РФ (ст. 20) уголовная ответственность за особо тяжкие преступления наступает с 14 лет."
    },
    {
        question: "Что из перечисленного является обстоятельством, исключающим преступность деяния?",
        options: [
            { text: "Необходимая оборона", correct: true },
            { text: "Крайняя необходимость", correct: true },
            { text: "Физическое принуждение", correct: true },
            { text: "Состояние алкогольного опьянения", correct: false }
        ],
        explanation: "УК РФ (гл. 8) предусматривает необходимую оборону, крайнюю необходимость, физическое принуждение и другие обстоятельства."
    },
    {
        question: "Какие виды наказаний предусмотрены УК РФ?",
        options: [
            { text: "Штраф", correct: true },
            { text: "Обязательные работы", correct: true },
            { text: "Лишение свободы", correct: true },
            { text: "Административный арест", correct: false }
        ],
        explanation: "Штраф, обязательные работы и лишение свободы — виды уголовных наказаний (ст. 44 УК РФ). Административный арест — не уголовное наказание."
    },
    {
        question: "Что такое рецидив преступлений?",
        options: [
            { text: "Совершение умышленного преступления лицом, имеющим судимость", correct: true },
            { text: "Совершение преступления впервые", correct: false },
            { text: "Совершение преступления по неосторожности", correct: false },
            { text: "Совершение административного правонарушения", correct: false }
        ],
        explanation: "Рецидив — совершение умышленного преступления лицом, имеющим судимость за ранее совершенное умышленное преступление (ст. 18 УК РФ)."
    },
    {
        question: "Какие преступления относятся к особо тяжким?",
        options: [
            { text: "Убийство при отягчающих обстоятельствах", correct: true },
            { text: "Террористический акт", correct: true },
            { text: "Кража без отягчающих обстоятельств", correct: false },
            { text: "Государственная измена", correct: true }
        ],
        explanation: "Особо тяжкие преступления — умышленные деяния, за которые предусмотрено наказание свыше 10 лет лишения свободы (ст. 15 УК РФ)."
    },
    {
        question: "Что такое необходимая оборона?",
        options: [
            { text: "Защита от общественно опасного посягательства", correct: true },
            { text: "Месть за совершенное преступление", correct: false },
            { text: "Провокация преступления", correct: false },
            { text: "Самоуправство", correct: false }
        ],
        explanation: "Необходимая оборона — защита личности и прав обороняющегося от общественно опасного посягательства (ст. 37 УК РФ)."
    },
    {
        question: "Какие преступления против собственности предусмотрены УК РФ?",
        options: [
            { text: "Кража", correct: true },
            { text: "Грабеж", correct: true },
            { text: "Разбой", correct: true },
            { text: "Незаконное предпринимательство", correct: false }
        ],
        explanation: "Кража (ст. 158), грабеж (ст. 161) и разбой (ст. 162) — преступления против собственности. Незаконное предпринимательство — преступление в сфере экономики."
    },
    {
        question: "Что такое совокупность преступлений?",
        options: [
            { text: "Совершение двух или более преступлений", correct: true },
            { text: "Одно преступление с несколькими эпизодами", correct: false },
            { text: "Повторное совершение преступления", correct: false },
            { text: "Преступление, совершенное группой лиц", correct: false }
        ],
        explanation: "Совокупность преступлений — совершение двух или более преступлений, ни за одно из которых лицо не было осуждено (ст. 17 УК РФ)."
    },
    {
        question: "Какие обстоятельства смягчают наказание?",
        options: [
            { text: "Явка с повинной", correct: true },
            { text: "Наличие несовершеннолетних детей", correct: true },
            { text: "Совершение преступления впервые", correct: true },
            { text: "Совершение преступления в состоянии опьянения", correct: false }
        ],
        explanation: "Явка с повинной, наличие детей, совершение преступления впервые смягчают наказание (ст. 61 УК РФ). Опьянение — отягчающее обстоятельство."
    },
    {
        question: "Какие виды освобождения от уголовной ответственности существуют?",
        options: [
            { text: "В связи с деятельным раскаянием", correct: true },
            { text: "В связи с примирением с потерпевшим", correct: true },
            { text: "В связи с истечением сроков давности", correct: true },
            { text: "В связи с наличием административного наказания", correct: false }
        ],
        explanation: "УК РФ (ст. 75, 76, 78) предусматривает освобождение от ответственности в связи с деятельным раскаянием, примирением, истечением сроков давности."
    }
];

// Переменная для текущего перемешанного массива вопросов
let quizData = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffleQuestions() {
    quizData = shuffleArray([...baseQuizData]);
}

function applyProgramMeta() {
    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el && value !== undefined && value !== null) el.textContent = String(value);
    };

    setText("uiTheme", PROGRAM_META.theme);
    setText("uiTopicLine", PROGRAM_META.topicLine);
    setText("coverDept", PROGRAM_META.department);
    setText("coverTheme", PROGRAM_META.theme);
    setText("coverDiscipline", PROGRAM_META.discipline);
    setText("coverAuthor1", PROGRAM_META.authors?.[0] ?? "");
    setText("coverAuthor2", PROGRAM_META.authors?.[1] ?? "");
    setText("coverGroup", PROGRAM_META.group);
    setText("coverSupervisor", PROGRAM_META.supervisor);
    setText("coverCity", PROGRAM_META.city);
    setText("coverYear", PROGRAM_META.year);

    document.title = `Обучающая программа‑квест: ${PROGRAM_META.theme}`;
}

/* ====== НАВИГАЦИЯ ====== */
const navButtons = Array.from(document.querySelectorAll("[data-nav]"));
const sections = new Map(Array.from(document.querySelectorAll(".section")).map(s => [s.id, s]));

function showSection(id) {
    for (const [sid, sec] of sections) sec.classList.toggle("is-active", sid === id);
    navButtons.forEach(btn => btn.classList.toggle("is-active", btn.dataset.nav === id));
    window.scrollTo({ top: 0, behavior: "auto" });
}

navButtons.forEach(btn => btn.addEventListener("click", () => showSection(btn.dataset.nav)));
document.querySelectorAll("[data-nav-jump]").forEach(btn => {
    btn.addEventListener("click", () => showSection(btn.dataset.navJump));
});

/* ====== КВЕСТ: СОСТОЯНИЕ ====== */
let currentIndex = 0;
let score = 0;
let answered = [];
let userChoices = [];

function resetQuizState() {
    shuffleQuestions();
    currentIndex = 0;
    score = 0;
    answered = new Array(quizData.length).fill(false);
    userChoices = quizData.map(() => new Set());
}

const els = {
    totalHome: document.getElementById("totalQuestionsHome"),
    qIndex: document.getElementById("qIndex"),
    qTotal: document.getElementById("qTotal"),
    qScore: document.getElementById("qScore"),
    progressBar: document.getElementById("progressBar"),
    quizArea: document.getElementById("quizArea"),
    feedback: document.getElementById("feedback"),
    prevBtn: document.getElementById("prevBtn"),
    answerBtn: document.getElementById("answerBtn"),
    nextBtn: document.getElementById("nextBtn"),
    finishBtn: document.getElementById("finishBtn"),
    results: document.getElementById("results")
};

function setMeta() {
    els.totalHome.textContent = String(quizData.length);
    els.qTotal.textContent = String(quizData.length);
    els.qIndex.textContent = String(currentIndex + 1);
    els.qScore.textContent = String(score);

    const answeredCount = answered.filter(Boolean).length;
    const progressPercent = (answeredCount / quizData.length) * 100;
    els.progressBar.style.width = progressPercent + "%";
}

function drawResultChart(percent) {
    const canvas = document.getElementById("resultChart");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let color;
    if (percent < 40) color = "#e74c3c";
    else if (percent < 70) color = "#f39c12";
    else color = "#2ecc71";

    // Фоновая дуга
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 14;
    ctx.stroke();

    // Заполненная дуга
    const angle = (percent / 100) * 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + angle);
    ctx.strokeStyle = color;
    ctx.lineWidth = 14;
    ctx.stroke();

    // Внутренний круг
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - 18, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(7,24,39,0.95)";
    ctx.fill();

    // Текст процента
    ctx.font = "bold 24px system-ui";
    ctx.fillStyle = "#eaf2ff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(Math.round(percent) + "%", centerX, centerY);
}

function renderQuestion() {
    const q = quizData[currentIndex];
    applyProgramMeta();
    setMeta();

    const optionsHtml = q.options.map((opt, i) => {
        const id = `q${currentIndex}_o${i}`;
        const checked = userChoices[currentIndex].has(i) ? "checked" : "";
        return `
      <div class="option">
        <input type="checkbox" id="${id}" data-opt-index="${i}" ${checked} />
        <label for="${id}">${escapeHtml(opt.text)}</label>
      </div>
    `;
    }).join("");

    els.quizArea.innerHTML = `
    <h3 class="q-title">${escapeHtml(q.question)}</h3>
    <div class="options">${optionsHtml}</div>
  `;

    els.quizArea.querySelectorAll("input[type='checkbox']").forEach(inp => {
        inp.addEventListener("change", (e) => {
            const idx = Number(e.target.dataset.optIndex);
            if (e.target.checked) userChoices[currentIndex].add(idx);
            else userChoices[currentIndex].delete(idx);

            if (answered[currentIndex]) {
                answered[currentIndex] = false;
                els.feedback.className = "feedback";
                els.feedback.innerHTML = "Вы изменили выбор. Нажмите «Ответить», чтобы зафиксировать ответ.";
                setMeta();
            }
        });
    });

    els.prevBtn.disabled = currentIndex === 0;
    els.nextBtn.disabled = false;
    els.results.hidden = true;

    if (!answered[currentIndex]) {
        els.feedback.className = "feedback";
        els.feedback.innerHTML = "";
    }
}

function evaluateAnswer() {
    const q = quizData[currentIndex];
    const correctSet = new Set(q.options.map((o, i) => o.correct ? i : null).filter(v => v !== null));
    const userSet = userChoices[currentIndex];
    const allMatch = userSet.size === correctSet.size && [...userSet].every(i => correctSet.has(i));

    answered[currentIndex] = true;

    // Пересчёт score
    score = 0;
    for (let qi = 0; qi < quizData.length; qi++) {
        if (!answered[qi]) continue;
        const cq = quizData[qi];
        const cset = new Set(cq.options.map((o, i) => o.correct ? i : null).filter(v => v !== null));
        const uset = userChoices[qi];
        if (uset.size === cset.size && [...uset].every(i => cset.has(i))) score++;
    }

    els.qScore.textContent = String(score);
    setMeta();

    if (userSet.size === 0) {
        answered[currentIndex] = false;
        els.feedback.className = "feedback is-bad";
        els.feedback.innerHTML = `<strong>Неверно.</strong><div class="explain">Выберите хотя бы один вариант ответа.</div>`;
        return;
    }

    if (allMatch) {
        els.feedback.className = "feedback is-ok";
        els.feedback.innerHTML = `<strong>Верно.</strong><div class="explain">${escapeHtml(q.explanation)}</div>`;
    } else {
        els.feedback.className = "feedback is-bad";
        els.feedback.innerHTML = `<strong>Неверно.</strong><div class="explain">${escapeHtml(q.explanation)}</div>`;
    }
}

function nextQuestion() {
    if (currentIndex < quizData.length - 1) {
        currentIndex++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
}

function finishQuiz() {
    const answeredCount = answered.filter(Boolean).length;
    const pct = Math.round((score / quizData.length) * 100);

    const mistakes = [];
    for (let qi = 0; qi < quizData.length; qi++) {
        const q = quizData[qi];
        const cset = new Set(q.options.map((o, i) => o.correct ? i : null).filter(v => v !== null));
        const uset = userChoices[qi];
        const ok = answered[qi] && uset.size === cset.size && [...uset].every(i => cset.has(i));
        if (!ok) mistakes.push({ index: qi, question: q.question });
    }

    els.results.hidden = false;
    els.results.innerHTML = `
    <h3>Итоги прохождения</h3>
    <div class="results-chart">
      <canvas id="resultChart" width="200" height="200" style="width: 200px; height: 200px;"></canvas>
    </div>
    <div style="text-align: center; margin-top: 10px;">
      <span class="pill">Вопросов: ${quizData.length}</span>
      <span class="pill">Отвечено: ${answeredCount}</span>
      <span class="pill">Верно: ${score}</span>
      <span class="pill">Результат: ${pct}%</span>
    </div>
    ${mistakes.length ? `
      <div class="muted" style="margin-top: 15px;">Вопросы, где допущена ошибка или ответа нет:</div>
      <ul class="mistakes">
        ${mistakes.map(m => `<li><button class="link-btn" type="button" data-jump="${m.index}">Вопрос ${m.index+1}:</button> ${escapeHtml(m.question)}</li>`).join("")}
      </ul>
    ` : `<div style="margin-top: 15px; text-align: center;"><strong>Отлично!</strong> Все ответы верны.</div>`}
    <div class="actions-row" style="margin-top: 20px;">
      <button class="btn btn-primary" type="button" id="retryBtn">Пройти заново</button>
      <button class="btn btn-ghost" type="button" id="toTheoryBtn">Повторить теорию</button>
    </div>
  `;

    // Отрисовка круговой диаграммы
    drawResultChart(pct);

    els.results.querySelectorAll("[data-jump]").forEach(b => {
        b.addEventListener("click", () => {
            currentIndex = Number(b.dataset.jump);
            els.results.hidden = true;
            renderQuestion();
        });
    });

    const retryBtn = document.getElementById("retryBtn");
    if (retryBtn) retryBtn.addEventListener("click", resetQuiz);

    const toTheoryBtn = document.getElementById("toTheoryBtn");
    if (toTheoryBtn) toTheoryBtn.addEventListener("click", () => showSection("theory"));
}

function resetQuiz() {
    resetQuizState();
    els.qScore.textContent = "0";
    els.progressBar.style.width = "0%";
    els.feedback.className = "feedback";
    els.feedback.innerHTML = "";
    els.results.hidden = true;
    setMeta();
    renderQuestion();
}

function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

els.prevBtn.addEventListener("click", prevQuestion);
els.nextBtn.addEventListener("click", nextQuestion);
els.answerBtn.addEventListener("click", evaluateAnswer);
els.finishBtn.addEventListener("click", finishQuiz);

document.getElementById("goQuestBtn")?.addEventListener("click", () => showSection("quest"));
document.getElementById("goTheoryBtn")?.addEventListener("click", () => showSection("theory"));

document.getElementById("year").textContent = String(new Date().getFullYear());

// Инициализация
resetQuizState();
setMeta();
renderQuestion();
