//Questions,

const quizData = [
  {
    question: "Who is not a Nigerian Artiste?",
    options: ["Davido", "Burnaboy", "Wizkid", "Drake"],
    answer: "Drake"
  },
  {
    question: "Who is the President of America?",
    options: ["Donald Trump", "Tulumbu", "Traore", "Davido"],
    answer: "Donald Trump"
  },
  {
    question: "What Club do Nigerian Agberos Support most?",
    options: ["PSG", "Chelsea", "Real Madrid", "Juventus"],
    answer: "Chelsea"
  },
  {
    question: "What Premier League club last won the Champions League?",
    options: ["Manchester City", "Chelsea", "Real Madrid", "Juventus"],
    answer: "Manchester City"
  },
  {
    question: "What is the name of Davido's last album?",
    options: ["Morayo", "5ive", "CLB", "Rainbow"],
    answer: "5ive"
  },
  {
    question: "What Club does not have a Champions League tropht?",
    options: ["PSG", "Chelsea", "Real Madrid", "Juventus"],
    answer: "PSG"
  },
  {
    question: "Smallest club in London?",
    options: ["Arsenal", "Chelsea", "Tottenham", "Fulham"],
    answer: "Arsenal"
  },
  {
    question: "Best University in Nigeria?",
    options: ["Covenant", "Babcock", "Unilag", "OAU"],
    answer: "Babcock"
  },
  {
    question: "What location is not on Lagos Island side",
    options: ["Lekki", "VI", "Ikoyi", "Magodo"],
    answer: "Magodo"
  },
  {
    question: "What is my Name?",
    options: ["Ife", "Tolani", "Timi", "Damini"],
    answer: "Ife"
  }
];

let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option";
    btn.onclick = () => selectAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  const options = document.querySelectorAll(".option");

  options.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("highlight");
    }
  });

  if (selected === correct) {
    score++;
  }
}

nextBtn.onclick = () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.textContent = `Quiz Completed! You scored ${score} out of ${quizData.length}.`;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
}

loadQuestion();
