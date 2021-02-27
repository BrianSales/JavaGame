const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
console.log(answerButtonsElement)
let counter = document.getElementById("clock")


startButton.addEventListener('click', startGame);

var timer = 30

function countdown() {
    setTimeout(function(){
        
        if (timer > 0){
            timer--
            console.log(counter)
            counter.innerHTML = timer
            countdown()
        }
    }, 1000



    )
}

function startGame(){
    console.log('Started');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
    countdown()
    
    
    

}









function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}


function setNextQuestion(){
    
    showQuestion(shuffledQuestions[currentQuestionIndex])

}





function selectAnswer(){

}

const questions = [
   {
    question:"What's 2+2?",
      
    answers:[
        {text: '4', correct: true},
        {text: '22', correct: false},
        {text: '11', correct: false},
        {text: '99', correct: false},
      ]
   },


]