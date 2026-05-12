/**
 * Проект «Пряники» — интерактивная подача сюжета.
 * Фоны: атмосферные фото (Unsplash), затемнённые через CSS.
 */

const TELEGRAM_CHANNEL_URL = "https://t.me/+0lwQ8GBizQs3NTUy";

/**
 * Фоны: локальные файлы в assets/bg (история) и ссылки Unsplash (остальное — пока).
 */
const ATMOSPHERE = {
  /** s1: закрытый архив, гриф секретности */
  mkUltraEra: "assets/bg/slide-01-mk-ultra.png",
  /** s2: секретная «пищевая» лаборатория */
  secretFoodLab:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80",
  /** s3: пряности, состав рациона — без «сладкой» рекламы */
  darkSpicesAlchemy:
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1920&q=80",
  /** s4: срыв, ярость, военная хроника */
  rageAndSmoke:
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1920&q=80",
  /** s5: закрытый объект, архив, охрана */
  abandonedBunkerNight:
    "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1920&q=80",
  /** s6: след прикрыт, бумаги и наследие MK-ULTRA */
  burningSecrets:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
  /** s7: лайнер, биозагроза, небо перед катастрофой */
  planeStormOmen:
    "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1920&q=80",
  /** s8: транзит, горы, туман — путь через Кавказ */
  mountainInfiltration:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
  /** s9: парадный вход, ночной город — линия ФСБ */
  officialCityNight:
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80",
  /** выбор стороны: развилка, туман */
  factionCrossroads:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80",
  /** наведение: сводная группа — тактика, ночной спецназ (USSOCOM) */
  usFactionHover:
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1920&q=80",
  /** наведение: линия ФСБ — оперативники, закрытая зона */
  fsbFactionHover:
    "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1920&q=80",
  /** США вопрос 1: гражданство, документы */
  usCitizenship:
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1920&q=80",
  /** США вопрос 2: армия, личный комплект */
  usArmyField:
    "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1920&q=80",
  /** ФСБ вопрос 1: статус, закрытый коридор власти */
  fsbCorridor:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
  /** ФСБ вопрос 2: парадный коридор власти */
  fsbVaultDoor:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1920&q=80",
  /** отказ от операции */
  missionDenied:
    "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1920&q=80",
  /** финал: лаборатория/клиника за дверью */
  labAwaiting:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80",
};

const SLIDES = [
  {
    id: "s1",
    bg: ATMOSPHERE.mkUltraEra,
    title: "Гриф: CONFIDENTIAL",
    html: `<p>В разгар 1950-х, когда мир с тревогой следил за противостоянием сверхдержав, ЦРУ запустило проект MK-ULTRA — официально программу по изучению контроля над разумом с помощью LSD и психологического воздействия.</p><p><strong>Но за этой шумной завесой скрывалась настоящая операция.</strong></p>`,
  },
  {
    id: "s2",
    bg: ATMOSPHERE.secretFoodLab,
    title: "Истинное кодовое имя",
    html: `<p>Её истинное название — <strong>Проект «Пряники»</strong>.</p><p>В секретных лабораториях, замаскированных под обычные пищевые исследовательские центры, американские и союзные учёные работали над созданием особого вида стимулирующей пищи.</p>`,
  },
  {
    id: "s3",
    bg: ATMOSPHERE.darkSpicesAlchemy,
    title: "Полевой рацион",
    html: `<p>Специальные пряники — плотные, пряные, с тщательно выверенным составом экстрактов, витаминов и неизвестных до того соединений — были призваны превращать обычного солдата в сверхчеловека.</p><p>Одна порция давала прилив нечеловеческой выносливости, подавляла страх, ускоряла регенерацию и повышала физическую силу.</p>`,
  },
  {
    id: "s4",
    bg: ATMOSPHERE.rageAndSmoke,
    title: "Потеря контроля",
    html: `<p>Испытания проводились в строжайшей тайне. Солдаты, отведавшие «полевой рацион Пряник-7», демонстрировали результаты, которые не могли объяснить даже сами разработчики.</p><p>Однако проект начал выходить из-под контроля: апатия, неконтролируемая ярость. Один сержант, отведавший «Пряник-7» перед учениями, якобы голыми руками разорвал пулемётное гнездо… а потом не смог вспомнить своего имени.</p>`,
  },
  {
    id: "s5",
    bg: ATMOSPHERE.abandonedBunkerNight,
    title: "1964. Закрытие",
    html: `<p>В <strong>1964 году</strong>, после нескольких смертей и одного случая «необъяснимого каннибализма» в последнем закрытом лагере Санкт-Петербурга, проект официально свернули. Все образцы и документацию уничтожили — как казалось.</p><p>И иногда, в холодные ночи, те, кто охраняет объект, чувствуют слабый запах мёда и корицы и слышат что-то из лаборатории… что-то, что уже мало похоже на человека.</p>`,
  },
  {
    id: "s6",
    bg: ATMOSPHERE.burningSecrets,
    title: "Под грифом MK-ULTRA",
    html: `<p>Официально проект «Пряники» никогда не существовал. Все документы были уничтожены или надёжно похоронены под грифом «MK-ULTRA».</p><p><em>Но те, кто пробовал их… до сих пор помнят вкус.</em></p>`,
  },
  {
    id: "s7",
    bg: ATMOSPHERE.planeStormOmen,
    title: "2026. Новый след",
    html: `<p>В <strong>2026 году</strong> из-за нарастающей мировой напряжённости USSOCOM получает задачу о проникновении в сверхсекретный объект Санкт-Петербурга — лабораторию, где когда-то проводили исследования по проекту «Пряники».</p><p>Последней каплей США стал лайнер с якобы «хантавирусом». Но в ходе анализа погибших было выявлено влияние <strong>Пряник-0.3</strong>. США считают, что РФ тайно возобновили проект.</p>`,
  },
  {
    id: "s8",
    bg: ATMOSPHERE.mountainInfiltration,
    title: "Вне гражданства",
    html: `<p>Оперативники сводной группы транзитом через Грузию проникли на территорию Российской Федерации. Через неделю группа уже была на конспиративной квартире.</p><p>Они не члены какого-либо государства: их уже уволили из рядов американской армии. У них два пути — <strong>либо смерть, либо выполнение задачи</strong>.</p>`,
  },
  {
    id: "s9",
    bg: ATMOSPHERE.officialCityNight,
    title: "Параллель ФСБ",
    html: `<p>Группе пришлось экстренно выдвинуться на объект из-за работы Федеральной службы безопасности.</p><p><strong>ФСБ</strong> отправляется в ту же лабораторию через парадный вход — с той же целью, что и бывшие американские оперативники.</p>`,
  },
];

const QUESTIONS = {
  us: [
    {
      q: "Готовы ли вы отказаться от гражданства США?",
      yesNext: "us2",
      failMessage:
        "Вы не готовы к операции. Без полного разрыва с государством прикрытие не держится ни секунды.",
    },
    {
      id: "us2",
      q: "Готовы ли вы уволиться из рядов армии США?",
      yesNext: "finale",
      failMessage:
        "Вы не готовы к операции. Форма и присяга остаются на пути к цели — значит, вы ещё не внутри.",
    },
  ],
  fsb: [
    {
      q: "Готовы ли вы действовать без официального статуса сотрудника и полной государственной защиты?",
      yesNext: "fsb2",
      failMessage:
        "Вы не готовы к операции. На этом уровне «форма» перестаёт быть щитом и становится меткой.",
    },
    {
      id: "fsb2",
      q: "Готовы ли формально порвать с ФСБ и продолжить задачу как автономный исполнитель?",
      yesNext: "finale",
      failMessage:
        "Вы не готовы к операции. Пока служба важнее результата — вы остаётесь в парадном коридоре.",
    },
  ],
};

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html != null) e.innerHTML = html;
  return e;
}

function setBackground(url, strongVignette) {
  const bg = document.getElementById("bg");
  bg.style.backgroundImage = `url("${url}")`;
  bg.classList.toggle("vignette-strong", !!strongVignette);
}

function setProgress(index, total) {
  const bar = document.getElementById("progress");
  const p = total > 0 ? (index + 1) / total : 0;
  bar.style.transform = `scaleX(${p})`;
}

function renderStorySlide(index) {
  const slide = SLIDES[index];
  const panel = document.getElementById("panel");
  panel.innerHTML = "";
  panel.className = "panel fade-enter";

  const title = el("h1", null, slide.title);
  const story = el("div", "story", slide.html);

  const actions = el("div", "actions");
  const nextBtn = el("button", null, "Далее");
  nextBtn.type = "button";
  nextBtn.addEventListener("click", () => {
    if (index < SLIDES.length - 1) {
      state.slideIndex = index + 1;
      render();
    } else {
      state.phase = "faction";
      render();
    }
  });

  actions.appendChild(nextBtn);
  if (index > 0) {
    const back = el("button", "secondary", "Назад");
    back.type = "button";
    back.addEventListener("click", () => {
      state.slideIndex = index - 1;
      render();
    });
    actions.appendChild(back);
  }

  panel.appendChild(title);
  panel.appendChild(story);
  panel.appendChild(actions);

  setBackground(slide.bg, true);
  setProgress(index, SLIDES.length);
}

function renderFaction() {
  const panel = document.getElementById("panel");
  panel.innerHTML = "";
  panel.className = "panel wide fade-enter";

  const title = el("h1", null, "Выберите сторону");
  const story = el(
    "div",
    "story",
    "<p>Вы входите в историю как один из тех, кто идёт к лаборатории. Чья дорога ближе — решение за вами.</p>"
  );

  const grid = el("div", "choice-grid two");
  const usCard = el("button", "choice-card", "");
  usCard.type = "button";
  usCard.innerHTML =
    "<strong>Сводная группа (бывшие США)</strong><span>Транзит через Грузию, конспирация, задача USSOCOM.</span>";
  usCard.addEventListener("click", () => {
    state.phase = "questions";
    state.faction = "us";
    state.questionIndex = 0;
    render();
  });

  const fsbCard = el("button", "choice-card", "");
  fsbCard.type = "button";
  fsbCard.innerHTML =
    "<strong>Линия ФСБ</strong><span>Парадный вход, те же стены лаборатории — другой коридор.</span>";
  fsbCard.addEventListener("click", () => {
    state.phase = "questions";
    state.faction = "fsb";
    state.questionIndex = 0;
    render();
  });

  grid.appendChild(usCard);
  grid.appendChild(fsbCard);

  const resetFactionBg = () =>
    setBackground(ATMOSPHERE.factionCrossroads, true);
  usCard.addEventListener("mouseenter", () =>
    setBackground(ATMOSPHERE.usFactionHover, true)
  );
  fsbCard.addEventListener("mouseenter", () =>
    setBackground(ATMOSPHERE.fsbFactionHover, true)
  );
  grid.addEventListener("mouseleave", resetFactionBg);

  grid.addEventListener("focusin", (e) => {
    if (e.target === usCard) setBackground(ATMOSPHERE.usFactionHover, true);
    if (e.target === fsbCard) setBackground(ATMOSPHERE.fsbFactionHover, true);
  });
  grid.addEventListener("focusout", () => {
    requestAnimationFrame(() => {
      if (!grid.contains(document.activeElement)) resetFactionBg();
    });
  });

  const actions = el("div", "actions");
  const back = el("button", "secondary", "К началу истории");
  back.type = "button";
  back.addEventListener("click", () => {
    state.phase = "story";
    state.slideIndex = 0;
    render();
  });
  actions.appendChild(back);

  panel.appendChild(title);
  panel.appendChild(story);
  panel.appendChild(grid);
  panel.appendChild(actions);

  setBackground(ATMOSPHERE.factionCrossroads, true);
  setProgress(SLIDES.length, SLIDES.length);
}

function renderQuestion() {
  const list = QUESTIONS[state.faction];
  const idx = state.questionIndex;
  const item = list[idx];
  const panel = document.getElementById("panel");
  panel.innerHTML = "";
  panel.className = "panel fade-enter";

  const title = el("h1", null, "Допуск к операции");
  const story = el("div", "story", `<p>${item.q}</p>`);

  const actions = el("div", "actions");
  const yes = el("button", null, "Да");
  yes.type = "button";
  yes.addEventListener("click", () => {
    state.questionIndex += 1;
    const nextId = item.yesNext;
    if (nextId === "finale") {
      state.phase = "finale";
    } else if (state.questionIndex < list.length) {
      state.phase = "questions";
    }
    render();
  });

  const no = el("button", "danger-outline", "Нет");
  no.type = "button";
  no.addEventListener("click", () => {
    state.phase = "fail";
    state.failText = item.failMessage;
    render();
  });

  actions.appendChild(yes);
  actions.appendChild(no);

  panel.appendChild(title);
  panel.appendChild(story);
  panel.appendChild(actions);

  const bgKey =
    state.faction === "us"
      ? idx === 0
        ? ATMOSPHERE.usCitizenship
        : ATMOSPHERE.usArmyField
      : idx === 0
        ? ATMOSPHERE.fsbCorridor
        : ATMOSPHERE.fsbVaultDoor;
  setBackground(bgKey, true);
  setProgress(SLIDES.length + idx, SLIDES.length + list.length);
}

function renderFail() {
  const panel = document.getElementById("panel");
  panel.innerHTML = "";
  panel.className = "panel fail fade-enter";

  const title = el("h1", null, "Отказ");
  const story = el(
    "div",
    "story",
    `<p><strong>Вы не готовы к операции.</strong></p><p>${state.failText}</p>`
  );

  const actions = el("div", "actions");
  const retry = el("button", null, "Выбрать сторону снова");
  retry.type = "button";
  retry.addEventListener("click", () => {
    state.phase = "faction";
    state.questionIndex = 0;
    state.faction = null;
    render();
  });
  const home = el("button", "secondary", "С начала истории");
  home.type = "button";
  home.addEventListener("click", () => {
    state.phase = "story";
    state.slideIndex = 0;
    state.questionIndex = 0;
    state.faction = null;
    render();
  });

  actions.appendChild(retry);
  actions.appendChild(home);

  panel.appendChild(title);
  panel.appendChild(story);
  panel.appendChild(actions);

  setBackground(ATMOSPHERE.missionDenied, true);
  document.getElementById("progress").style.transform = "scaleX(1)";
}

function renderFinale() {
  const p = document.getElementById("panel");
  p.innerHTML = "";
  p.className = "panel fade-enter";

  const title = el("h1", null, "Лаборатория ждёт");
  const story = el(
    "div",
    "story",
    `<p>Допуск подтверждён. Дальнейшие координаты и время будут переданы по закрытому каналу.</p><p>Две группы сходятся к одним и тем же стенам: запах мёда и корицы ещё не раздует тревогу — но то, что спит за дверью, уже помнит <strong>вкус Пряников</strong>.</p>`
  );

  const actions = el("div", "actions");
  const channel = document.createElement("a");
  channel.className = "channel-link";
  channel.href = TELEGRAM_CHANNEL_URL;
  channel.target = "_blank";
  channel.rel = "noopener noreferrer";
  channel.textContent = "Переключиться на закрытый канал";
  actions.appendChild(channel);

  p.appendChild(title);
  p.appendChild(story);
  p.appendChild(actions);

  setBackground(ATMOSPHERE.labAwaiting, true);
  document.getElementById("progress").style.transform = "scaleX(1)";
}

const state = {
  phase: "story",
  slideIndex: 0,
  faction: null,
  questionIndex: 0,
  failText: "",
};

function render() {
  switch (state.phase) {
    case "story":
      renderStorySlide(state.slideIndex);
      break;
    case "faction":
      renderFaction();
      break;
    case "questions":
      renderQuestion();
      break;
    case "fail":
      renderFail();
      break;
    case "finale":
      renderFinale();
      break;
    default:
      renderStorySlide(0);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render();

  document.addEventListener("keydown", (e) => {
    if (state.phase !== "story") return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const btn = document.querySelector("#panel .actions button:not(.secondary)");
      if (btn) btn.click();
    }
  });
});
