const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestion

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

const questions = [
    {
        question: 'How many horns did a triceratops have?',
        answers: [
            { text: '4', correct: false},
            { text: '3', correct: true},
            {text: '1', correct: false}

        ] 
    }
]