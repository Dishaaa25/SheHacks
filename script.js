const startButton= document.getElementById('start-btn')
const nextButton= document.getElementById('next-btn')

const questionContainerElement= document.getElementById('question-container')
const questionElement= document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')

let currentQuestionIndex;
let quizscore=0;

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setnextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizscore=0
}

function setnextQuestion(){
    resetState();
    showQuestion(currentQuestionIndex)
}


function showQuestion(question){
    questionElement.innerText= question.question;
    question.answers.forEach((answer) =>{
        const button =document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStateClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct= selectedButton.dataset.correct

    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach((button)=>{
        setStatusClass(button.dataset.correct)
    })
    startButton.innerText="restart"
    startButton.classList.remove("hide")
    if(selectedButton.dataset= correct){
        quizscore++
    }
    document.getElementById('right-answers').innerText=quizscore
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classlList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions=[
    {
        question: 'Question 1',
        answers: [
            {text: 'Answer 1', correct: 'false'},
            {text: 'Answer 2', correct: 'true'},
            {text: 'Answer 3', correct: 'false'},
            {text: 'Answer 4', correct: 'false'}

        ]
    },
    {
        question: 'Question 2',
        answers:[
            {text: 'Answer 1', correct: 'false'},
            {text: 'Answer 2', correct: 'false'},
            {text: 'Answer 3', correct: 'true'},
            {text: 'Answer 4', correct: 'false'}
        ]
    },
    {
        question: 'Question 3',
        answers:[
            {text: 'Answer 1', correct: 'false'},
            {text: 'Answer 2', correct: 'false'},
            {text: 'Answer 3', correct: 'false'},
            {text: 'Answer 4', correct: 'true'}
        ]
    }
]