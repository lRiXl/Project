/* --- ДАННЫЕ КРУЖКОВ (15 вопросов - БЕЗ ИЗМЕНЕНИЙ) --- */
const questions = [
  { text: "1. Что тебе интереснее изучать самостоятельно?", options: [{ text: "Как работают программы", type: "tech" }, { text: "Техники рисования и дизайна", type: "creative" }, { text: "Как снимать видео", type: "media" }, { text: "Психологию общения", type: "social" }, { text: "Научные эксперименты", type: "science" }, { text: "Тренировки и упражнения", type: "active" }] },
  { text: "2. Какую роль ты выберешь в проекте?", options: [{ text: "Программист", type: "tech" }, { text: "Дизайнер", type: "creative" }, { text: "Видеооператор", type: "media" }, { text: "Презентующий", type: "social" }, { text: "Исследователь", type: "science" }, { text: "Организатор активности", type: "active" }] },
  { text: "3. Чем займёшься в выходные?", options: [{ text: "Играть в игры", type: "tech" }, { text: "Гулять с друзьями", type: "social" }, { text: "Тренироваться", type: "active" }, { text: "Создавать что-то", type: "creative" }, { text: "Снимать видео или контент", type: "media" }, { text: "Проводить эксперименты", type: "science" }] },
  { text: "4. Как ты предпочитаешь проводить свободное время?", options: [{ text: "Решать логические задачи", type: "tech" }, { text: "Рисовать или создавать музыку", type: "creative" }, { text: "Общаться и работать в команде", type: "social" }, { text: "Спорт и активные игры", type: "active" }, { text: "Снимать видео", type: "media" }, { text: "Исследовать новое", type: "science" }] },
  { text: "5. Какая сфера наиболее увлекательная?", options: [{ text: "Разработка технологий", type: "tech" }, { text: "Творчество и дизайн", type: "creative" }, { text: "Создание видео", type: "media" }, { text: "Социальное взаимодействие", type: "social" }, { text: "Научные открытия", type: "science" }, { text: "Спортивные соревнования", type: "active" }] },
  { text: "6. Ты предпочитаешь:", options: [{ text: "Работать за компьютером", type: "tech" }, { text: "Создавать руками", type: "creative" }, { text: "Работать в команде", type: "social" }, { text: "Быть в движении", type: "active" }, { text: "Снимать видео", type: "media" }, { text: "Проводить эксперименты", type: "science" }] },
  { text: "7. Тебе нравится:", options: [{ text: "Придумывать алгоритмы", type: "tech" }, { text: "Создавать худ. проекты", type: "creative" }, { text: "Помогать людям", type: "social" }, { text: "Тренироваться", type: "active" }, { text: "Монтировать видео", type: "media" }, { text: "Исследовать идеи", type: "science" }] },
  { text: "8. Какая цель ближе?", options: [{ text: "Стать программистом", type: "tech" }, { text: "Стать дизайнером", type: "creative" }, { text: "Стать блогером", type: "media" }, { text: "Стать лидером", type: "social" }, { text: "Стать учёным", type: "science" }, { text: "Стать спортсменом", type: "active" }] },
  { text: "9. Что важнее всего?", options: [{ text: "Навыки кода", type: "tech" }, { text: "Творчество", type: "creative" }, { text: "Медиа-контент", type: "media" }, { text: "Общение", type: "social" }, { text: "Эксперименты", type: "science" }, { text: "Активность", type: "active" }] },
  { text: "10. Где интереснее всего?", options: [{ text: "Компьютерный класс", type: "tech" }, { text: "Мастерская", type: "creative" }, { text: "Медиа-студия", type: "media" }, { text: "Групповой проект", type: "social" }, { text: "Лаборатория", type: "science" }, { text: "Спортплощадка", type: "active" }] },
  { text: "11. Что легче даётся?", options: [{ text: "Логика", type: "tech" }, { text: "Воображение", type: "creative" }, { text: "Камера", type: "media" }, { text: "Коммуникация", type: "social" }, { text: "Анализ", type: "science" }, { text: "Физическая сила", type: "active" }] },
  { text: "12. Что вдохновляет?", options: [{ text: "Новинки IT", type: "tech" }, { text: "Искусство", type: "creative" }, { text: "Соцсети", type: "media" }, { text: "Люди", type: "social" }, { text: "Открытия", type: "science" }, { text: "Движение", type: "active" }] },
  { text: "13. Где комфортнее?", options: [{ text: "За монитором", type: "tech" }, { text: "В студии", type: "creative" }, { text: "Перед микрофоном", type: "media" }, { text: "На встречах", type: "social" }, { text: "С микроскопом", type: "science" }, { text: "На стадионе", type: "active" }] },
  { text: "14. Что хочешь развить?", options: [{ text: "Робототехнику", type: "tech" }, { text: "Визуальный дизайн", type: "creative" }, { text: "Монтаж", type: "media" }, { text: "Лидерство", type: "social" }, { text: "Экспериментирование", type: "science" }, { text: "Спорт", type: "active" }] },
  { text: "15. Будущая профессия:", options: [{ text: "Разработчик", type: "tech" }, { text: "Дизайнер", type: "creative" }, { text: "Контент-мейкер", type: "media" }, { text: "Менеджер", type: "social" }, { text: "Учёный", type: "science" }, { text: "Спортсмен", type: "active" }] }
];

/* --- ДАННЫЕ ФАКУЛЬТЕТА БИЗНЕСА (10 вопросов - БЕЗ ИЗМЕНЕНИЙ) --- */
const businessQuestions = [
  { text: "1. Какая деятельность приносит тебе наибольшее удовольствие?", options: [{ text: "Организовывать работу команды", type: "6В04101" }, { text: "Помогать развитию города", type: "6В04102" }, { text: "Анализировать экономические процессы", type: "6В04103" }, { text: "Изучать мировые рынки", type: "6В04104" }, { text: "Работать с отчетами", type: "6В04105" }, { text: "Управлять деньгами", type: "6В04107" }, { text: "Придумывать рекламу", type: "6В04109" }, { text: "Развивать людей", type: "6В04112" }, { text: "Анализировать данные", type: "6В05401" }] },
  { text: "2. В командном проекте тебе ближе роль:", options: [{ text: "Лидера", type: "6В04101" }, { text: "Связи с госорганами", type: "6В04102" }, { text: "Экономиста", type: "6В04103" }, { text: "Международника", type: "6В04104" }, { text: "Бухгалтера", type: "6В04105" }, { text: "Казначея", type: "6В04107" }, { text: "Креативщика", type: "6В04109" }, { text: "HR-менеджера", type: "6В04112" }, { text: "Аналитика данных", type: "6В05401" }] },
  { text: "3. Что тебе интереснее изучать?", options: [{ text: "Менеджмент", type: "6В04101" }, { text: "Законы и управление", type: "6В04102" }, { text: "Микро и макроэкономику", type: "6В04103" }, { text: "Глобальные связи", type: "6В04104" }, { text: "Финансовый аудит", type: "6В04105" }, { text: "Инвестиционный рынок", type: "6В04107" }, { text: "Психологию продаж", type: "6В04109" }, { text: "HR-технологии", type: "6В04112" }, { text: "Математическую статистику", type: "6В05401" }] },
  { text: "4. Какой тип задач тебе даётся легче всего?", options: [{ text: "Контроль и планирование", type: "6В04101" }, { text: "Работа с регламентами", type: "6В04102" }, { text: "Поиск причин инфляции", type: "6В04103" }, { text: "Международный опыт", type: "6В04104" }, { text: "Расчёты налогов", type: "6В04105" }, { text: "Прогноз прибыли", type: "6В04107" }, { text: "Создание контента", type: "6В04109" }, { text: "Оценка персонала", type: "6В04112" }, { text: "Работа с графиками", type: "6В05401" }] },
  { text: "5. Если бы ты запускал проект, что было бы самым интересным?", options: [{ text: "Руководить всем", type: "6В04101" }, { text: "Получить господдержку", type: "6В04102" }, { text: "Сделать финмодель", type: "6В04103" }, { text: "Найти партнеров за рубежом", type: "6В04104" }, { text: "Наладить учёт", type: "6В04105" }, { text: "Привлечь инвестиции", type: "6В04107" }, { text: "Хайп и продвижение", type: "6В04109" }, { text: "Собрать команду мечты", type: "6В04112" }, { text: "Посчитать конверсию", type: "6В05401" }] },
  { text: "6. Что больше всего мотивирует?", options: [{ text: "Ответственность", type: "6В04101" }, { text: "Польза обществу", type: "6В04102" }, { text: "Логика экономики", type: "6В04103" }, { text: "Масштаб мира", type: "6В04104" }, { text: "Идеальный порядок", type: "6В04105" }, { text: "Деньги и капитал", type: "6В04107" }, { text: "Популярность бренда", type: "6В04109" }, { text: "Успех сотрудников", type: "6В04112" }, { text: "Точные закономерности", type: "6В05401" }] },
  { text: "7. Какой предмет был ближе?", options: [{ text: "Бизнес", type: "6В04101" }, { text: "Право", type: "6В04102" }, { text: "Экономика", type: "6В04103" }, { text: "География", type: "6В04104" }, { text: "Алгебра", type: "6В04105" }, { text: "Финграмотность", type: "6В04107" }, { text: "Искусство", type: "6В04109" }, { text: "Психология", type: "6В04112" }, { text: "Статистика", type: "6В05401" }] },
  { text: "8. Какая рабочая среда?", options: [{ text: "Корпорация", type: "6В04101" }, { text: "Акимат/Правительство", type: "6В04102" }, { text: "Аналитический центр", type: "6В04103" }, { text: "Экспортная компания", type: "6В04104" }, { text: "Аудиторская фирма", type: "6В04105" }, { text: "Банк", type: "6В04107" }, { text: "Креативное бюро", type: "6В04109" }, { text: "HR-отдел", type: "6В04112" }, { text: "Лаборатория данных", type: "6В05401" }] },
  { text: "9. Как принимаешь решения?", options: [{ text: "Оценка ресурсов", type: "6В04101" }, { text: "Следование закону", type: "6В04102" }, { text: "Факторы рынка", type: "6В04103" }, { text: "Мировые тренды", type: "6В04104" }, { text: "Анализ документов", type: "6В04105" }, { text: "Выгода в цифрах", type: "6В04107" }, { text: "Мнение аудитории", type: "6В04109" }, { text: "Влияние на команду", type: "6В04112" }, { text: "Сухие факты", type: "6В05401" }] },
  { text: "10. Карьерная цель:", options: [{ text: "CEO", type: "6В04101" }, { text: "Госслужащий", type: "6В04102" }, { text: "Главный экономист", type: "6В04103" }, { text: "Международный эксперт", type: "6В04104" }, { text: "Аудитор", type: "6В04105" }, { text: "Инвестор", type: "6В04107" }, { text: "Маркетинг-директор", type: "6В04109" }, { text: "HR-директор", type: "6В04112" }, { text: "Data Scientist", type: "6В05401" }] }
];

/* --- ДАННЫЕ НОВОГО ФАКУЛЬТЕТА (ПРИКЛАДНЫЕ НАУКИ) --- */
const appliedQuestions = [
  { text: "1. Какая деятельность тебе наиболее интересна?", options: [{ text: "Разрабатывать структуры баз данных и систем", type: "is" }, { text: "Защищать информацию от взломов и утечек", type: "cybersec" }, { text: "Писать программы и создавать приложения", type: "software" }, { text: "Контролировать перемещение товаров через границу", type: "customs" }, { text: "Разбираться в правовых вопросах бизнеса", type: "law_business" }, { text: "Оценивать экономические риски компании", type: "economic_security" }, { text: "Изучать законы и защищать права людей", type: "law" }, { text: "Помогать людям в сложных жизненных ситуациях", type: "social_work" }, { text: "Организовывать поездки и туристические маршруты", type: "tourism" }] },
  { text: "2. В школьных заданиях тебе было легче всего:", options: [{ text: "Строить логические схемы и таблицы", type: "is" }, { text: "Разбираться в вопросах безопасности данных", type: "cybersec" }, { text: "Решать задачи по программированию", type: "software" }, { text: "Изучать правила торговли и границы", type: "customs" }, { text: "Анализировать юридические ситуации в бизнесе", type: "law_business" }, { text: "Находить слабые места в экономике компании", type: "economic_security" }, { text: "Разбирать правовые споры", type: "law" }, { text: "Работать с людьми и обсуждать их проблемы", type: "social_work" }, { text: "Изучать страны и их культуру", type: "tourism" }] },
  { text: "3. Какой тип задач тебе больше подходит?", options: [{ text: "Настройка и оптимизация IT-систем", type: "is" }, { text: "Поиск уязвимостей в системах", type: "cybersec" }, { text: "Создание новых цифровых решений", type: "software" }, { text: "Контроль документов на международных перевозках", type: "customs" }, { text: "Подготовка договоров для компаний", type: "law_business" }, { text: "Анализ финансовых рисков", type: "economic_security" }, { text: "Защита интересов в суде", type: "law" }, { text: "Организация социальной поддержки", type: "social_work" }, { text: "Разработка туристических программ", type: "tourism" }] },
  { text: "4. Что тебе ближе по стилю работы?", options: [{ text: "Работа с цифровыми платформами", type: "is" }, { text: "Контроль информационной безопасности", type: "cybersec" }, { text: "Разработка программного кода", type: "software" }, { text: "Работа в структурах таможенного контроля", type: "customs" }, { text: "Юридическое сопровождение бизнеса", type: "law_business" }, { text: "Проверка экономической устойчивости компании", type: "economic_security" }, { text: "Изучение законодательства", type: "law" }, { text: "Консультирование людей", type: "social_work" }, { text: "Работа с клиентами в туризме", type: "tourism" }] },
  { text: "5. Что тебя мотивирует больше всего?", options: [{ text: "Создание удобных информационных решений", type: "is" }, { text: "Предотвращение цифровых угроз", type: "cybersec" }, { text: "Разработка новых приложений", type: "software" }, { text: "Контроль законности международной торговли", type: "customs" }, { text: "Помощь бизнесу работать законно", type: "law_business" }, { text: "Защита компании от экономических потерь", type: "economic_security" }, { text: "Отстаивание справедливости", type: "law" }, { text: "Поддержка людей", type: "social_work" }, { text: "Создание интересных путешествий", type: "tourism" }] },
  { text: "6. В проектной работе тебе интереснее всего:", options: [{ text: "Продумывать архитектуру системы", type: "is" }, { text: "Следить за защитой данных", type: "cybersec" }, { text: "Писать алгоритмы", type: "software" }, { text: "Проверять соблюдение правил перевозок", type: "customs" }, { text: "Анализировать юридические документы", type: "law_business" }, { text: "Оценивать финансовые риски проекта", type: "economic_security" }, { text: "Готовить правовые заключения", type: "law" }, { text: "Координировать помощь людям", type: "social_work" }, { text: "Организовывать туристические мероприятия", type: "tourism" }] },
  { text: "7. Какой формат работы тебе кажется более привлекательным?", options: [{ text: "IT-отдел компании", type: "is" }, { text: "Отдел кибербезопасности", type: "cybersec" }, { text: "Команда разработчиков", type: "software" }, { text: "Таможенные органы", type: "customs" }, { text: "Юридический отдел бизнеса", type: "law_business" }, { text: "Служба экономической безопасности", type: "economic_security" }, { text: "Юридическая фирма", type: "law" }, { text: "Социальная служба", type: "social_work" }, { text: "Туристическое агентство", type: "tourism" }] },
  { text: "8. При принятии решений ты чаще всего:", options: [{ text: "Опираешься на техническую логику", type: "is" }, { text: "Думаешь о защите информации", type: "cybersec" }, { text: "Строишь алгоритм действий", type: "software" }, { text: "Учитываешь международные правила", type: "customs" }, { text: "Сравниваешь юридические нормы", type: "law_business" }, { text: "Анализируешь экономические последствия", type: "economic_security" }, { text: "Изучаешь законодательство", type: "law" }, { text: "Думаешь о людях и их потребностях", type: "social_work" }, { text: "Учитываешь интересы клиентов", type: "tourism" }] },
  { text: "9. Тебе интереснее всего изучать:", options: [{ text: "Информационные платформы и базы данных", type: "is" }, { text: "Методы защиты информации", type: "cybersec" }, { text: "Языки программирования", type: "software" }, { text: "Международную торговлю", type: "customs" }, { text: "Правовые основы бизнеса", type: "law_business" }, { text: "Экономическую безопасность", type: "economic_security" }, { text: "Гражданское и уголовное право", type: "law" }, { text: "Социальные программы помощи", type: "social_work" }, { text: "Мировой туризм", type: "tourism" }] },
  { text: "10. Какая карьерная цель тебе ближе?", options: [{ text: "Стать системным аналитиком", type: "is" }, { text: "Работать специалистом по кибербезопасности", type: "cybersec" }, { text: "Быть разработчиком ПО", type: "software" }, { text: "Работать в таможенных органах", type: "customs" }, { text: "Стать юристом в сфере бизнеса", type: "law_business" }, { text: "Заниматься экономической безопасностью компании", type: "economic_security" }, { text: "Стать профессиональным юристом", type: "law" }, { text: "Работать в социальной сфере", type: "social_work" }, { text: "Построить карьеру в туризме", type: "tourism" }] }
];

/* --- ОПИСАНИЕ ПРОГРАММ ДЛЯ ОБОИХ ФАКУЛЬТЕТОВ --- */
const programsData = {
  // Бизнес
  "6В04101": { title:"Менеджмент", desc:"Управление проектами и командами", icon:"📊" },
  "6В04102": { title:"Гос. управление", desc:"Работа с государственными структурами", icon:"🏛️" },
  "6В04103": { title:"Экономика", desc:"Анализ финансовых процессов", icon:"💹" },
  "6В04104": { title:"Мировая экономика", desc:"Изучение глобальных рынков", icon:"🌍" },
  "6В04105": { title:"Учет и аудит", desc:"Финансовый контроль и аудит", icon:"🧾" },
  "6В04107": { title:"Финансы", desc:"Инвестиции и банковское дело", icon:"💰" },
  "6В04109": { title:"Digital маркетинг", desc:"Продвижение брендов и реклама", icon:"📱" },
  "6В04112": { title:"HR-Менеджмент", desc:"Развитие персонала и лидерство", icon:"👥" },
  "6В05401": { title:"Статистика", desc:"Анализ данных для бизнеса", icon:"📈" },
  // Прикладные науки
  "is": { title: "Информационные системы", desc: "Разработка структур баз данных и систем", icon: "🧬" },
  "cybersec": { title: "Кибербезопасность", desc: "Защита информации от взломов и утечек", icon: "🛡️" },
  "software": { title: "Software Engineering", desc: "Создание приложений и программирование", icon: "💻" },
  "customs": { title: "Таможенное дело", desc: "Контроль товаров и международная торговля", icon: "🛃" },
  "law_business": { title: "Юриспруденция (Бизнес)", desc: "Правовое сопровождение бизнеса", icon: "⚖️" },
  "economic_security": { title: "Экономическая безопасность", desc: "Оценка рисков и защита активов компании", icon: "🔐" },
  "law": { title: "Юриспруденция", desc: "Защита прав людей и изучение законов", icon: "📜" },
  "social_work": { title: "Социальная работа", desc: "Помощь людям в сложных ситуациях", icon: "🤝" },
  "tourism": { title: "Туризм", desc: "Организация путешествий и маршрутов", icon: "✈️" }
};

/* --- ПЕРЕМЕННЫЕ СОСТОЯНИЯ --- */
let current = 0;
let userAnswers = [];
let userName = "";

let fCurrent = 0;
let fAnswers = [];
let activeFacultyQuestions = [];

/* --- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ --- */
function shuffle(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function switchTab(tabId, btn) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
  if(tabId === 'disciplines-tab') closeFacultyQuiz();
}

/* --- ОСНОВНОЙ ТЕСТ (КРУЖКИ) --- */
function startQuiz() {
  const input = document.getElementById("userName");
  if (!input.value.trim()) { input.style.borderColor = "red"; return; }
  userName = input.value;
  document.getElementById("userNameDisplay").innerText = userName;
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  current = 0;
  userAnswers = [];
  loadQuestion();
}

function loadQuestion() {
  const q = questions[current];
  document.getElementById("questionTitle").innerText = q.text;
  document.getElementById("qCounter").innerText = `Вопрос ${current + 1}/${questions.length}`;
  document.getElementById("progressFill").style.width = `${(current / questions.length) * 100}%`;
  const div = document.getElementById("answers");
  div.innerHTML = "";
  const savedAnswer = userAnswers[current];
  shuffle(q.options).forEach(opt => {
      const card = document.createElement("div");
      card.className = "option-card" + (savedAnswer === opt.type ? " selected" : "");
      card.onclick = () => {
          document.querySelectorAll("#answers .option-card").forEach(c => c.classList.remove("selected"));
          card.classList.add("selected");
          userAnswers[current] = opt.type;
      };
      card.innerHTML = `<div class="radio-dot"></div><span>${opt.text}</span>`;
      div.appendChild(card);
  });
  document.getElementById("prevBtn").style.visibility = current > 0 ? "visible" : "hidden";
}

function nextQuestion() {
  if (!userAnswers[current]) {
      const container = document.getElementById("mainContainer");
      container.style.animation = "shake 0.4s";
      setTimeout(() => container.style.animation = "", 400);
      return;
  }
  current++;
  if (current < questions.length) loadQuestion(); else showResult();
}

function prevQuestion() {
  if (current > 0) { current--; loadQuestion(); }
}

function showResult() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
  let scores = { tech: 0, creative: 0, media: 0, social: 0, science: 0, active: 0 };
  userAnswers.forEach(t => scores[t]++);
  const labels = { tech: "💻 Технологии", creative: "🎨 Творчество", media: "🎥 Медиа", social: "👥 Коммуникации", science: "🔬 Наука", active: "🏃 Активность" };
  const statsDiv = document.getElementById("statsContainer");
  statsDiv.innerHTML = "";
  Object.entries(scores).forEach(([type, val]) => {
      const pct = Math.round((val / questions.length) * 100);
      statsDiv.innerHTML += `<div class="stat-row"><div style="display:flex; justify-content:space-between; font-size:13px;"><span>${labels[type]}</span><span>${pct}%</span></div><div class="bar-bg"><div class="bar-fill" style="width:${pct}%"></div></div></div>`;
  });
  const clubsMap = {
      tech: { t: "Программирование", d: "Создание кода и IT-продуктов", e: "💻" },
      creative: { t: "Творчество", d: "Дизайн и арт-проекты", e: "🎨" },
      media: { t: "Медиа", d: "Видеомонтаж и контент", e: "🎥" },
      social: { t: "Коммуникации", d: "Дебаты и лидерство", e: "👥" },
      science: { t: "Наука", d: "Исследования и опыты", e: "🔬" },
      active: { t: "Спорт", d: "Активность и здоровье", e: "🏃" }
  };
  const sorted = Object.entries(scores).sort((a,b) => b[1] - a[1]).slice(0, 3);
  document.getElementById("clubsContainer").innerHTML = sorted.map(([type]) => {
      const item = clubsMap[type];
      return `<div class="club-card"><strong>${item.e} ${item.t}</strong><p style="margin:5px 0 0; font-size:14px; color:#666;">${item.d}</p></div>`;
  }).join("");
}

function resetQuiz() {
  current = 0; userAnswers = [];
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
  document.getElementById("userName").value = "";
}

/* --- УНИВЕРСАЛЬНЫЙ ТЕСТ ФАКУЛЬТЕТА --- */
function startFacultyQuiz(type) {
  activeFacultyQuestions = (type === 'business') ? businessQuestions : appliedQuestions;
  document.getElementById('discipline-main').style.display = 'none';
  document.getElementById('faculty-quiz-screen').style.display = 'block';
  fCurrent = 0;
  fAnswers = [];
  loadFQuestion();
}

function loadFQuestion() {
  const q = activeFacultyQuestions[fCurrent];
  document.getElementById("f-questionTitle").innerText = q.text || q.question; // Поддержка обоих форматов ключей
  document.getElementById("f-progressFill").style.width = `${(fCurrent / activeFacultyQuestions.length) * 100}%`;
  const div = document.getElementById("f-answers");
  div.innerHTML = "";
  const savedAnswer = fAnswers[fCurrent];
  const opts = q.options || q.answers; // Поддержка обоих форматов ключей
  shuffle(opts).forEach(opt => {
      const card = document.createElement("div");
      card.className = "option-card" + (savedAnswer === opt.type ? " selected" : "");
      card.onclick = () => {
          document.querySelectorAll("#f-answers .option-card").forEach(c => c.classList.remove("selected"));
          card.classList.add("selected");
          fAnswers[fCurrent] = opt.type;
      };
      card.innerHTML = `<div class="radio-dot"></div><span>${opt.text}</span>`;
      div.appendChild(card);
  });
}

function fNextQuestion() {
  if(!fAnswers[fCurrent]) return;
  fCurrent++;
  if(fCurrent < activeFacultyQuestions.length) loadFQuestion();
  else showFResult();
}

function fPrevQuestion() {
  if(fCurrent > 0) { fCurrent--; loadFQuestion(); }
  else closeFacultyQuiz();
}

function showFResult() {
  document.getElementById("faculty-quiz-screen").style.display = "none";
  document.getElementById("f-result-screen").style.display = "block";
  const counts = {};
  fAnswers.forEach(t => counts[t] = (counts[t] || 0) + 1);
  const sortedResults = Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 3);
  let html = "";
  sortedResults.forEach(code => {
      const prog = programsData[code];
      if(prog) {
          html += `<div class="club-card" style="text-align:left; margin-bottom:15px; border-left: 5px solid var(--primary);"><div style="font-size:30px;">${prog.icon}</div><h3 style="margin:5px 0;">${prog.title}</h3><p style="font-size:14px; color:#555;">${prog.desc}</p></div>`;
      }
  });
  document.getElementById("f-result-content").innerHTML = html;
}

function closeFacultyQuiz() {
  document.getElementById('discipline-main').style.display = 'block';
  document.getElementById('faculty-quiz-screen').style.display = 'none';
  document.getElementById('f-result-screen').style.display = 'none';
}