// targets ID in html
const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startGame)

const questtionContainer = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex

function startGame() {
    //hide start btn when clicked
    startButton.classList.add('hide')
    //removes hide class from container
    questtionContainer.classList.remove('hide')
    //generates random questions
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
} 

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question

}

// 4. list of questions
const questions = [
    {
        question: 'How many horns did a triceratops have?',
        answers: [
            { text: '4', correct: false},
            { text: '3', correct: true},
            {text: '1', correct: false}

        ] 
    },
    {
        question: 'What does the word dinosaur mean? ',
        answers: [
            { text: 'Big lizard', correct: false},
            { text: 'Hungry lizard', correct: false},
            {text: 'Terrible lizard', correct: true}

        ] 
    },
    {
        question: 'Dinosaurs first appeared in which geological period?',
        answers: [
            { text: 'Triassic', correct: true},
            { text: 'Jurassic', correct: false},
            {text: 'Cretaceous ', correct: false}

        ] 
    },
    {
        question: 'What is the study of fossils called? ?',
        answers: [
            { text: 'Ice-creamology ', correct: false},
            { text: ' Palaeontology', correct: true},
            {text: 'Historiology ', correct: false}

        ] 
    },
    {
        question: 'When did dinosaurs go extinct?',
        answers: [
            { text: 'Around 85 million years ago ', correct: false},
            { text: 'Around 75 million years ago ', correct: false},
            {text: 'Around 65 million years ago', correct: true}

        ] 
    },
    {
        question: 'How many horns did a triceratops have?',
        answers: [
            { text: '4', correct: false},
            { text: '3', correct: true},
            {text: '1', correct: false}

        ] 
    },
    {
        question: 'Why did dinosaurs go extinct?',
        answers: [
            { text: 'They froze during Ice-age ', correct: false},
            { text: 'They were killed by an asteroid', correct: true},
            {text: 'They magically disappeared ', correct: false}

        ] 
    },
    {
        question: 'What was the first dinosaur to be discovered?',
        answers: [
            { text: 'Mosasaurus ', correct: false},
            { text: 'T-rex ', correct: false},
            {text: 'Megalosaurus', correct: true}

        ] 
    },
    {
        question: 'How many claws did a velociraptor have on each hand?',
        answers: [
            { text: '6', correct: false},
            { text: '3', correct: true},
            {text: '5', correct: false}

        ] 
    },
    {
        question: 'Which dinosaur was the size of a chicken?',
        answers: [
            { text: ' Dilong', correct: false},
            { text: 'Compsognathus', correct: true},
            {text: 'Nemicolopterus ', correct: false}

        ] 
    },
    {
        question: 'True or false: birds evolved from dinosaurs ',
        answers: [
            { text: 'True', correct: true},
            { text: 'False', correct: false},
            // add hide class to answer button here????
           
        ] 
    }
]


