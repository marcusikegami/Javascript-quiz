const startButton = document.getElementById('start-button');
const quizBox = document.querySelector('quiz-wrapper');
const startScreen = document.querySelector('start-screen');

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.setAttribute('style', '"display", "none"');
};
