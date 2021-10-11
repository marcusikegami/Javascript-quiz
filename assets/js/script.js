const startButton = document.getElementById('start-button');
const quizBox = document.querySelector('quiz-wrapper');
const startScreen = document.getElementById('start-screen');
const questionDiv = document.getElementById('question-text');
const questionElement = document.getElementById('question');
const responseElement = document.getElementById('response-buttons');
const highScoresElement = document.getElementById('high-scores');
const leaderboardElement = document.getElementById('leaderboard');

let startingTime = 60;
const timeLeft = document.getElementById('time-left');

function timer() {
    setInterval(updateTimer, 1000);
    function updateTimer() {
        timeLeft.innerHTML = startingTime;

      startingTime --;
      if (startingTime <= 0) {
          startingTime = 0;
      }  
    }
    
}


let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startQuiz);
var quizQuestions = [
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

// startQuiz will begin by hiding the start-screen and iterating through the quiz questions array every time a question is answered
function startQuiz() {
   startScreen.style.display = 'none';
    questionDiv.style.display = 'flex';
    shuffledQuestions = quizQuestions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    nextQuestion()
    timer()


};
// my use of this function is based off Web Dev Simplified's open-source code for creating a quiz using Javascript from https://github.com/WebDevSimplified/JavaScript-Quiz-App
function nextQuestion() {
    const highScoresElement = document.getElementById('high-scores');
    if (currentQuestionIndex > quizQuestions.length -1) {
        questionElement.style.display = 'none';
        questionDiv.style.display = 'none';
        highScoresElement.style.display = 'block';
        leaderboardElement.style.display = 'block';

    }
    
    else {
    displayQuestion(shuffledQuestions[currentQuestionIndex])
    }
};

function displayQuestion(quizQuestions) {
    questionElement.innerText = quizQuestions.question
    quizQuestions.answers.forEach(answers => {
        const button = document.createElement('span')
        button.innerText = answers.text
        button.classList.add('response')

        if (answers.isTrue) {
            button.dataset.isTrue = answers.isTrue
        }
        button.addEventListener('click', selectAnswer) 
            responseElement.appendChild(button)
        
    });
    
};



function resetState() {
    
   while ( responseElement.firstChild) {
    responseElement.removeChild(responseElement.firstChild)
   };
   nextQuestion(currentQuestionIndex[currentQuestionIndex++])
};

function selectAnswer(event) {
    resetState()

}


