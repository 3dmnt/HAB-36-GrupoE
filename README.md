# App web de un quiz con HTML, CSS y JavaScript</h1>
![Diseño de la app Quiz Movie](Proyecto_preguntas_y_respuesrtas_JSB36RT.jpg)

## Índice

  1. [Sobre el proyecto ✒️](#about)
  2. [Construido con 🛠️](#built-with)
  3. [Características 📋](#features)
  4. [UI 📱](#ui)
  5. [Contribuir 🚀](#contributing)
  6. [Licencia 📄](#license)
  7. [Desarrolladores ✏️](#contact)

## Sobre el proyecto ✒️ <a name="about"></a>
Este juego de preguntas y respuestas es un proyecto desarrollado durante el bootcamp de programación web de <a href="https://www.hackaboss.com/">Hack a Boss</a>. A partir del JSON con preguntas y respuestas proporcionado se crea la app incluyendo una serie de requisitos básicos a los que se añaden funcionalidades extra para mejorar la experiencia del jugador.

## Construido con 🛠️ <a name="built-with"></a>
Esta app ha sido desarrollada con: 

 ![Static Badge](https://img.shields.io/badge/html-black?style=for-the-badge&logo=HTML5&logoColor=blue)
 
 ![Static Badge](https://img.shields.io/badge/css-black?style=for-the-badge&logo=css3&logoColor=orange)
 
 ![Static Badge](https://img.shields.io/badge/js-black?style=for-the-badge&logo=javascript&logoColor=yellow)


## Características 📋 <a name="features"></a>
- La app incluye una primera página en la que el usuario introduce su nombre y el número de preguntas que desea contestar. El botón de 'Let's play' ejecuta el submit y los datos enviados se almacenan en el navegador del usuario mediante localStorage. Esos datos se gestionan mediante funciones. 
- Los datos del JSON se procesan y transforman en un objeto JS mediante la función asíncrona loadQuestions. Mediante un set se almacena el número de preguntas selecionadas y se le aplica el método Math.random para que se muestren de forma aleatoria y además no se repitan.
- Mediante la función displayQuestions se gestiona que en la pantalla se muestren las sucesivas preguntas junto a la lista de respuestas, cada una dentro de un botón. Para ello se emplean los métodos de DOM y gestión de eventos. 
- La función checkAnswer verifica si la respuesta es correcta o incorrecta y pasa directamente a la siguiente pregunta aplicando un setTimeout.
- Una vez respondidas las preguntas, se gestiona el reinicio del juego mediante un evento y la función playAgain resetea tanto el quiz como las variables.

## UI <a name="ui"></a>

- Diseño mobile first.
- Diseño responsive mediante media query. 
- Modo dark y light, con modificación de los colores de los elementos de la interfaz en cada uno de ellos.

## Contribuir 🚀 <a name="contributing"></a>
Este es un proyecto de código abierto y las contribuciones son bienvenidas.

## Licencia 📄 <a name="license"></a>


## Desarrolladores ✏️ <a name="contact"></a>
<a href="https://github.com/3dmnt"><img alt="Static Badge" src="https://img.shields.io/badge/Fran_J._Dorado-white?style=for-the-badge&logo=github&logoColor=black">
</a>

<a href="https://github.com/jmp89"><img alt="Static Badge" src="https://img.shields.io/badge/Juan_Mac%C3%ADas-white?style=for-the-badge&logo=github&logoColor=black">
</a>

<a href="https://github.com/GloriaPomarada"> <img alt="Static Badge" src="https://img.shields.io/badge/Gloria_Pomarada-white?style=for-the-badge&logo=github&logoColor=black&link=https%3A%2F%2Fgithub.com%2FGloriaPomarada"> </a>
