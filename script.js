// variables for the ButtonsElement
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

let currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

//start quiz
function startQuiz() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//question array
var questions = [
  {
    question: 'What is the square root of 144?',
    answers: [
      { text: '12', correct: true },
      { text: '13', correct: false },
      { text: '14', correct: false},
      { text: '11', correct: false }
    ]
  },
  {
    question: 'Who created HTML?',
    answers: [
      { text: 'Tim Berners-Lee', correct: true },
      { text: 'Marc Andreessen', correct: false },
      { text: 'Elon Musk', correct: false },
      { text: 'Steve Jobs', correct: false }
    ]
  },
  {
    question: 'How many days did it take to create Java SCript?',
    answers: [
      { text: '20', correct: false },
      { text: '10', correct: true },
      { text: '30', correct: false },
      { text: '5', correct: false }
    ]
  },
  {
    question: 'Are readme files required for every project',
    answers: [
      { text: 'NO', correct: false },
      { text: 'YES', correct: true }
    ]
  }
]
//two minute countdown timer
var startingMinutes=2;
let time=startingMinutes*60
var countDownEl= document.getElementById('timer');
function updateTimer(){

}

