//Create variables to house data


const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');


startButton.addEventListener('click', startGame);




function startGame(){
    console.log('Started');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    setNextQuestion()

}

function showQuestion(question) {
    questionElement.innerText = question.question

}


function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])

}


function selectAnswer(){

}

const questions = [
   {
    question:"What can you use a can of Mountain Dew to dissolve?",
      
    answers:[
        {text: '4', correct: true},
        {text: '22', correct: false}
      ]
   }


]