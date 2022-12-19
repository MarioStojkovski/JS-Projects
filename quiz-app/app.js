const quizData = [
  {
    question: "When was the company Rolex created?",
    a: "1905",
    b: "1875",
    c: "1892",
    d: "1800",
    correct: "b",
  },
  {
    question: "What is the most popular Rolex watch model?",
    a: "Datejust 41",
    b: "GMT-Master",
    c: "Sky-Dweller",
    d: "Submariner",
    correct: "d",
  },
  {
    question: "When was the Rolex Datejust first introduced?",
    a: "1900",
    b: "1890",
    c: "1945",
    d: "1999",
    correct: "b",
  },
  {
    question: "Where was rolex founded?",
    a: "London",
    b: "Geneva",
    c: "Paris",
    d: "Frankfurt",
    correct: "a",
  },
  {
    question: "What is the most complex Rolex model?",
    a: "Datejust 41",
    b: "Submariner",
    c: "Sky-Dweller",
    d: "GMT-Master",
    correct: "c",
  },
];
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionE1.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    //TODO: Show  results
    alert("You finished!");
  }
});
