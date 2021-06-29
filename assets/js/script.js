/**
 * Pieces of the following code have been take from this link
 * https://www.youtube.com/watch?v=riDzcEQbX6k
 * 
 * I will comment on borrowed code as "borroved""
 * Any code without a "borrowed" is my own
 * 
 * please note, some borrowed code is customised by me.
 */


const startButton = document.getElementById('start-btn'); //borrowed
startButton.addEventListener('click', startGame); //borrowed

const homeButton = document.getElementById('homePage-btn');
homeButton.classList.add('hide');
const introHeading = document.getElementById('intro');

const correctAnwersLabel = document.getElementById('correct');
const wrongAnswersLabel = document.getElementById('incorrect');


const questionContainer = document.getElementById('question-container'); //borrowed
let shuffledQuestions, currentQuestionIndex, correctAnswers, wrongAnswers; //borrowed

//borrowed
function startGame() {
    //hide start btn when clicked
    startButton.classList.add('hide');
    //homeButton.classList.add('hide')      
    introHeading.classList.add('hide');
    //removes hide class from container
    questionContainer.classList.remove('hide');
    answerButtonsElement.classList.remove('hide');
    //generates random questions
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    resetStatistics();
    //calls function
    setNextQuestion();

}

const questionElement = document.getElementById('question'); //borrowed
const answerButtonsElement = document.getElementById('answer-buttons'); //borrowed


function setNextQuestion() {
    // will remove previous answers
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**
 * 
 * @param {*} question 
 */
//borrowed
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

//borrowed
//removes previous questions
function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
 * Disable all current list of answer's button
 */
function disableAnswerButtons() {
    answerButtonsElement.childNodes.forEach((button) => {
        button.disabled = true;
    });
}

//borrowed
function selectAnswer(e) {
    disableAnswerButtons();

    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);

    // Tranverse answers and show background color
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });

    updateStatistics(correct);

    //end of the game...
    setTimeout(() => {
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            currentQuestionIndex++;
            setNextQuestion();
        } else {
            startButton.innerHTML = 'Restart';
            startButton.classList.remove('hide');
            homeButton.classList.remove('hide');
            answerButtonsElement.classList.add('hide');
            document.querySelector('#question').innerHTML = 'Here is your score!';
        }
    }, 1000 * 2);
}

document.querySelector('#homePage-btn').addEventListener('click', () => {
    window.location.href = 'index.html';
});

//list of questions
function updateStatistics(isCorrectAnswer) {
    if (isCorrectAnswer) {
        correctAnswers++;
        correctAnwersLabel.innerText = correctAnswers;
    } else {
        wrongAnswers++;
        wrongAnswersLabel.innerText = wrongAnswers;
    }
}

function resetStatistics() {
    correctAnswers = 0;
    wrongAnswers = 0;
    correctAnwersLabel.innerText = correctAnswers;
    wrongAnswersLabel.innerText = wrongAnswers;
}

//borrowed
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

//array 
// list of questions
const questions = [{
        question: 'How many horns did a triceratops have?',
        answers: [{
                text: '4',
                correct: false
            },
            {
                text: '3',
                correct: true
            },
            {
                text: '1',
                correct: false
            }

        ]
    },
    {
        question: 'What does the word dinosaur mean? ',
        answers: [{
                text: 'A) Big lizard',
                correct: false
            },
            {
                text: 'B) Hungry lizard',
                correct: false
            },
            {
                text: 'C) Terrible lizard',
                correct: true
            }

        ]
    },
    {
        question: 'Dinosaurs first appeared in which geological period?',
        answers: [{
                text: 'A) Triassic',
                correct: true
            },
            {
                text: 'B) Jurassic',
                correct: false
            },
            {
                text: 'C) Cretaceous ',
                correct: false
            }

        ]
    },
    {
        question: 'What is the study of fossils called? ',
        answers: [{
                text: 'A) Ice-creamology ',
                correct: false
            },
            {
                text: ' B) Palaeontology',
                correct: true
            },
            {
                text: 'C) Historiology ',
                correct: false
            }

        ]
    },
    {
        question: 'When did dinosaurs go extinct?',
        answers: [{
                text: 'A) Around 85 million years ago ',
                correct: false
            },
            {
                text: 'B) Around 75 million years ago ',
                correct: false
            },
            {
                text: 'C) Around 65 million years ago',
                correct: true
            }

        ]
    },
    {
        question: 'How many horns did a triceratops have?',
        answers: [{
                text: 'A) 4',
                correct: false
            },
            {
                text: 'B) 3',
                correct: true
            },
            {
                text: 'C) 1',
                correct: false
            }

        ]
    },
    {
        question: 'Why did dinosaurs go extinct?',
        answers: [{
                text: 'A) They froze during Ice-age ',
                correct: false
            },
            {
                text: 'B) They were killed by an asteroid',
                correct: true
            },
            {
                text: 'C) They magically disappeared ',
                correct: false
            }

        ]
    },
    {
        question: 'What was the first dinosaur to be discovered?',
        answers: [{
                text: 'A) Mosasaurus ',
                correct: false
            },
            {
                text: 'B) T-rex ',
                correct: false
            },
            {
                text: 'C) Megalosaurus',
                correct: true
            }

        ]
    },
    {
        question: 'How many claws did a velociraptor have on each hand?',
        answers: [{
                text: 'A) 6',
                correct: false
            },
            {
                text: 'B) 3',
                correct: true
            },
            {
                text: 'C) 5',
                correct: false
            }

        ]
    },
    {
        question: 'Which dinosaur was the size of a chicken?',
        answers: [{
                text: ' A) Dilong',
                correct: false
            },
            {
                text: 'B) Compsognathus',
                correct: true
            },
            {
                text: 'C) Nemicolopterus ',
                correct: false
            }

        ]
    },
    {
        question: 'True or false: birds evolved from dinosaurs ',
        answers: [{
                text: 'A) True',
                correct: true
            },
            {
                text: 'B) False',
                correct: false
            },

        ]
    }
];