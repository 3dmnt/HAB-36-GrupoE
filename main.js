"use strict";
/*  RECURSOS
API: https://gist.github.com/bertez/2528edb2ab7857dae29c39d1fb669d31
- Lista de preguntas
- document.createElement
- Element.innerHTML
 https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
*/

/*Si clicamos en el botón del sol, borrarémos la clase css dark-mode del div 
con id page y se aplicará el estilo active al sol*/
document.getElementById("id-sun").onclick = function () {
  document.getElementById("page").classList.remove("dark-mode");
  document.getElementById("id-moon").classList.remove("active");
  this.classList.add("active");
};
/*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
  con id page y se aplicará el estilo active a la luna*/
document.getElementById("id-moon").onclick = function () {
  document.getElementById("page").classList.add("dark-mode");
  document.getElementById("id-sun").classList.remove("active");
  this.classList.add("active");
};
