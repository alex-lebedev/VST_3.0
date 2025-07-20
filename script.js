// Array of all possible values
const originalValues = [
    { name: "Соединенность с природой", description: "Гармония с природой и ее элементами." },
    { name: "Окружающая среда", description: "Сохранение природны и экосистем." },
    { name: "Автономность", description: "Свобода и независимость в мыслях и действиях." },
    { name: "Религия", description: "Соблюдение религиозных убеждений и практик." },
    { name: "Семья", description: "Ценить и отдавать приоритет семейным отношениям." },
    { name: "Инновации", description: "Стремление к новым идеям и творческим подходам в решении задач." },
    { name: "Прощение", description: "Отпускать обиды и двигаться вперёд с легкостью, пониманием и состраданием." },
    { name: "Порядок", description: "Выбор в пользу четкости, предсказуемости и структуры." },
    { name: "Критическое мышление", description: "Глубокий анализ и критическая оценка сложностей." },
    { name: "Служение", description: "Посвящение себя делу, выходящему за рамки личной выгоды." },
    { name: "Сострадание", description: "Проявление эмпатии и доброты к другим." },
    { name: "Образование", description: "Ценность приобретения знаний и обучения." },
    { name: "Честность", description: "Соблюдение моральных и этических принципов." },
    { name: "Свобода", description: "Возможность говорить, действовать и мыслить без препятствий." },
    { name: "Мужество", description: "Противостоять страхам и отстаивать то, что правильно." },
    { name: "Справедливость", description: "Содействие справедливости, равенству и ответственности." },
    { name: "Здоровье", description: "Приоритет физического, психического и эмоционального благополучия." },
    { name: "Слава", description: "Быть широко известным и узнаваемым." },
    { name: "Уважение", description: "Проявление внимания и уважения к другим и себе." },
    { name: "Верность", description: "Быть верным обязательствам и обязанностям." },
    { name: "Творчество", description: "Самовыражение через оригинальные идеи и инновации." },
    { name: "Радость", description: "Стремление к счастью и радости в жизни." },
    { name: "Лидерство", description: "Вдохновение и управление другими во имя общей цели." },
    { name: "Скромность", description: "Скромное восприятие себя и своей важности." },
    { name: "Возможности", description: "Широкие возможности принятие решений для себя и других." },
    { name: "Альтруизм", description: "Бескорыстное действие на благо других." },
    { name: "Приключения", description: "Поиск новых и захватывающих переживаний." },
    { name: "Мудрость", description: "Применение знаний, опыта и проницательности в принятии обоснованных решений." },
    { name: "Баланс", description: "Поддержание гармонии между различными аспектами жизни." },
    { name: "Стабильность", description: "Поддержание постоянства и надежности в жизни." },
    { name: "Благодарность", description: "Быть благодарным за добро в жизни и выражать признательность." },
    { name: "Честь", description: "Соблюдение принципов честности и уважения." },
    { name: "Щедрость", description: "Способность отдавать без ожидания чего-либо взамен." },
    { name: "Настойчивость", description: "Непоколебимое продолжение действий вопреки трудностям." },
    { name: "Интерес", description: "Иметь сильное желание учиться и понимать." },
    { name: "Ответственность", description: "Быть ответственным за свои действия и их последствия." },
    { name: "Власть", description: "Реализация контроля или влияния над другими." },
    { name: "Традиции", description: "Ценность и сохранение культурных практик и норм." },
    { name: "Инклюзивность", description: "Обеспечение возможности участия и принятия каждого." },
    { name: "Устойчивое развитие", description: "Удовлетворение потребностей без ущерба для возможностей будущих поколений." },
    { name: "Аутентичность", description: "Жить искренне, в гармонии со своими истинными мыслями и чувствами." },
    { name: "Устойчивость", description: "Быстрое восстановление после трудностей; стойкость." },
    { name: "Мир", description: "Стремление к гармонии и свободе от конфликтов." },
    { name: "Любовь", description: "Глубокая привязанность и забота о ком-то или о чем-то." },
    { name: "Оптимизм", description: "Позитивный взгляд на будущее." },
    { name: "Осознанность", description: "Быть в настоящем, полностью погруженным в текущий момент." },
    { name: "Эффективность", description: "Достижение максимальной продуктивности с минимальной тратой усилий или ресурсов." },
    { name: "Безопасность", description: "Чувство защищенности в своей среде или отношениях." },
    { name: "Богатство", description: "Накопление материального богатства и финансовых выгод." },
    { name: "Эмпатия", description: "Понимание и разделение чувств другого." },
    { name: "Юмор", description: "Ценность и выражение того, что смешно, забавно или абсурдно." },
    { name: "Значимая работа", description: "Занятие работой, имеющей значительное и положительное влияние." },
    { name: "Терпение", description: "Спокойное принятие трудностей без раздражения." },
    { name: "Дисциплина", description: "Развитие самоконтроля и кодекса поведения, ясности." },
    { name: "Мастерство", description: "Превышение обычных стандартов и достижения великого мастерства." },
    { name: "Равенство", description: "Вера в равные права и возможности для всех и работа в этом направлении." },
    { name: "Саморефлексия", description: "Размышление и осмысление собственных мыслей, чувств и поведения." },
    { name: "Кооперация", description: "Совместная работа с другими для создания или производства чего-либо." },
    { name: "Адаптивность", description: "Способность адаптироваться к новым условиям или окружающей среде." },
    { name: "Прозрачность", description: "Действивать в манере, которая честна, открыта и понятна другим." },
    { name: "Усердие", description: "Настойчивая и упорная работа над достижением целей." },
    { name: "Духовность", description: "Поиск глубокого смысла или цели, которая превосходит личную." },
    { name: "Поддержка", description: "Поддержка тех, кто в противном случае мог бы остаться в стороне." },
    { name: "Интуиция", description: "Понимание чего-либо инстинктивно, без необходимости сознательного рассуждения." }
];

// Состояние текущей колоды
let currentPool = [...originalValues];

// DOM
const cardContainer = document.getElementById('card-container');
const keepPile = document.getElementById('keep');
const discardPile = document.getElementById('discard');
const instr = document.getElementById('instructions');
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent   = document.getElementById('main-content');
const startBtn      = document.getElementById('start-btn');

// При клике «Далее» показываем тест и запускаем первую стадию
startBtn.addEventListener('click', () => {
  welcomeScreen.style.display = 'none';
  mainContent.style.display   = 'block';
  loadStage();
});


const resultScreen = document.getElementById('result-screen');
const discardArrow = document.getElementById('discardArrow');
const keepArrow = document.getElementById('keepArrow');

// Порог для распознавания свайпа
const threshold = 80;

// Обновление инструкции динамически
function updateInstructions() {
  const total = currentPool.length;
  const half = Math.ceil(total / 2);
  if (half > 5) {
    instr.innerHTML = `Оставьте не более <span class="highlight">${half}</span> карточек из ${total}.`;
  } else {
    instr.innerHTML = `Оставьте ровно <span class="highlight">5</span> карточек из ${total}.`;
  }
}

// Создание карточки
function makeCard(item) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h2>${item.name}</h2><p>${item.description}</p>`;

  let startX = 0;
  card.addEventListener('pointerdown', e => {
    card.setPointerCapture(e.pointerId);
    startX = e.clientX;
    card.classList.add('dragging');
  });
  card.addEventListener('pointermove', e => {
    if (!card.classList.contains('dragging')) return;
    const dx = e.clientX - startX;
    card.style.transform = `translateX(${dx}px) rotate(${dx/10}deg)`;
  });
  card.addEventListener('pointerup', e => {
    card.releasePointerCapture(e.pointerId);
    card.classList.remove('dragging');
    const dx = e.clientX - startX;
    if (dx < -threshold) swipe(card, 'discard');   // влево → отбросить
    else if (dx > threshold) swipe(card, 'keep');  // вправо → сохранить
    else card.style.transform = '';
  });
  return card;
}

// Анимация свайпа и дальнейшая логика
function swipe(card, action) {
  const animClass = action === 'keep' ? 'swipe-left' : 'swipe-right';
  card.classList.add(animClass);
  card.addEventListener('animationend', () => {
    card.remove();
    const targetPile = action === 'keep' ? keepPile : discardPile;
    targetPile.appendChild(card);
    // Обновляем счётчик
    const countEl = targetPile.querySelector('.count');
    countEl.textContent = `(${targetPile.querySelectorAll('.card').length})`;
    card.classList.remove(animClass);
    card.style.transform = '';
    if (cardContainer.children.length === 0) onDeckCleared();
  }, { once: true });
}

// После обработки всей текущей колоды
function onDeckCleared() {
  // Собираем выбранные карточки
  const kept = Array.from(keepPile.querySelectorAll('.card')).map(c => ({
    name: c.querySelector('h2').textContent,
    description: c.querySelector('p').textContent
  }));
  // Если ≤5 карточек — показываем итог, но гарантируем ровно 5
  if (kept.length <= 5) {
    // Если пользователь оставил меньше 5 — добираем из отброшенных
    let padded = [...kept];
    const discarded = Array.from(discardPile.querySelectorAll('.card')).map(c => ({
      name: c.querySelector('h2').textContent,
      description: c.querySelector('p').textContent
    }));
    for (let i = padded.length; i < 5 && i - padded.length < discarded.length; i++) {
      padded.push(discarded[i - padded.length]);
    }
    showResult(padded);
  } else {
    // Иначе готовим новую колоду и перезагружаем
    currentPool = kept;
    loadStage();
  }
}

// Загрузка этапа: отрисовка карточек и инита
function loadStage() {
  // Очистка
  cardContainer.innerHTML = '';
  keepPile.innerHTML = `<h2>Сохранить <span class=\"count\">(0)</span></h2>`;
  discardPile.innerHTML = `<h2>Отбросить <span class=\"count\">(0)</span></h2>`;

  // Обновляем инструкцию
  updateInstructions();

  // Рисуем стопку
  currentPool.forEach(item => cardContainer.appendChild(makeCard(item)));
}

// Показ результата
function showResult(finalValues) {
  document.querySelector('.pile-container').style.display = 'none';
  cardContainer.style.display = 'none';
  instr.style.display = 'none';
  resultScreen.style.display = 'block';
  const list = finalValues.map((v,i) =>
    `<div><strong>${i+1}. ${v.name}</strong><p>${v.description}</p></div>`
  ).join('');
  resultScreen.innerHTML = `<h2>Ваши топ-${finalValues.length} ценности</h2>${list}`;
}

// Кнопки-резерв (по клику симуляция)
discardArrow.addEventListener('click', () => {
  const top = cardContainer.lastElementChild; // теперь берём именно верхнюю карточку
  if (top) swipe(top, 'discard');
});
keepArrow.addEventListener('click', () => {
  const top = cardContainer.lastElementChild; // теперь берём именно верхнюю карточку
  if (top) swipe(top, 'keep');
});
