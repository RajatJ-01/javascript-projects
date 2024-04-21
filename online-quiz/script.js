const questions =[
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the capital of India?",
        answers: [
            {text: "Delhi", correct: true},
            {text: "UP", correct: false},
            {text: "Bihar", correct: false},
            {text: "Panjab", correct: false},
        ]  
    },
    {
        question: "Who is our national Animal?",
        answers: [
            {text: "Cow", correct: false},
            {text: "Elephant", correct: false},
            {text: "Tiger", correct: true},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Who is our national Bird?",
        answers: [
            {text: "Owl", correct: false},
            {text: "bird", correct: false},
            {text: "Swan", correct: false},
            {text: "Peacock", correct: true},
        ]
    },
    {
        question: "What is the capital of Uttar Pradesh?",
        answers: [
            {text: "Agra", correct: false},
            {text: "Mathura", correct: false},
            {text: "Lucknow", correct: true},
            {text: "Noida", correct: false},
        ] 
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){

    nextButton.style.display='none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn =e.target;
    const isCorrect =selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`Your Score ${score} out of ${questions.length}!`;
    nextButton.innerHTML= "Play again";
    nextButton.style.display="block";
}
function hadnleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        hadnleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();