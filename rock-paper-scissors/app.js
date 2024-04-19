/* const, let, getElementById, querySelectorAll, addEventListener, forEach, Math.floor(), Math.random(), if (){}, .target, .innerhtml */

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result-display')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
    })
})

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or possibleChoices.length
    // console.log(randomNumber)

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    if (randomNumber === 3){
        computerChoice = 'scissor'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissor') {
        result = 'You Lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissor') {
        result = 'You Win'
    }
    if (computerChoice === 'scissor' && userChoice === 'paper') {
        result = 'You Lose!'
    }
    if (computerChoice === 'scissor' && userChoice === 'rock') {
        result = 'You Win!'
    }

    resultDisplay.innerHTML = result
}