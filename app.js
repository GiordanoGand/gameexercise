const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')

let score = document.querySelector('#score')
let result = 0;
let currentTime = timeLeft.textContent

function randomSquare() {
	square.forEach(className => {
		className.classList.remove('mole')
	})
	let randomPosition = square[ Math.floor(Math.random() * 9)]
	randomPosition.classList.add('mole')

	hitpostion = randomPosition.id
}

square.forEach(id => {
	id.addEventListener('mouseup', () => {
		if (id.id === hitpostion) {
		result++
		score.textContent = result
		}
	})	

	})


function moveMole(){
	let timerId = null
	timerId = setInterval(randomSquare, 700)
}

moveMole()

function countdown(){
	currentTime--
	timeLeft.textContent = currentTime

	if (currentTime === 0){
		clearInterval(timerId)
		alert('GAME OVER! Your score is ' + result)
	}
}

let timerId = setInterval(countdown, 1000)