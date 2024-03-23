export const removeDark = document
  .getElementById("id-sun")
  .addEventListener("click", function () {
    document.getElementById("page").classList.remove("dark-mode");
    document.getElementById("id-moon").classList.remove("active");
    this.classList.add("active");
  });
/*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
      con id page y se aplicará el estilo active a la luna*/
export const addDark = document
  .getElementById("id-moon")
  .addEventListener("click", function () {
    document.getElementById("page").classList.add("dark-mode");
    document.getElementById("id-sun").classList.remove("active");
    this.classList.add("active");
  });

/*
  Exportamos las funciones donde seleccionamos los botones por su ID, con el evento click para que añada o borre las clases active o modo oscuro.
  */
