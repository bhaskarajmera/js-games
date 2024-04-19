const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 20
let timerId = null

// startButton.addEventListener('click', () => {
//     moveMole()
//     let coutDownTimerId = setInterval(
//         () => {
//             currentTime--
//             timeLeft.textContent = currentTime
//             startButton.setAttribute('disable', true)
//             if (currentTime == 0) {
//                 clearInterval(coutDownTimerId)
//                 clearInterval(timerId)
//                 alert('GAME OVER! Your Final Score: ' + result)
//                 startButton.setAttribute('enable', true)
//             }
//         }, 1000)
// })

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * squares.length)]
    // console.log(randomSquare);

    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() { 
    timerId = setInterval(randomSquare, 600)
}

moveMole()

function countDown() { 
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(coutDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your Final Score: ' + result)
    }
}

let coutDownTimerId = setInterval(countDown, 1000)