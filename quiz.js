const quizData = [
  {
    question:
      "What is a recommended safety measure to protect against cybercrime?",
    choices: [
      "Share your passwords with trusted friend",
      "Avoid updating antivirus software",
      "Use strong, unique passwords for online accounts",
      "Click on suspicious links",
    ],
    correct: 2,
  },
  {
    question:
    "What is a safety measure to prevent kidnapping?",
    choices: [
        " Stay unaware of your surroundings",
        " Avoid sharing your whereabouts with anyone",
        " Educate children on personal safety",
        "Never have an emergency plan"
    ],
    correct: 2,
  },
  {
    question: "How can you help combat modern slavery?",
    choices: [
      "Ignore suspicious activities",
      "Support organizations working against modern slavery",
      "Encourage exploitation in your community",
      " Advocate for weaker anti-slavery laws"
    ],
    correct: 1,
  },
  {
    question: "To prevent fraud, what should you be cautious of?",
    choices: [
      " Unsolicited communication",
      "Verifying the identity of individuals or organizations",
      " Monitoring your financial statements and credit reports",
      "Using insecure payment methods",
   
    ],
    correct: 0,
  },
  {
    question: "What is a safety measure to prevent robbery?",
    choices: [
        " Be unaware of your surroundings",
        "Display valuable items in public",
        "Walk in poorly lit areas",
        "Comply with the robber's demands if confronted",
    ],
    correct: 3,
  },
  {
    question: "How can you prevent bribery?",
    choices: [
        "Engage in bribery willingly",
        "Refuse to engage in bribery and report attempts",
        "Maintain secrecy in financial transactions",
        "Discourage ethical business practices",
    ],
    correct: 1,
  },
  {
    question: " What is a safety measure to prevent murder?",
    choices: [
      "Seek out situations that may escalate to violence",
      "Support community violence prevention programs",
      "Avoid personal safety awareness",
      "Encourage violent conflict resolution",
    ],
    correct:1,
  },
  {
    question:
      "What should you do to protect wildlife from illegal trade?",
    choices: [
        "Buy products made from endangered species",
        "Ignore illegal wildlife trade activities",
        "Support conservation efforts and anti-wildlife trafficking organizations",
        "Advocate for looser wildlife protection laws"
    ],
    correct: 2,
  },
  {
    question: "How can you contribute to preventing arms trafficking?",
    choices: [
      "Support international efforts to combat arms trafficking",
      "Encourage irresponsible arms ownership",
      "Advocate for less stringent arms control regulations",
      "Promote conflicts and violence",
    ],
    correct: 0,
  },
  {
    question: "What is a recommended safety measure to prevent burglary?",
    choices: [
      "Keep doors and windows unlocked",
      "Avoid installing security systems and cameras",
      "Display your valuables prominently",
      "Secure doors and windows with quality locks"
   
    ],
    correct: 3,
  },
];

let currentQuestion = 0;
let score = 0;

const questionElem = document.getElementById("question");
const choicesElem = document.getElementById("choices");
const scoreElem = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElem.innerText = currentQuizData.question;
  choicesElem.innerHTML = "";

  currentQuizData.choices.forEach((choice, index) => {
    const choiceElem = document.createElement("button");
    choiceElem.innerText = choice;
    choiceElem.classList.add("btn");
    choiceElem.addEventListener("click", () => checkAnswer(index));
    choicesElem.appendChild(choiceElem);
  });

  nextBtn.disabled = true;
}

function checkAnswer(selectedIndex) {
  const currentQuizData = quizData[currentQuestion];
  if (selectedIndex === currentQuizData.correct) {
    score++;
    let mySound = new Audio("mixkit-correct-answer-tone-2870.wav");
    mySound.play();
    showCustomAlert("yes"); // Show the "YAYYYY!!!! CORRECT" pop-up
  } else {
    showCustomAlert("no"); // Show the "TRY AGAIN!!!" pop-up
  }

  currentQuestion++;
  scoreElem.innerText = `Score: ${score}`;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionElem.innerText = "Quiz completed!";
    choicesElem.innerHTML = "";
    nextBtn.disabled = true;
  }
}

function nextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    questionElem.innerText = "Quiz completed!";
    choicesElem.innerHTML = "";
    nextBtn.disabled = true;
  }
}

function showCustomAlert(result) {
  if (result === "yes") {
    document.getElementById("custom-alert-yes").style.display = "block";
    setTimeout(() => {
      closeCustomAlert("yes");
    }, 2000);
  } else if (result === "no") {
    document.getElementById("custom-alert-no").style.display = "block";
    setTimeout(() => {
      closeCustomAlert("no");
    }, 2000);
  }
}

function closeCustomAlert(result) {
  if (result === "yes") {
    document.getElementById("custom-alert-yes").style.display = "none";
  } else if (result === "no") {
    document.getElementById("custom-alert-no").style.display = "none";
  }
}

loadQuestion();
