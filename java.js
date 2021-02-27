//Create variables to house data
var questionsArray = [
    q1 = {
      //question to be displayed and possible answers once start game function is clicked
      prompt:"What can you use a can of Mountain Dew to dissolve?",
      
      Answer:"A Mouse",
      incorrectAnswers: {
        choiceOne: "Gold",
        choiceTwo: "A Tire",
        choiceThree: "Credit Cards",
      },
      
      
    },
    q2 = {
      prompt:"Which of the following is a real measurement of weight",
      Answer:"Buttload",
      incorrectAnswers: {
        choiceOne: "Crap-Ton",
        choiceTwo: "Eight-Ball",
        choiceThree: "Onion",
      },
     
    },
    q3 = {
      prompt:"What country apologizes so much that a 2009 Act known as 'The Apology Act' declared that an apology is not an admission of guilt",
      Answer:"Canada",
      incorrectAnswers: {
        choiceOne: "USA",
        choiceTwo: "France",
        choiceThree: "Austrialia",
      },
      
    },
    q4 = {
      prompt:"What tree you can grow at home and produces more than one kind of fruit at a time?",
      Answer:"Fruit Salad Tree",
      incorrectAnswers: {
        choiceOne: "The Giving Tree",
        choiceTwo: "Old Man Willow Tree",
        choiceThree: "Groot",
      },
      
    },
    q5 = {
        prompt:"What popular condiment was used as a medicinal product when it was first inroduced in the 1830s?",
      Answer:"Ketchup",
      incorrectAnswers: {
        choiceOne: "A1 Steak Sauce",
        choiceTwo: "Mustard",
        choiceThree: "McDonald's Szechuan Sauce",
      },
     
    },
    q6 = {
        prompt:"What major US city was founded by a woamn?",
      Answer:"Miami",
      incorrectAnswers: {
        choiceOne: "Chicago",
        choiceTwo: "Metropolis",
        choiceThree: "New York",
      },
      
    },
    q7 = {
        prompt:"In which wing of the White House is the oval office located?",
      Answer:"West Wing",
      incorrectAnswers: {
        choiceOne: "East Wing",
        choiceTwo: "Southeast Wing",
        choiceThree: "Northwest Wing",
      },
      
    },
    q8 = {
        prompt:"The average human body contains how many pints of blood?",
      Answer:"9",
      incorrectAnswers: {
        choiceOne: "420",
        choiceTwo: "5",
        choiceThree: "360",
      },
      
    },
    q9 = {
        prompt:"Who played Black Panther in the 2016 film of the same name?",
      Answer:"Chadwick Boseman",
      incorrectAnswers: {
        choiceOne: "Denzel Washington",
        choiceTwo: "Brian Sales",
        choiceThree: "",
      },
      
    },
    q10 = {
        prompt:"The 2021 film Judas and the Black Messiah is a movie about what Chicago Revolutionary?",
      Answer:"Fred Hampton",
      incorrectAnswers: {
        choiceOne: "Jessie Jackson",
        choiceTwo: "Bedford Moss",
        choiceThree: "Alex Ortega",
      },
      
    }











]




const startButton = document.getElementById('start-btn')



startButton.addEventListener('click', startGame)




function startGame(){
    console.log('Started')
    startButton.classList.add('hide')

}


function setNextQuestion(){

}


function selectAnswer(){

}