const quizDB = [{

    question : "Q1:what is the full form in HTML?",
    a : "Hello To My Land",
    b : "Hey Text Markup Languages",
    c : "HyperText Makeup Languages",
    d : "HyperText Markup Languages",
    ans : "ans4"
},

    {
        question : "Q2:what is the full form in CSS?",
        a : "Cascading Style Sheets",
        b : "Cascading Style Sheep",
        c : "carton Style Sheets",
        d : "HyperText Markup Languages",
        ans : "ans1"
    },
    {
        question : "Q3:what is the full form in HTTP?",
        a : "HyperText Transfer Product",
        b : "HyperText Test Protocol",
        c : "Hey transfer product",
        d : "HyperText Transfer Protocol",
        ans : "ans4"
    },
    {
        question : "Q4:what is the full form in Js?",
        a : "JavaScript",
        b : "java",
        c : "Hey transfer product",
        d : "HyperText  ",
        ans : "ans1"
    },
    

]


const question = document.querySelector('.Question')
const option1 = document.querySelector('#option1') 
const option2 = document.querySelector('#option2') 
const option3 = document.querySelector('#option3') 
const option4 = document.querySelector('#option4') 
const submit = document.querySelector('#submit') 
let answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore')
let questionCount = 0
let score = 0


const loadQuestion = ()=>{
    const questionList = quizDB[questionCount]
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();


const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsEle)=>{
        if(curAnsEle.checked){
            answer= curAnsEle.id
        }

    })
    return answer
}
const deselectAll=()=>{
    answers.forEach((curAnsEle)=> curAnsEle.checked = false)
}
submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer()
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score++
    };

    questionCount++;
    deselectAll()

    if(questionCount < quizDB.length){
        loadQuestion()
    }else{
        showScore.innerHTML = `
        <h3> you scored ${score}/${quizDB.length}</h3
        <button class="btn" onclick = "location.relaod()">pLAY AGain</button>
        `
        showScore.classList.remove('scoreArea')
    }
});