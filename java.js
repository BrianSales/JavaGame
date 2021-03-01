// Array index used to make page functional

var storedScores = JSON.parse(localStorage.getItem("userData"));
var alert =document.getElementById("alert");
var quizQuestions = document.getElementById("evaluation");
var info = document.getElementById("info");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var countdown = document.getElementById("countdown");
var titleitem = document.getElementById("title-item");
var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var nextQuestions
var currentindex = 0;
var score = 0;
var count = 100;
var allScores = [];


// Function and event listner to start quiz
btnStart.addEventListener("click", starQuiz);
function starQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    countdown.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions= questions[currentindex]
    console.log(nextQuestions.title)
    
        displayQuestion(nextQuestions)

    gametime()
}
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    saveScore(name, score)  
    displayScorePage()
});


// Function used to envoke the timer on page

function gametime(){
// Setting the intreval function to run every second
// this intreval decreases the timer every second but
// when the timer reaches 0 I cleared the intreval to stop
// the count. I also run the end game function.
    var timeinterval = setInterval(function(){
        if (count <= 0) {
            endgame()
            clearInterval(timeinterval)
        } else{
            timer.innerText = count
         count--;
        }
        }, 1000);
        

}


//function used to record user score and gather input data for hgh score section
function saveScore(a, b) {

    var userData = {
        name: a,
        score: b
    };
    allScores.push(userData)

    //function used to sort high score section from biggest to smallest score
    allScores.sort(function(a,b){
        if(a.score>b.score){
            return -1;
        }else {
            return 1;
        }
        
    })

    //method used to store user data on local machine

    localStorage.setItem("userData", JSON.stringify(allScores));
    
}


// Function used to display question after game starts
function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    // questionanswers.innerHTML=""
    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}

// Function used to display next question
function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }

    }else{
        console.log("endgame")
        endgame()
        

    }
    
     
}
//Once the game ends user is prompted to press submit putting their intitals into a high score catalog
//then we display the score page
//we do this by looping through all of the scores
//then creating a p tag for all of them
function displayScorePage(){
    var section = document.getElementById('scores')
    document.getElementById('high-score').classList.remove('d-none') 
    for (var i=0; i<allScores.length;i++){
        var p = document.createElement('p')
        var name = allScores[i].name
        var score = allScores[i].score
    p.innerHTML= name+ " " + score
    section.appendChild(p)


    }
    document.getElementById("clearscore").addEventListener('click', function(){
        document.getElementById('scores').innerHTML=""
        allScores=[]
        localStorage.removeItem('userData')
     })
    
}

// Function used to determined user reponse and gives a penalty by deducting time from the counter
// Gives ten points
function correction(response){
    
    if(response){
        alert.innerText= "FANTASTIC"
        console.log("Good")
        score+=20
    }else {
        alert.innerText="WRONG"
        count = count -20
        timer.innerHTML = count
        console.log("Wrong")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}

// Function used to end game when user reach time limit or when question list runs out
 function endgame (){
    // btnStart.classList.add("d-none")
    myScore.innerText = score
    document.getElementById("addscore").classList.remove("d-none")
    countdown.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    // addscore.classList.remove("d-none")




 }

 // Questions Array

var questions = [
    {
        title: "Which of the following is a real measurement of weight?",
        choices: ["Eye-Ball","Crap-Ton","Onion", "Buttload"],
        answer : "Buttload"    
    },
    {
        title: "What country apologizes so much that a 2009 Act known as 'The Apology Act' declared that an apology is not an admission of guilt?",
        choices: ["Canada","USA","Mexico", "Iraq"],
        answer : "Canada"    
    },
    {
        title: "What tree can you grow at home and produces more than one kind of fruit at a time?",
        choices: ["Fruit Salad Tree","Whompimg Willow","The Giving Tree", "Groot"],
        answer : "Fruit Salad Tree"    
    },
    {
        title: "What popular condiment was used as a medicinal product when it was first inroduced in the 1830s? ",
        choices: ["Mustard","Ketchup","Pickles","Seasoning Salt"],
        answer : "Ketchup"    
    },
    {
        title: "What major US city was founded by a woman?",
        choices: ["Chicago","New York","Miami", "El Paso"],
        answer : "Miami"    
    },
    {
        title: "In which wing of the White House is the oval office located?",
        choices: ["East","North","West", "South"],
        answer : "West"    
    },
    {
        title: "The average human body contains how many pints of blood?",
        choices: ["420","9","360", "12"],
        answer : "9"    
    },
    {
        title: "Who played Black Panther in the 2016 film of the same name?",
        choices: ["Chadwick Boseman","Brian Sales","Denzel Washington", "Groot"],
        answer : "Chadwick Boseman"    
    },
    {
        title: "The 2021 film Judas and the Black Messiah is a movie about what Chicago Revolutionary?",
        choices: ["Fred Hampton","Jessie Jackson","Bedford Moss", "Alex Ortega"],
        answer : "Fred Hampton"    
    },
]

