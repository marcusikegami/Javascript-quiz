const startButton = document.getElementById('start-button');
const quizBox = document.querySelector('quiz-wrapper');
const startScreen = document.getElementById('start-screen');
let questionDiv = $('.question-text');
// const INCORRECT =

// const currentQuestion
quizQuestions = [
    {
        question: "What is the correct way to write a comment in Javascript?",
        answers: [
            {text: '!-- Comment --!', isTrue: false},
            {text: '// Comment', isTrue: true},
            {text: '` Comment', isTrue: false}
        ]
      }, {
      question: "How can you link a javascript file to an HTML document?",
      answers: [
          {text: '<link rel="script" href="./script.js">', isTrue: false},
          {text: '<script href="./script.js"></script>', isTrue: false},
          {text: '<script src="./script.js"</script>', isTrue: true} 
        ]
      }, {
      question: "What is the correct way to change the text inside and HTML element using Javascript?",
      answers: [
          {text: 'document.getElementById("demo").innerHTML("Hello World!")', isTrue: false}, 
          {text: '#demo.innerHTML = "Hello World!"', isTrue: false},
          {text: 'document.getElementById("demo").innerHTML = "Hello World!"', isTrue: true}
        ]
      }, {
        question: 'How can you declare "demo" as a Javascript variable?',
        answers: [
              {text: 'var demo;', isTrue: true},
              {text: 'variable demo;', isTrue: false},
              {text: 'v demo;', isTrue: false}
        ]
      }
      
  ];

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


});


function nextQuestion() {
    for (i = 0; i < questions.length; i++) {
        var question = $('<h1>')
        .addClass('response')
        .text(questions.question[i]);

        questionDiv.appendChild(question);
    }
}

startButton.addEventListener('click', startQuiz);



// startQuiz will begin by hiding the start-screen and iterating through the quiz questions array every time a question is answered
function startQuiz() {
   startScreen.style.display = 'none';
    questionDiv.removeClass('d-none');


};
// this function needs to log the user's answer and determine if it is incorrect/correct, show the next question, and adjust the timer accordingly

// function questionResponseStorage() {
//     console.log(responseButton.getAttribute('id'))
    

