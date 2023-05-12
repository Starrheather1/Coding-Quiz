// 5 coding quiz questions
// create a timer
// when times starts I am presented with a question
// if question is answered incorrectly, time is subtracted
// when all questions are answered or time reaches 0 game is over
// enter initials and score and save

var questions = [


    {
        title: 'How do you denote something is equal to another value? Type included',
        choices: ['=', '==', '===', '+'],
        answer: '===',

    },

    {
        title: 'Which HTML tag is used to link an external CSS file?',
        choices: ['<style>', '<script>', '<link>', '<css>'],
        answer: '<style>',

    },

    {
        title: 'Which of the following is the correct way to declare a variable in JavaScript?',
        choices: ['var x = 10', 'variable x = 10', 'let x = 10', 'int x = 10'],
        answer: 'var x =10',

    },

    {
        title: 'What does CSS stand for?',
        choices: ['Cascading Style Sheet', 'Computer Style Sheet', 'Creative Style Sheet', 'Colorful Style Sheet'],
        answer: 'Cascading Style Sheet',

    },

    {
        title: 'What does HTML stand for?',
        choices: ['HyperText Markup Language', 'High-level Text Management Language', 'Hyperlink and Text Manipulation Language, Hypertext Modernization Language'],
        answer: 'HyperText Markup Language',

    },


]

// global variables

var timerId;
// represents the questions array from questions.js
var time = questions.length * 15;
var currentQuestionsIndex = 0;



// global variables to ref DOM/ html stuff
var questionsEl = document.getElementById('questions')
var timerEl = document.getElementById('time')
var optionsEl = document.getElementById('choices')
var startButton = document.getElementById("start")
var submitButton = document.getElementById('submit')
var initialsEl = document.getElementById('initials')
var questionstitleEl = document.getElementById('questions-title')
var choice1El = document.getElementById('choice1')
var choice2El = document.getElementById('choice2')
var choice3El = document.getElementById('choice3')
var choice4El = document.getElementById('choice4')

function displayQuestions() {
    questionstitleEl.textContent = questions [0] .title
    choice1El.textContent = questions [0] .choices [0]
    choice2El.textcontent = questions [1] .choices [1]
    choice3El.textcontent = questions [2] .choices [2]
    choice4El.textcontent = questions [3] .choices [3]

}

function start() {
    countdown()
    displayQuestions()
}

function countdown() {
    var timeLeft = 15;

    var timerInterval = setInterval(function () {
        if (timeLeft > 1) {

            timerEl.textContent = timeLeft + ' seconds remaining';

            timeLeft--;
        } else if (timeLeft === 1) {

            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {

            timerEl.textContent = '';

            clearInterval(timerInterval);

            // displayMessage();
        }
    }, 1000);
}


// // function displayMessage() {
//     var wordCount = 0;


//     var msgInterval = setInterval(function () {

//         if (words[wordCount] === undefined) {

//             clearInterval(msgInterval);
//         } else {
//             mainEl.textContent = words[wordCount];
//             wordCount++;
//         }
//     }, 1000);
// }

startButton.addEventListener("click", start)

