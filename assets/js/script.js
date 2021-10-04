const startButton = document.getElementById('start-button');
const quizBox = document.querySelector('quiz-wrapper');
const startScreen = document.getElementById('start-screen');
const responseButton = document.querySelector('.response');





startButton.addEventListener('click', startQuiz);
responseButton.addEventListener('click', questionResponseStorage)

quizQuestions = [
    
];
// startQuiz will begin by hiding the start-screen and iterating through the quiz questions array every time a question is answered
function startQuiz() {
   startScreen.style.display = 'none';

};

function questionResponseStorage() {
    console.log('ello');
};
