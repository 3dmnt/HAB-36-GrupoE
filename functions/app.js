"use strict";
import { addDark, removeDark } from "./darkmode.js";

// DECLARAMOS LAS VARIABLES Y CONSTANTES
let questions;
let currentQuestionIndex = 0;
let selectedQuestions = new Set();
let numberOfQuestion = document.querySelector(".question-number");
let scoreCount = 0;
const questionContainer = document.getElementById("question-container");
const scoreView = document.getElementById("user-score");
const felicitacionesImg = document.getElementById("felicitaciones-img");
// Esta función se encarga con un try de recoger los datos JSON y transformarlos a un objeto JS, mediante while gestionamos el volumen de preguntas seleccionados por el usuario, evitando que se repitan las preguntas.

async function loadQuestions() {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/bertez/2528edb2ab7857dae29c39d1fb669d31/raw/4891dde8eac038aa5719512adee4b4243a8063fd/quiz.json"
    );
    const allQuestions = await response.json();
    while (selectedQuestions.size < localStorage.getItem("questionAmount")) {
      const randomIndex = Math.floor(Math.random() * allQuestions.length);
      selectedQuestions.add(allQuestions[randomIndex]);
    }
    questions = Array.from(selectedQuestions);
    displayQuestions(currentQuestionIndex);
  } catch (error) {
    console.error("Error loading questions:", error);
  }
}
// Esta función gestiona la devolución de los datos en la UI generando los elementos HTML de forma dinámica con DOM

async function displayQuestions(index) {
  const currentQuestion = questions[index];
  questionContainer.innerHTML = "";
  scoreView.textContent = `Score of ${localStorage.getItem(
    "name"
  )}: ${scoreCount}`;

  const questionElement = document.createElement("p");
  questionElement.textContent = currentQuestion.question;
  questionContainer.appendChild(questionElement);
  numberOfQuestion.innerHTML = `<p>Question ${
    currentQuestionIndex + 1
  } out of ${questions.length}</p>`;

  const answersList = document.createElement("ul");
  currentQuestion.answers.forEach((answer) => {
    const answerItem = document.createElement("li");
    const answerButton = document.createElement("button");
    answerButton.textContent = answer;
    answerButton.classList.add("class-btn", "hvr-float-shadow");
    answerButton.addEventListener("click", () => {
      checkAnswer(answer, currentQuestion.correct);
    });
    answerItem.appendChild(answerButton);
    answersList.appendChild(answerItem);
  });
  questionContainer.appendChild(answersList);

  if (index === questions.length) {
    setTimeout(() => displayQuestions(currentQuestionIndex++), 1000);
  }
}

// Esta función verifica si la respuesta es correcta o incorrecta, y pasa directamente a la siguiente pregunta

function checkAnswer(answer, correctAnswer) {
  const buttons = questionContainer.querySelectorAll(".class-btn");
  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
      scoreCount++;
    } else if (button.textContent === answer) {
      button.classList.add("incorrect");
      scoreCount--;
    }
  });

  setTimeout(() => {
    if (currentQuestionIndex < questions.length - 1) {
      displayQuestions(++currentQuestionIndex);
    } else {
      felicitacionesImg.style.display = "block";
      questionContainer.style.display = "none";
    }
  }, 1000);
}

// El evento que gestiona el restart en el botón
const restartButton = document.getElementById("restart-btn");
restartButton.addEventListener("click", playAgain);

// La función encargada de resetear el quiz y las variables
function playAgain() {
  currentQuestionIndex = 0;
  scoreCount = 0;
  selectedQuestions.clear();
  felicitacionesImg.style.display = "none";
  questionContainer.style.display = "block";
  loadQuestions();
}
// Empieza el juego :D
loadQuestions();
