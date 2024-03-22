# Cómo crear un quiz con HTML, CSS y JavaScript</h1>
![descripción de la imagen](URL de la imagen)
<img src="xxx">
## Índice

  1. [Sobre el proyecto ✒️](#about)
  2. [Construido con 🛠️](#built-with)
  3. [Características 📋](#features)
  4. [UI 📱](#ui)
  5. [Contribuir 🚀](#contributing)
  6. [Licencia 📄](#license)
  7. [Desarrolladores ✏️](#contact)

## Sobre el proyecto ✒️ <a name="about"></a>
Este juego de preguntas y respuestas es un proyecto desarrollado durante el bootcamp de programación web de <a href="https://www.hackaboss.com/">Hack a Boss</a>. A partir del JSON proporcionado con preguntas y respuestas se crea la app con una serie de requisitos básicos a los que se añaden funcionalidades extra para mejorar la experiencia del jugador.

## Construido con 🛠️ <a name="built-with"></a>
Esta app ha sido desarrollada con: 
<a href="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></a>
- HTML
- CSS
- JavaScript

## Características 📋 <a name="features"></a>
- La app incluye una primera página (index.html) en la que el usuario introduce su nombre y el número de preguntas que desea contestar. El botón de 'Let's play' ejecuta el submit y los datos enviados se almacenan en el navegador del usuario mediante localStorage. Esos datos se gestionan mediante funciones en index.js 
- Los datos del JSON se procesan y transforman en un objeto JS mediante la función asíncrona loadQuestions. Mediante un set se almacenan el número de preguntas selecionadas y se le aplica el método Math.random para que se muestren de forma aleatoria y además no se repitan.
- Mediante la función displayQuestions se gestiona que en la pantalla se muestren las sucesivas preguntas junto a la lista de respuestas con un botón para seleccionar una. Para ello se emplean los métodos de DOM y gestión de eventos. 
- La función chckAnswer verifica si la respuesta es correcta o incorrecta, y pasa directamente a la siguiente pregunta aplicando un setTimeout.
- Una vez respondidas las preguntas, un se gestiona el reinicio del juego mediante un evento y la función playAgain resetea el quiz y las variables.

## UI <a name="ui"></a>

## Contribuir 🚀 <a name="contributing"></a>
Este es un proyecto de código abierto y las contribuciones son bienvenidas.

## Licencia 📄 <a name="license"></a>


## Desarrolladores ✏️ <a name="contact"></a>
- <a href="https://github.com/3dmnt">Fran J Dorado</a>
- <a href="https://github.com/jmp89">Juan Macías</a>
- <a href="https://github.com/GloriaPomarada">Gloria Pomarada</a>
