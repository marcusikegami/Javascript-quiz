const startButton = document.getElementById('start-button');
const quizBox = document.querySelector('quiz-wrapper');
const startScreen = document.getElementById('start-screen');


document.querySelectorAll('.response').forEach(item => {
    item.addEventListener('click', event => {
        //handles click

        // this will deduct time from the timer if user answers incorrectly
        if (item.getAttribute('data-correct') === 'false') {
            console.log('false')

        } else {
            const INCORRECT = document.querySelector('.body')
            const incorrectElement = document.createElement('div')
            incorrectElement.setAttribute('class', 'incorrect')
            incorrectElement.textContent ='INCORRECT'
            INCORRECT.appendChild(incorrectElement)
        }
        
})


})


startButton.addEventListener('click', startQuiz);


quizQuestions = [
    
];
// startQuiz will begin by hiding the start-screen and iterating through the quiz questions array every time a question is answered
function startQuiz() {
   startScreen.style.display = 'none';

};
// this function needs to log the user's answer and determine if it is incorrect/correct, show the next question, and adjust the timer accordingly

// function questionResponseStorage() {
//     console.log(responseButton.getAttribute('id'))
    

