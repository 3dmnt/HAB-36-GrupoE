"use strict";
import { addDark, removeDark } from "./functions/darkmode.js";

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let questionAmount = document.getElementById(
      "amount-questions-desplegable"
    ).value;

    localStorage.setItem("questionAmount", questionAmount);

    window.location.href = "./pages/app.html";
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("userID").value;

    localStorage.setItem("name", name);

    window.location.href = "./pages/app.html";
  });

/*
Importamos las constantes generadas en darkmode.js para que se añadan las funciones a los botones para cambiar entre el tema oscuro y el default.

Primero accedemos a "loginForm", con el evento "submit", y le pasamos una función en la que guardamos el valor seleccionado de las opciones en la key "questionAmount" en localStorage.

  Repetimos el mismo proceso para capturar el nombre del usuario con la key name, y así poder recuperar ambos datos para utilizarlo en app.

*/
