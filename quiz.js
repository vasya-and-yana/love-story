const questions = [
  {
    question: "Любимый цвет?",
    answers: ["Фиолетовый", "Вердигри", "Вердепомовый", "Красный"],
    correct: 2,
  },
  
  {
    question: "Любимый напиток?",
    answers: ["Кофе", "Рево", "Пиво", "Мохито"],
    correct: 4,
  },
  {
    question: "Любимый музыкальный исполнитель/группа?",
    answers: ["Воровская лапа", "Бутер Бродский", "Слава КПСС", "Валентин Дядька"],
    correct: 2,
  },
  {
    question: "Любимый баскетболист?",
    answers: ["Криштиано Роналду", "Коби Браинт", "Никола Йокич", "Лука Дончич"],
    correct: 4,
  },
  {
    question: "Какой город я мечтаю посетить?",
    answers: ["Нью-Йорк", "Москва", "Пекин", "Берлин"],
    correct: 1,
  },
  {
    question: "Какие ценности я считаю наиболее важными в отношенияъ?",
    answers: ["Верность", "Доверие", "Страсть", "Искренность"],
    correct: 2,
  },
  {
    question: "Какие аспекты моего характера или личности я ценю больше всего?",
    answers: ["Юморной", "Смекалистый", "Романтичный", "Добрый"],
    correct: 2,
  },
  {
    question: "Какие темы или разговоры я обычно избегаю?",
    answers: ["Смерть", "Сдача вождения", "Секс", "Чувства"],
    correct: 2,
  },
{
    question: "Что я ценю в наших отношениях больше всего?",
    answers: ["Искренность", "Секс", "Ободраный нос", "Целые соски"],
    correct: 1,
  },
{
    question: "Если я внезапно превращусь в животное, какое животное я бы выбрал быть, и почему?",
    answers: ["Дикий кабан", "Лев", "Волк, АУФ", "Медведь"],
    correct: 4,
  },
{
    question: "Если бы мне пришлось стать супергероем, какую суперспособность я взял бы?",
    answers: ["Быть невидимым", "Упралять людьми", "Управлять кровью", "Читать мысли"],
    correct: 3,
  },
{
    question: "Если бы я был зомби, какой части моего тела ты бы защитила в первую очередь?",
    answers: ["Член", "Голова", "Сисюля", "Пупок"],
    correct: 1,
  },

  
{
    question: "О чем я мечтаю попробовать или испытать в сексе??",
    answers: ["На столе", "69", "В душе", "В общественном месте"],
    correct: 4,
  },
];

const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");
const nextButton = document.querySelector(".submit1");
const title1 = document.querySelector(".title1");

let score = 0;
let questionIndex = 0;


clearPage();
showQuestions();
submitBtn.onclick = checkAnswer;


function clearPage() {
  headerContainer.innerHTML = ``;
  listContainer.innerHTML = ``;
}


function showQuestions() {
  const headerTemplate = `<h2 class="title">%title%</h2>`;


  const title = headerTemplate.replace(
    "%title%",
    questions[questionIndex]["question"]
  );


  headerContainer.innerHTML = title;


  let answerNumber = 1;
  for (item of questions[questionIndex]["answers"]) {
    const questionTemplate = `<li>
    <label>
      <input value="%number%" type="radio" class="answer" name="answer" />
      <span>%answer%</span>
    </label>
  </li>`;


    let answerHTML = questionTemplate.replace("%answer%", item);


    answerHTML = answerHTML.replace("%number%", answerNumber);
    listContainer.innerHTML += answerHTML;
    submitBtn.blur();
    answerNumber++;
  }
}


function checkAnswer() {
  const checkRadio = listContainer.querySelector('input[type="radio"]:checked');


  if (!checkRadio) {
    submitBtn.blur();
    return;
  }


  const userAnswer = parseInt(checkRadio.value);


  if (userAnswer === questions[questionIndex]["correct"]) {
    score++;
  }


  if (questionIndex !== questions.length - 1) {
    questionIndex++;
    clearPage();
    showQuestions();
    return;
  } else {
    clearPage();
    showResults();
  }
}


function showResults() {
  const resultsTemplate = `
            <h2 class="title">%title%</h2>
            <pre class="summary">%message%</pre >
            <p class="result">%result%</p>
            `;


  let title, message;
  if (score === questions.length) {
    title = `ЕЕБООЙЙ 🔥`;
    message = `Все верно! Ты меня отлично знаешь или теперь знаешь))
    Подсказка 1:
    В чаще густой, там, где тишина властвует,
Тропинками тайными тянется дорога.
Зверь дикий, храбрый, гордый и могучий,
Скрывается в чаще, где тенью владеет мрак.
Спрятан он, словно тень, и силы свои кроет,
Кто он, где обитает, куда его путь ведет?
Подсказка 2:
В темноте не сбивайся, во тьме не тая,
Миг за мигом, свет зажигая.
В глубине ночной, он ярко светит,
Взгляды привлекая, сердца грея.
Что это за чудо, в тьме ведущее путь?
    `;
    title1.classList.add('hover');
    nextButton.classList.remove('hover');
    
  } else if ((score * 100) / questions.length >= 50) {
    title = `NOTBAD! 💪`;
    message = `Подсказка:
    В чаще густой, там, где тишина властвует,
Тропинками тайными тянется дорога.
Зверь дикий, храбрый, гордый и могучий,
Скрывается в чаще, где тенью владеет мрак.
Спрятан он, словно тень, и силы свои кроет,
Кто он, где обитает, куда его путь ведет?
    `;
  } else {
    title = `Еще работать и работать... 😞`;
    message = `Ты ответила правильно на очень мало вопросов, надо ще пробывать)) `;
  }


  let result = `${score} из ${questions.length}`;


  const finalMessage = resultsTemplate
    .replace("%title%", title)
    .replace("%message%", message)
    .replace("%result%", result);


  headerContainer.innerHTML = finalMessage;


  submitBtn.blur();
  submitBtn.innerHTML = `Грати знову`;
  submitBtn.onclick = function () {
    history.go();
  };
}


