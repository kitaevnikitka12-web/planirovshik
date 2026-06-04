const SETTINGS_KEY = "weeklyPlannerSettings";
const TASKS_KEY = "weeklyPlannerTasks";
const DEFAULT_PRIORITY = "medium";
const DEFAULT_TYPE = "other";
const PRIORITY_WEIGHT = { low: 1, medium: 2, high: 3 };
const TASK_TYPE_LABELS = {
  personal: "личная",
  work: "рабочая",
  other: "прочая"
};
const EMPTY_DAY_QUOTES = [
  "Если задач нет, значит день пока смотрит на тебя с уважением.",
  "Пустой список не слабость, а место для точного удара.",
  "День без задач не пустой, он просто держит дистанцию.",
  "Когда дел нет, главное не придумать лишних.",
  "Свободный день любит тех, кто не суетится.",
  "Нет задач — есть пространство для маневра.",
  "План пуст, зато характер полный.",
  "Тишина в календаре громче любого дедлайна.",
  "Не каждая пустота требует заполнения.",
  "Если день свободен, не мешай ему быть легендой.",
  "Задачи приходят и уходят, спокойствие остается.",
  "Пустая колонка — это не лень, это резерв.",
  "Лучший план иногда начинается с паузы.",
  "Когда список пустой, решения становятся чище.",
  "Не загружай день, если день сам себя держит.",
  "Свободное время не валяется, оно выжидает.",
  "Пока задач нет, можно не проигрывать.",
  "Пустой день — это шанс не делать вид, что занят.",
  "Календарь молчит, значит уважает.",
  "Не все дела достойны попасть в план.",
  "Если задач нет, значит дедлайн не нашел адрес.",
  "Пусто не там, где нет задач, а там, где нет фокуса.",
  "День без задач — это не баг, это премиум.",
  "Свободная колонка знает себе цену.",
  "Не торопись заполнять то, что красиво пустует.",
  "Когда план чистый, мысли дышат ровнее.",
  "Задачи любят шум, результат любит тишину.",
  "Пустой день не просит оправданий.",
  "Если список молчит, не перебивай.",
  "Свобода начинается там, где заканчивается срочно.",
  "Ноль задач — тоже статистика победителя.",
  "Не каждый день обязан быть тяжелым.",
  "Пауза — это тоже ход, если ходишь уверенно.",
  "Пока дел нет, держи осанку.",
  "Пустой план — чистый асфальт для разгона.",
  "Когда нечего делать, не делай это красиво.",
  "Свободный день не пустой, он заряженный.",
  "Лучший дедлайн — тот, который не пришел.",
  "Сначала порядок в голове, потом задачи в списке.",
  "Нет задач — нет суеты, а это уже победа.",
  "Пустая колонка не спорит, она ждет сильный ход.",
  "Если день тихий, не включай сирену.",
  "Свободное окно — это дверь, если смотреть правильно.",
  "Не добавляй задачу ради шума.",
  "Календарь пуст, значит можно думать глубже.",
  "День без дел — редкий зверь, береги его.",
  "В пустом списке видно дисциплину.",
  "Если задач нет, значит сегодня ты быстрее хаоса.",
  "Пустота в плане — место для точности.",
  "Не каждый свободный час надо продавать делам.",
  "Список пуст, зато контроль на месте.",
  "Когда нечего закрывать, можно открыть глаза.",
  "Пустой день — это уважение к ресурсу.",
  "Задачи не убежали, они просто не достойны сегодня.",
  "Свободный план — это не отпуск, это позиция.",
  "Если колонка пустая, значит она не берет лишних.",
  "Дедлайны любят толпу, мастер любит тишину.",
  "Нет задач — есть шанс сделать важное без названия.",
  "Пустой календарь не врет.",
  "Когда день свободен, главное не испугаться свободы.",
  "Не суетись: пустой список тоже смотрит.",
  "Задача без смысла хуже пустой строки.",
  "Сегодня дел нет, зато есть стиль.",
  "Пустой день — это место, где растет фокус.",
  "Если ничего не запланировано, не значит ничего не важно.",
  "Календарь чист, как взгляд перед решением.",
  "Свободная колонка — это пауза перед ударом.",
  "Не все, что можно сделать, надо записывать.",
  "Пустой список не давит, и в этом его сила.",
  "День без задач — день без лишних свидетелей.",
  "Когда план пустой, ошибки негде прятаться.",
  "Свободное место в календаре — капитал.",
  "Пока нет задач, есть время не спешить.",
  "Пустой день не слабый, он незанятый.",
  "Если дела не пришли, не зови их без причины.",
  "Сначала смысл, потом галочка.",
  "Ноль задач — максимум воздуха.",
  "Не загружай день тем, что не выдержит вечера.",
  "Пусто в колонке, спокойно в голове.",
  "Свободный день — это тест на умение жить.",
  "Задачи появятся, а пока держи темп.",
  "Когда нет дел, можно не изображать пожар.",
  "Пустой план — не провал, а чистая доска.",
  "Если день ничего не требует, не спорь.",
  "Свобода в расписании — редкий актив.",
  "Пустой список — лучший фильтр от лишнего.",
  "Не каждый день надо побеждать шумом.",
  "Когда задач нет, можно наконец не торопиться.",
  "План молчит, значит слушай себя.",
  "Пустая колонка — знак, что хаос сегодня не прошел.",
  "Без задач день не пустеет, он взрослеет.",
  "Если нечего делать, не делай лишнего.",
  "Пока список пустой, держи инициативу.",
  "Свободный день любит уверенных.",
  "Пусто — значит готово принять только важное.",
  "Нет задач — нет повода терять лицо.",
  "День свободен, но дисциплина на месте.",
  "Календарь чистый, как план без оправданий.",
  "Пустая колонка — это не отсутствие, а запас хода.",
  "Когда задач нет, порядок все равно должен быть."
];
const EMPTY_DAY_PUNCHLINES = [
  "Календарь одобряет.",
  "Галочка ушла за кофе.",
  "Дедлайн не дозвонился.",
  "Суета не прошла фейс-контроль.",
  "Планировщик делает вид, что так и задумано.",
  "Важные дела пока в засаде.",
  "Покой официально легализован.",
  "Колонка держит стиль.",
  "Шум отменен по уважительной причине.",
  "Можно моргнуть без чувства вины.",
  "День пока на чилле.",
  "Задачи ждут пропуск.",
  "Список ушел в режим ниндзя.",
  "Порядок смотрит молча.",
  "Время не против.",
  "Паника не приглашена.",
  "Свобода поставила лайк.",
  "Дела делают вид, что их нет.",
  "Фокус пьет чай.",
  "Легенда пока без квестов."
];

const periodTitle = document.querySelector("#periodTitle");
const plannerGrid = document.querySelector("#plannerGrid");
const viewButtons = document.querySelectorAll("[data-view]");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const todayButton = document.querySelector("#todayButton");
const newTaskButton = document.querySelector("#newTaskButton");
const themeToggleButton = document.querySelector("#themeToggleButton");
const exportButton = document.querySelector("#exportButton");
const importButton = document.querySelector("#importButton");
const importFileInput = document.querySelector("#importFileInput");
const appNotice = document.querySelector("#appNotice");
const taskModal = document.querySelector("#taskModal");
const taskModalTitle = document.querySelector("#taskModalTitle");
const taskForm = document.querySelector("#taskForm");
const taskIdInput = document.querySelector("#taskId");
const taskTitleInput = document.querySelector("#taskTitle");
const taskDateInput = document.querySelector("#taskDate");
const taskPriorityInput = document.querySelector("#taskPriority");
const taskTypeInput = document.querySelector("#taskType");
const taskCommentInput = document.querySelector("#taskComment");
const subtaskFields = document.querySelector("#subtaskFields");
const addSubtaskButton = document.querySelector("#addSubtaskButton");
const formError = document.querySelector("#formError");
const closeModalButton = document.querySelector("#closeModalButton");
const cancelModalButton = document.querySelector("#cancelModalButton");
const modalDeleteButton = document.querySelector("#modalDeleteButton");
const moveModal = document.querySelector("#moveModal");
const moveForm = document.querySelector("#moveForm");
const moveDateInput = document.querySelector("#moveDateInput");
const moveTaskSelect = document.querySelector("#moveTaskSelect");
const moveTargetLabel = document.querySelector("#moveTargetLabel");
const closeMoveModalButton = document.querySelector("#closeMoveModalButton");
const cancelMoveButton = document.querySelector("#cancelMoveButton");
const moveSubmitButton = moveForm.querySelector(".save-task-button");
const filterModal = document.querySelector("#filterModal");
const filterForm = document.querySelector("#filterForm");
const filterPriorityInput = document.querySelector("#filterPriority");
const filterTypeInput = document.querySelector("#filterType");
const filterStatusInput = document.querySelector("#filterStatus");
const sortTasksInput = document.querySelector("#sortTasks");
const closeFilterModalButton = document.querySelector("#closeFilterModalButton");
const resetFiltersButton = document.querySelector("#resetFiltersButton");

let draggedTaskId = null;
let tasksLoadFailed = false;
const savedSettings = loadSettings();

const state = {
  view: savedSettings.view || "week",
  currentDate: startOfDay(new Date()),
  tasks: loadTasks(),
  filters: {
    priority: savedSettings.filters?.priority || "all",
    type: savedSettings.filters?.type || "all",
    status: savedSettings.filters?.status || "all"
  },
  sortBy: savedSettings.sortBy || "manual",
  theme: savedSettings.theme || "light"
};

const pageQuoteOffset = Math.floor(Math.random() * EMPTY_DAY_QUOTES.length);

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY));
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify({
    view: state.view,
    filters: state.filters,
    sortBy: state.sortBy,
    theme: state.theme
  }));
}

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(TASKS_KEY));
    return Array.isArray(saved) ? saved.map(normalizeTask).filter(Boolean) : [];
  } catch {
    tasksLoadFailed = true;
    return [];
  }
}

function normalizeTask(task) {
  if (!task || typeof task !== "object" || !task.id || !task.title || !task.date) {
    return null;
  }

  const now = new Date().toISOString();
  const subtasks = Array.isArray(task.subtasks)
    ? task.subtasks.map(normalizeSubtask).filter(Boolean)
    : [];

  return {
    id: String(task.id),
    title: String(task.title),
    date: String(task.date),
    priority: ["low", "medium", "high"].includes(task.priority) ? task.priority : DEFAULT_PRIORITY,
    type: Object.prototype.hasOwnProperty.call(TASK_TYPE_LABELS, task.type) ? task.type : DEFAULT_TYPE,
    comment: task.comment ? String(task.comment) : "",
    completed: Boolean(task.completed) || areAllSubtasksCompleted(subtasks),
    order: Number.isFinite(Number(task.order)) ? Number(task.order) : 0,
    subtasks,
    createdAt: task.createdAt || now,
    updatedAt: task.updatedAt || task.createdAt || now
  };
}

function normalizeSubtask(subtask) {
  if (!subtask || typeof subtask !== "object") {
    return null;
  }

  const title = String(subtask.title || "").trim();
  if (!title) {
    return null;
  }

  return {
    id: subtask.id ? String(subtask.id) : createId(),
    title,
    completed: Boolean(subtask.completed)
  };
}

function saveTasks() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(state.tasks));
}

function startOfDay(date) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

function addDays(date, amount) {
  const result = new Date(date);
  result.setDate(result.getDate() + amount);
  return startOfDay(result);
}

function addMonths(date, amount) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + amount, 1);
  return startOfDay(result);
}

function getMonday(date) {
  const result = startOfDay(date);
  const day = result.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  return addDays(result, diff);
}

function dateToInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function inputValueToDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return startOfDay(new Date(year, month - 1, day));
}

function sameDay(first, second) {
  return first.getFullYear() === second.getFullYear()
    && first.getMonth() === second.getMonth()
    && first.getDate() === second.getDate();
}

function sameInputDate(first, second) {
  return first === dateToInputValue(second);
}

function isPastInputDate(value) {
  return inputValueToDate(value) < startOfDay(new Date());
}

function formatDate(date, options) {
  return new Intl.DateTimeFormat("ru-RU", options).format(date);
}

function formatCleanDate(date) {
  return formatDate(date, {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).replace(/\s?г\.$/, "");
}

function formatPeriod() {
  if (state.view === "day") {
    return formatCleanDate(state.currentDate);
  }

  if (state.view === "month") {
    return formatDate(state.currentDate, { month: "long", year: "numeric" });
  }

  const weekStart = getMonday(state.currentDate);
  const weekEnd = addDays(weekStart, 6);
  const startDate = formatDate(weekStart, { day: "numeric", month: "long" });
  const endDate = formatDate(weekEnd, { day: "numeric", month: "long" });

  if (weekStart.getFullYear() === weekEnd.getFullYear()) {
    return `${startDate} - ${endDate} ${weekEnd.getFullYear()}`;
  }

  return `${startDate} ${weekStart.getFullYear()} - ${endDate} ${weekEnd.getFullYear()}`;
}

function getVisibleDates() {
  if (state.view === "day") {
    return [state.currentDate];
  }

  if (state.view === "month") {
    const monthStart = startOfDay(new Date(state.currentDate.getFullYear(), state.currentDate.getMonth(), 1));
    const monthEnd = startOfDay(new Date(state.currentDate.getFullYear(), state.currentDate.getMonth() + 1, 0));
    const gridStart = getMonday(monthStart);
    const gridEnd = addDays(getMonday(monthEnd), 6);
    const daysCount = Math.round((gridEnd - gridStart) / 86400000) + 1;

    return Array.from({ length: daysCount }, (_, index) => addDays(gridStart, index));
  }

  const weekStart = getMonday(state.currentDate);
  return Array.from({ length: 7 }, (_, index) => addDays(weekStart, index));
}

function getTasksForDate(date) {
  return state.tasks
    .filter((task) => sameInputDate(task.date, date))
    .filter(matchesFilters)
    .sort(compareTasks);
}

function hasTasksForDate(date) {
  return state.tasks.some((task) => sameInputDate(task.date, date));
}

function hasOverdueTasksForDate(date) {
  return state.tasks.some((task) => !task.completed && sameInputDate(task.date, date) && isPastInputDate(task.date));
}

function getOverdueDates() {
  return Array.from(new Set(
    state.tasks
      .filter((task) => !task.completed && isPastInputDate(task.date))
      .map((task) => task.date)
  )).sort();
}

function matchesFilters(task) {
  if (state.filters.priority !== "all" && task.priority !== state.filters.priority) {
    return false;
  }

  if (state.filters.type !== "all" && task.type !== state.filters.type) {
    return false;
  }

  if (state.filters.status === "active" && task.completed) {
    return false;
  }

  if (state.filters.status === "completed" && !task.completed) {
    return false;
  }

  return true;
}

function compareTasks(first, second) {
  if (state.sortBy === "priority-desc") {
    return PRIORITY_WEIGHT[second.priority] - PRIORITY_WEIGHT[first.priority]
      || first.order - second.order;
  }

  if (state.sortBy === "priority-asc") {
    return PRIORITY_WEIGHT[first.priority] - PRIORITY_WEIGHT[second.priority]
      || first.order - second.order;
  }

  if (state.sortBy === "title") {
    return first.title.localeCompare(second.title, "ru")
      || first.order - second.order;
  }

  if (state.sortBy === "created-desc") {
    return second.createdAt.localeCompare(first.createdAt)
      || first.order - second.order;
  }

  return first.order - second.order || first.createdAt.localeCompare(second.createdAt);
}

function getProgress(task) {
  const total = task.subtasks.length;
  const done = task.subtasks.filter((subtask) => subtask.completed).length;
  return { done, total };
}

function getRandomEmptyQuote() {
  const index = Math.floor(Math.random() * EMPTY_DAY_QUOTES.length);
  const punchlineIndex = Math.floor(Math.random() * EMPTY_DAY_PUNCHLINES.length);
  return `${EMPTY_DAY_QUOTES[index]} ${EMPTY_DAY_PUNCHLINES[punchlineIndex]}`;
}

function getEmptyQuoteForDate(date) {
  const dayKey = Math.floor(startOfDay(date).getTime() / 86400000);
  const quoteIndex = Math.abs(dayKey + pageQuoteOffset) % EMPTY_DAY_QUOTES.length;
  const punchlineIndex = Math.abs(dayKey * 7 + pageQuoteOffset) % EMPTY_DAY_PUNCHLINES.length;
  return `${EMPTY_DAY_QUOTES[quoteIndex]} ${EMPTY_DAY_PUNCHLINES[punchlineIndex]}`;
}

function getWeekdayEmoji(date) {
  const emojiByDay = {
    0: "🛋️",
    1: "🚀",
    2: "🔥",
    3: "⚙️",
    4: "🧠",
    5: "🌿",
    6: "🎯"
  };

  return emojiByDay[date.getDay()];
}

function formatDayHeader(date) {
  const weekday = formatDate(date, { weekday: "short" }).replace(".", "").toUpperCase();
  const month = formatDate(date, { month: "short" }).replace(".", "").toUpperCase();
  return `${weekday}, ${date.getDate()} ${month} ${getWeekdayEmoji(date)}`;
}

function formatFullDayHeader(date) {
  const weekday = formatDate(date, { weekday: "long" });
  const fullDate = formatCleanDate(date);
  return `${weekday}, ${fullDate} ${getWeekdayEmoji(date)}`;
}

function createEmptyState(date) {
  const empty = document.createElement("div");
  empty.className = "empty-state";

  const quote = document.createElement("p");
  quote.className = "empty-quote";
  quote.textContent = getEmptyQuoteForDate(date);

  const hint = document.createElement("span");
  hint.className = "empty-hint";
  hint.textContent = "задач пока нет";

  empty.append(quote, hint);
  return empty;
}

function createFilteredEmptyState() {
  const empty = document.createElement("div");
  empty.className = "empty-state";

  const quote = document.createElement("p");
  quote.className = "empty-quote";
  quote.textContent = "Фильтр включен: задачи есть, но они в маскировке.";

  const hint = document.createElement("span");
  hint.className = "empty-hint";
  hint.textContent = "по фильтру пусто";

  empty.append(quote, hint);
  return empty;
}

function createOverdueNotice() {
  const overdueDates = getOverdueDates();

  if (overdueDates.length === 0) {
    return null;
  }

  const notice = document.createElement("div");
  notice.className = "overdue-notice";
  notice.textContent = `есть невыполненные задачи за ${overdueDates.map(formatInputDate).join(", ")}. пожалуйста закройте их или перенесите`;
  return notice;
}

function areFiltersActive() {
  return state.filters.priority !== "all"
    || state.filters.type !== "all"
    || state.filters.status !== "all"
    || state.sortBy !== "manual";
}

function createDayColumn(date) {
  const column = document.createElement("article");
  column.className = "day-column";
  column.classList.toggle("single-day-column", state.view === "day");
  column.classList.toggle("is-outside-month", state.view === "month" && date.getMonth() !== state.currentDate.getMonth());
  column.classList.toggle("has-overdue", state.view !== "day" && hasOverdueTasksForDate(date));

  if (sameDay(date, new Date())) {
    column.classList.add("is-today");
  }

  const header = document.createElement("header");
  header.className = "day-header";

  const weekday = document.createElement("span");
  weekday.className = "weekday";
  weekday.textContent = state.view === "day" ? formatFullDayHeader(date) : formatDayHeader(date);

  const headerActions = document.createElement("div");
  headerActions.className = "day-header-actions";

  const createButton = document.createElement("button");
  createButton.className = "day-action-button day-create-button";
  createButton.type = "button";
  createButton.setAttribute("aria-label", "Создать задачу на этот день");
  createButton.title = "Создать задачу";
  createButton.textContent = "+";
  createButton.addEventListener("click", () => openTaskModal(null, date));

  const moveButton = document.createElement("button");
  moveButton.className = "day-action-button day-move-button";
  moveButton.type = "button";
  moveButton.setAttribute("aria-label", "Перенести задачу на этот день");
  moveButton.title = "Перенести задачу сюда";
  moveButton.textContent = "↷";
  moveButton.addEventListener("click", () => openMoveModal(date));

  const filterButton = document.createElement("button");
  filterButton.className = "day-action-button day-filter-button";
  filterButton.type = "button";
  filterButton.setAttribute("aria-label", "Фильтр и сортировка");
  filterButton.title = "Фильтр и сортировка";
  filterButton.textContent = "≡";
  filterButton.classList.toggle("is-active", areFiltersActive());
  filterButton.addEventListener("click", openFilterModal);

  headerActions.append(createButton, moveButton, filterButton);
  header.append(weekday, headerActions);
  column.append(header);

  const tasks = getTasksForDate(date);
  column.classList.toggle("has-many-tasks", tasks.length >= 4);
  if (tasks.length === 0) {
    column.append(hasTasksForDate(date) ? createFilteredEmptyState() : createEmptyState(date));
    return column;
  }

  const list = document.createElement("div");
  list.className = "task-list";
  list.dataset.date = dateToInputValue(date);
  list.addEventListener("dragover", handleTaskDragOver);
  list.addEventListener("drop", handleTaskDrop);
  list.addEventListener("dragleave", handleTaskDragLeave);

  tasks.forEach((task) => {
    list.append(createTaskCard(task));
  });

  column.append(list);
  return column;
}

function createDayPicker() {
  const picker = document.createElement("nav");
  picker.className = "day-picker";
  picker.setAttribute("aria-label", "Выбор дня недели");

  const weekStart = getMonday(state.currentDate);

  Array.from({ length: 7 }, (_, index) => addDays(weekStart, index)).forEach((date) => {
    const button = document.createElement("button");
    button.className = "day-picker-button";
    button.type = "button";
    button.classList.toggle("is-active", sameDay(date, state.currentDate));
    button.textContent = `${formatDate(date, { weekday: "short" }).replace(".", "")}, ${formatDate(date, { day: "numeric", month: "long" })}`;
    button.addEventListener("click", () => {
      state.currentDate = date;
      render();
    });
    picker.append(button);
  });

  return picker;
}

function createTaskCard(task) {
  const card = document.createElement("article");
  card.className = "task-card";
  card.classList.toggle("is-completed", task.completed);
  card.classList.toggle("is-overdue", state.view !== "day" && !task.completed && isPastInputDate(task.date));
  card.draggable = state.sortBy === "manual";
  card.dataset.taskId = task.id;
  card.dataset.date = task.date;
  card.addEventListener("dragstart", handleTaskDragStart);
  card.addEventListener("dragend", handleTaskDragEnd);

  const top = document.createElement("div");
  top.className = "task-card-top";

  const mainLine = document.createElement("div");
  mainLine.className = "task-main-line";

  const completeLabel = document.createElement("label");
  completeLabel.className = "task-complete-label";
  completeLabel.setAttribute("aria-label", "Отметить задачу выполненной");

  const completeInput = document.createElement("input");
  completeInput.type = "checkbox";
  completeInput.checked = task.completed;
  completeInput.addEventListener("change", () => {
    setTaskCompleted(task.id, completeInput.checked);
  });

  completeLabel.append(completeInput);

  const title = document.createElement("p");
  title.className = "task-title";
  title.textContent = task.title;

  const badge = document.createElement("span");
  badge.className = `priority-badge priority-${task.priority}`;
  badge.textContent = task.priority;

  const typeBadge = document.createElement("span");
  typeBadge.className = `type-badge type-${task.type}`;
  typeBadge.textContent = TASK_TYPE_LABELS[task.type] || TASK_TYPE_LABELS[DEFAULT_TYPE];

  mainLine.append(completeLabel, title);

  const metaLine = document.createElement("div");
  metaLine.className = "task-meta-line";
  metaLine.append(badge, typeBadge);

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const editButton = document.createElement("button");
  editButton.className = "task-edit-button";
  editButton.type = "button";
  editButton.setAttribute("aria-label", "Редактировать задачу");
  editButton.title = "Редактировать";
  editButton.textContent = "✎";
  editButton.addEventListener("click", () => openTaskModal(task));

  const deleteButton = document.createElement("button");
  deleteButton.className = "task-delete-button";
  deleteButton.type = "button";
  deleteButton.setAttribute("aria-label", "Удалить задачу");
  deleteButton.textContent = "×";
  deleteButton.addEventListener("click", () => deleteTask(task.id));

  actions.append(editButton, deleteButton);
  top.append(mainLine, actions);

  card.append(top, metaLine);

  if (task.subtasks.length > 0) {
    const progress = getProgress(task);
    const progressText = document.createElement("p");
    progressText.className = "task-progress";
    progressText.textContent = `${progress.done}/${progress.total} выполнено`;
    card.append(progressText);
  }

  if (task.comment.trim()) {
    const comment = document.createElement("p");
    comment.className = "task-comment";
    comment.textContent = task.comment;
    card.append(comment);
  }

  if (task.subtasks.length > 0) {
    const list = document.createElement("ul");
    list.className = "subtask-list";

    task.subtasks.forEach((subtask) => {
      list.append(createCardSubtask(task.id, subtask));
    });

    card.append(list);
  }

  return card;
}

function createCardSubtask(taskId, subtask) {
  const item = document.createElement("li");
  item.className = "subtask-item";
  item.classList.toggle("is-completed", subtask.completed);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = subtask.completed;
  checkbox.addEventListener("change", () => {
    setSubtaskCompleted(taskId, subtask.id, checkbox.checked);
  });

  const title = document.createElement("span");
  title.textContent = subtask.title;

  item.append(checkbox, title);
  return item;
}

function render() {
  const visibleDates = getVisibleDates();
  const visibleTasks = visibleDates.flatMap(getTasksForDate);

  periodTitle.textContent = formatPeriod();
  plannerGrid.className = `planner-grid ${state.view}-view`;
  plannerGrid.innerHTML = "";

  viewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.view);
  });

  if (state.view === "week" && visibleTasks.length === 0) {
    const note = document.createElement("div");
    note.className = "week-empty-note";
    note.textContent = "на эту неделю задач пока нет";
    plannerGrid.append(note);
  }

  if (state.view === "day") {
    const overdueNotice = createOverdueNotice();
    if (overdueNotice) {
      plannerGrid.append(overdueNotice);
    }
    plannerGrid.append(createDayPicker());
  }

  visibleDates.forEach((date) => {
    plannerGrid.append(createDayColumn(date));
  });
}

function openTaskModal(task, date = state.currentDate) {
  const isEditing = Boolean(task);

  taskModalTitle.textContent = isEditing ? "Редактирование задачи" : "Новая задача";
  taskIdInput.value = isEditing ? task.id : "";
  taskTitleInput.value = isEditing ? task.title : "";
  taskDateInput.value = isEditing ? task.date : dateToInputValue(date);
  taskPriorityInput.value = isEditing ? task.priority : DEFAULT_PRIORITY;
  taskTypeInput.value = isEditing ? task.type : DEFAULT_TYPE;
  taskCommentInput.value = isEditing ? task.comment : "";
  formError.textContent = "";
  modalDeleteButton.hidden = !isEditing;
  renderSubtaskFields(isEditing ? task.subtasks : []);

  taskModal.hidden = false;
  document.body.classList.add("modal-open");
  taskTitleInput.focus();
}

function closeTaskModal() {
  taskModal.hidden = true;
  document.body.classList.remove("modal-open");
  taskForm.reset();
  taskIdInput.value = "";
  taskPriorityInput.value = DEFAULT_PRIORITY;
  taskTypeInput.value = DEFAULT_TYPE;
  subtaskFields.innerHTML = "";
  formError.textContent = "";
  modalDeleteButton.hidden = true;
}

function openMoveModal(targetDate) {
  const targetDateValue = dateToInputValue(targetDate);
  moveDateInput.value = targetDateValue;
  updateMoveTargetLabel();
  renderMoveTaskOptions(targetDateValue);
  moveModal.hidden = false;
  document.body.classList.add("modal-open");
  moveDateInput.focus();
}

function closeMoveModal() {
  moveModal.hidden = true;
  document.body.classList.remove("modal-open");
  moveForm.reset();
  moveTaskSelect.innerHTML = "";
  moveTargetLabel.textContent = "";
}

function openFilterModal() {
  filterPriorityInput.value = state.filters.priority;
  filterTypeInput.value = state.filters.type;
  filterStatusInput.value = state.filters.status;
  sortTasksInput.value = state.sortBy;
  filterModal.hidden = false;
  document.body.classList.add("modal-open");
  filterPriorityInput.focus();
}

function closeFilterModal() {
  filterModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function handleFilterSubmit(event) {
  event.preventDefault();
  state.filters = {
    priority: filterPriorityInput.value,
    type: filterTypeInput.value,
    status: filterStatusInput.value
  };
  state.sortBy = sortTasksInput.value;
  saveSettings();
  closeFilterModal();
  render();
}

function resetFilters() {
  state.filters = {
    priority: "all",
    type: "all",
    status: "all"
  };
  state.sortBy = "manual";
  saveSettings();
  closeFilterModal();
  render();
}

function applyTheme() {
  document.body.classList.toggle("dark-theme", state.theme === "dark");
  themeToggleButton.textContent = state.theme === "dark" ? "☀" : "🌙";
  themeToggleButton.setAttribute(
    "aria-label",
    state.theme === "dark" ? "Включить светлую тему" : "Включить темную тему"
  );
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  saveSettings();
  applyTheme();
}

function handleMoveSubmit(event) {
  event.preventDefault();

  if (!moveTaskSelect.value || !moveDateInput.value) {
    return;
  }

  moveTaskToDate(moveTaskSelect.value, moveDateInput.value);
  closeMoveModal();
  render();
}

function updateMoveTargetLabel() {
  moveTargetLabel.textContent = moveDateInput.value
    ? `перенести на ${formatInputDate(moveDateInput.value)}`
    : "выберите дату переноса";
}

function renderMoveTaskOptions(targetDateValue) {
  const movableTasks = state.tasks
    .filter((task) => !task.completed)
    .sort((first, second) => first.date.localeCompare(second.date) || first.order - second.order);

  moveTaskSelect.innerHTML = "";
  moveTaskSelect.disabled = movableTasks.length === 0;
  moveSubmitButton.disabled = movableTasks.length === 0;

  if (movableTasks.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "нет невыполненных задач для переноса";
    moveTaskSelect.append(option);
    return;
  }

  movableTasks.forEach((task) => {
    const option = document.createElement("option");
    option.value = task.id;
    option.textContent = `${task.title} — ${formatInputDate(task.date)}`;
    moveTaskSelect.append(option);
  });
}

function renderSubtaskFields(subtasks) {
  subtaskFields.innerHTML = "";

  if (subtasks.length === 0) {
    addSubtaskField();
    return;
  }

  subtasks.forEach((subtask) => {
    addSubtaskField(subtask);
  });
}

function addSubtaskField(subtask = {}) {
  const row = document.createElement("div");
  row.className = "subtask-field";
  row.dataset.subtaskId = subtask.id || createId();

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = Boolean(subtask.completed);
  checkbox.setAttribute("aria-label", "Подзадача выполнена");

  const input = document.createElement("input");
  input.type = "text";
  input.value = subtask.title || "";
  input.placeholder = "Пункт чек-листа";

  const removeButton = document.createElement("button");
  removeButton.className = "remove-subtask-button";
  removeButton.type = "button";
  removeButton.setAttribute("aria-label", "Удалить пункт чек-листа");
  removeButton.textContent = "×";
  removeButton.addEventListener("click", () => row.remove());

  row.append(checkbox, input, removeButton);
  subtaskFields.append(row);
  input.focus();
}

function getSubtasksFromForm() {
  return Array.from(subtaskFields.querySelectorAll(".subtask-field"))
    .map((row) => {
      const titleInput = row.querySelector("input[type='text']");
      const completedInput = row.querySelector("input[type='checkbox']");
      const title = titleInput.value.trim();

      if (!title) {
        return null;
      }

      return {
        id: row.dataset.subtaskId || createId(),
        title,
        completed: completedInput.checked
      };
    })
    .filter(Boolean);
}

function getNextOrderForDate(date) {
  const orders = state.tasks
    .filter((task) => task.date === date)
    .map((task) => Number(task.order))
    .filter(Number.isFinite);

  return orders.length > 0 ? Math.max(...orders) + 1 : 0;
}

function buildTaskFromForm(existingTask) {
  const now = new Date().toISOString();
  const subtasks = getSubtasksFromForm();
  const allSubtasksCompleted = areAllSubtasksCompleted(subtasks);
  const nextDate = taskDateInput.value;
  const dateChanged = existingTask && existingTask.date !== nextDate;

  return {
    id: existingTask ? existingTask.id : createId(),
    title: taskTitleInput.value.trim(),
    date: nextDate,
    priority: taskPriorityInput.value || DEFAULT_PRIORITY,
    type: taskTypeInput.value || DEFAULT_TYPE,
    comment: taskCommentInput.value.trim(),
    completed: allSubtasksCompleted || (existingTask ? existingTask.completed : false),
    order: existingTask && !dateChanged ? existingTask.order : getNextOrderForDate(nextDate),
    subtasks,
    createdAt: existingTask ? existingTask.createdAt : now,
    updatedAt: now
  };
}

function handleTaskSubmit(event) {
  event.preventDefault();

  if (!taskTitleInput.value.trim()) {
    formError.textContent = "введите название задачи";
    taskTitleInput.focus();
    return;
  }

  if (!taskDateInput.value) {
    formError.textContent = "выберите дату";
    taskDateInput.focus();
    return;
  }

  const taskId = taskIdInput.value;
  const existingTask = state.tasks.find((task) => task.id === taskId);
  const nextTask = buildTaskFromForm(existingTask);

  if (existingTask) {
    state.tasks = state.tasks.map((task) => task.id === taskId ? nextTask : task);
  } else {
    state.tasks.push(nextTask);
  }

  saveTasks();
  closeTaskModal();
  render();
}

function setTaskCompleted(taskId, completed) {
  const now = new Date().toISOString();

  state.tasks = state.tasks.map((task) => {
    if (task.id !== taskId) {
      return task;
    }

    return {
      ...task,
      completed,
      subtasks: completed
        ? task.subtasks.map((subtask) => ({ ...subtask, completed: true }))
        : task.subtasks,
      updatedAt: now
    };
  });

  saveTasks();
  render();
}

function setSubtaskCompleted(taskId, subtaskId, completed) {
  const now = new Date().toISOString();

  state.tasks = state.tasks.map((task) => {
    if (task.id !== taskId) {
      return task;
    }

    const subtasks = task.subtasks.map((subtask) => (
      subtask.id === subtaskId ? { ...subtask, completed } : subtask
    ));

    return {
      ...task,
      completed: task.completed || areAllSubtasksCompleted(subtasks),
      subtasks,
      updatedAt: now
    };
  });

  saveTasks();
  render();
}

function areAllSubtasksCompleted(subtasks) {
  return subtasks.length > 0 && subtasks.every((subtask) => subtask.completed);
}

function moveTaskToDate(taskId, nextDate) {
  const task = state.tasks.find((item) => item.id === taskId);

  if (!task || task.date === nextDate) {
    return;
  }

  const previousDate = task.date;
  const moveNote = `задача перенесена с ${formatInputDate(previousDate)} на ${formatInputDate(nextDate)}`;
  const nextComment = task.comment.trim()
    ? `${task.comment.trim()}\n${moveNote}`
    : moveNote;
  const nextOrder = getNextOrderForDate(nextDate);
  const updatedAt = new Date().toISOString();

  state.tasks = state.tasks.map((item) => (
    item.id === taskId
      ? {
          ...item,
          date: nextDate,
          order: nextOrder,
          comment: nextComment,
          updatedAt
        }
      : item
  ));

  saveTasks();
}

function formatInputDate(value) {
  return formatCleanDate(inputValueToDate(value));
}

function showNotice(message, type = "error") {
  appNotice.textContent = message;
  appNotice.hidden = false;
  appNotice.classList.toggle("is-success", type === "success");
}

function hideNotice() {
  appNotice.textContent = "";
  appNotice.hidden = true;
  appNotice.classList.remove("is-success");
}

function exportTasks() {
  const backupDate = dateToInputValue(new Date());
  const fileName = `weekly-planner-backup-${backupDate}.json`;
  const blob = new Blob([JSON.stringify(state.tasks, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showNotice(`экспорт создан: ${fileName}`, "success");
}

function openImportDialog() {
  importFileInput.value = "";
  importFileInput.click();
}

async function handleImportFile(event) {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const replaceExisting = confirm(
    "как импортировать задачи?\n\nOK — заменить текущие задачи.\nОтмена — добавить импортированные к текущим."
  );

  try {
    const importedTasks = await readTasksFromFile(file);

    state.tasks = replaceExisting
      ? importedTasks
      : [...state.tasks, ...prepareTasksForAppend(importedTasks)];

    saveTasks();
    render();
    showNotice(replaceExisting ? "задачи заменены из файла" : "задачи добавлены из файла", "success");
  } catch {
    showNotice("не удалось импортировать файл. проверьте, что выбран корректный json-файл");
  } finally {
    importFileInput.value = "";
  }
}

async function readTasksFromFile(file) {
  if (!file.name.toLowerCase().endsWith(".json")) {
    throw new Error("not-json");
  }

  const text = await file.text();
  let parsed;

  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error("bad-json");
  }

  const rawTasks = Array.isArray(parsed)
    ? parsed
    : parsed && Array.isArray(parsed.tasks) ? parsed.tasks : null;

  if (!rawTasks) {
    throw new Error("bad-structure");
  }

  const normalizedTasks = rawTasks.map(normalizeTask);

  if (normalizedTasks.some((task) => !task)) {
    throw new Error("bad-task");
  }

  return normalizedTasks;
}

function prepareTasksForAppend(importedTasks) {
  const nextOrderByDate = new Map();

  return importedTasks.map((task) => {
    const nextOrder = nextOrderByDate.has(task.date)
      ? nextOrderByDate.get(task.date)
      : getNextOrderForDate(task.date);

    nextOrderByDate.set(task.date, nextOrder + 1);

    return {
      ...task,
      id: createId(),
      order: nextOrder,
      subtasks: task.subtasks.map((subtask) => ({
        ...subtask,
        id: createId()
      })),
      updatedAt: new Date().toISOString()
    };
  });
}

function handleTaskDragStart(event) {
  draggedTaskId = event.currentTarget.dataset.taskId;
  event.currentTarget.classList.add("is-dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", draggedTaskId);
}

function handleTaskDragEnd(event) {
  draggedTaskId = null;
  event.currentTarget.classList.remove("is-dragging");
  document.querySelectorAll(".task-card.is-drag-over").forEach((card) => {
    card.classList.remove("is-drag-over");
  });
}

function handleTaskDragOver(event) {
  const draggedId = draggedTaskId || event.dataTransfer.getData("text/plain");
  const draggedTask = state.tasks.find((task) => task.id === draggedId);

  if (!draggedTask || draggedTask.date !== event.currentTarget.dataset.date) {
    return;
  }

  event.preventDefault();
  event.dataTransfer.dropEffect = "move";

  event.currentTarget.querySelectorAll(".task-card.is-drag-over").forEach((card) => {
    card.classList.remove("is-drag-over");
  });

  const targetCard = getDropTargetCard(event.currentTarget, event.clientY);
  if (targetCard) {
    targetCard.classList.add("is-drag-over");
  }
}

function handleTaskDragLeave(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    event.currentTarget.querySelectorAll(".task-card.is-drag-over").forEach((card) => {
      card.classList.remove("is-drag-over");
    });
  }
}

function handleTaskDrop(event) {
  const draggedId = draggedTaskId || event.dataTransfer.getData("text/plain");
  const listDate = event.currentTarget.dataset.date;
  const draggedTask = state.tasks.find((task) => task.id === draggedId);

  event.currentTarget.querySelectorAll(".task-card.is-drag-over").forEach((card) => {
    card.classList.remove("is-drag-over");
  });

  if (!draggedTask || draggedTask.date !== listDate) {
    return;
  }

  event.preventDefault();

  const targetCard = getDropTargetCard(event.currentTarget, event.clientY);
  const targetId = targetCard ? targetCard.dataset.taskId : null;
  reorderTasksForDate(listDate, draggedId, targetId);
}

function getDropTargetCard(list, pointerY) {
  const cards = Array.from(list.querySelectorAll(".task-card:not(.is-dragging)"));

  return cards.reduce((closest, card) => {
    const box = card.getBoundingClientRect();
    const offset = pointerY - box.top - box.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset, card };
    }

    return closest;
  }, { offset: Number.NEGATIVE_INFINITY, card: null }).card;
}

function reorderTasksForDate(date, draggedId, targetId) {
  if (draggedId === targetId) {
    return;
  }

  const orderedDayTasks = state.tasks
    .filter((task) => task.date === date)
    .sort((first, second) => first.order - second.order || first.createdAt.localeCompare(second.createdAt));
  const draggedIndex = orderedDayTasks.findIndex((task) => task.id === draggedId);

  if (draggedIndex === -1) {
    return;
  }

  const [draggedTask] = orderedDayTasks.splice(draggedIndex, 1);
  const targetIndex = targetId ? orderedDayTasks.findIndex((task) => task.id === targetId) : -1;

  if (targetIndex === -1) {
    orderedDayTasks.push(draggedTask);
  } else {
    orderedDayTasks.splice(targetIndex, 0, draggedTask);
  }

  const updatedAt = new Date().toISOString();
  const orderById = new Map(orderedDayTasks.map((task, index) => [task.id, index]));

  state.tasks = state.tasks.map((task) => (
    orderById.has(task.id)
      ? { ...task, order: orderById.get(task.id), updatedAt }
      : task
  ));

  saveTasks();
  render();
}

function deleteTask(taskId) {
  if (!confirm("удалить задачу? это действие нельзя отменить")) {
    return;
  }

  state.tasks = state.tasks.filter((task) => task.id !== taskId);
  saveTasks();
  closeTaskModal();
  render();
}

function createId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `task-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view;
    saveSettings();
    render();
  });
});

prevButton.addEventListener("click", () => {
  state.currentDate = state.view === "month"
    ? addMonths(state.currentDate, -1)
    : addDays(state.currentDate, state.view === "week" ? -7 : -1);
  render();
});

nextButton.addEventListener("click", () => {
  state.currentDate = state.view === "month"
    ? addMonths(state.currentDate, 1)
    : addDays(state.currentDate, state.view === "week" ? 7 : 1);
  render();
});

todayButton.addEventListener("click", () => {
  state.currentDate = startOfDay(new Date());
  render();
});

newTaskButton.addEventListener("click", () => {
  hideNotice();
  openTaskModal();
});

themeToggleButton.addEventListener("click", toggleTheme);
exportButton.addEventListener("click", exportTasks);
importButton.addEventListener("click", openImportDialog);
importFileInput.addEventListener("change", handleImportFile);
closeModalButton.addEventListener("click", closeTaskModal);
cancelModalButton.addEventListener("click", closeTaskModal);
taskForm.addEventListener("submit", handleTaskSubmit);
addSubtaskButton.addEventListener("click", () => addSubtaskField());
closeMoveModalButton.addEventListener("click", closeMoveModal);
cancelMoveButton.addEventListener("click", closeMoveModal);
moveForm.addEventListener("submit", handleMoveSubmit);
moveDateInput.addEventListener("change", updateMoveTargetLabel);
closeFilterModalButton.addEventListener("click", closeFilterModal);
filterForm.addEventListener("submit", handleFilterSubmit);
resetFiltersButton.addEventListener("click", resetFilters);

modalDeleteButton.addEventListener("click", () => {
  if (taskIdInput.value) {
    deleteTask(taskIdInput.value);
  }
});

taskModal.addEventListener("click", (event) => {
  if (event.target === taskModal) {
    closeTaskModal();
  }
});

moveModal.addEventListener("click", (event) => {
  if (event.target === moveModal) {
    closeMoveModal();
  }
});

filterModal.addEventListener("click", (event) => {
  if (event.target === filterModal) {
    closeFilterModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !taskModal.hidden) {
    closeTaskModal();
  }

  if (event.key === "Escape" && !moveModal.hidden) {
    closeMoveModal();
  }

  if (event.key === "Escape" && !filterModal.hidden) {
    closeFilterModal();
  }
});

applyTheme();
render();

if (tasksLoadFailed) {
  showNotice("не удалось загрузить сохраненные задачи. данные могут быть повреждены");
}
