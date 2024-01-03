let firstNumber = 0
let secondNumber = 0
let firstOperator = null
let afterFirstOperation = false
let result = -1
let lastButtonTypeClicked = null
const monitor = document.querySelector('#monitor')
const monitorDisplay = monitor.querySelector('p')

const ourContainer = document.querySelector('.container')
const isNumber = (element) => {
	return element.id.startsWith('number') ? true : false
}
const whichNumber = (element) => {
	return element.id.replace('number_', '').replace('dot', '.')
}
const whichSymbol = (element) => {
	return element.id.replace('symbol_', '')
}

ourContainer.addEventListener('click', (element) => {
	isNumber(element.target) ? (lastButtonTypeClicked = 'number') : (lastButtonTypeClicked = 'symbol')
	addToScreen(element.target)
})

const addToScreen = (item) => {

	if (isNumber(item)) {
		monitorDisplay.textContent.includes('.') && whichNumber(item) === '.' ? '' : (monitorDisplay.textContent = monitorDisplay.textContent + whichNumber(item))
	} else {
		item.style.fontWeight = 800
		item.style.backgroundColor = 'grey'

		if(parseFloat(firstNumber) === 0){
			firstNumber = monitorDisplay.textContent
			monitorDisplay.textContent = ''
		}else{
			secondNumber = monitorDisplay.textContent
			monitorDisplay.textContent = firstNumber = operate(firstNumber, secondNumber, 'plus')

		}
	}
}

const operate = (firstNumber, secondNumber, operator) => {
	firstNumber = parseFloat(firstNumber)
	secondNumber = parseFloat(secondNumber)
	console.log(firstNumber)
	console.log(secondNumber)
	console.log(operator)
	let result = 0

	switch (operator) {
		case 'plus':
			result = firstNumber + secondNumber
			break
		case 'division':
			result = firstNumber / secondNumber
			break
		case 'subtract':
			result = firstNumber - secondNumber
			break
		case 'multiply':
			result =  firstNumber * secondNumber
			break
		default:
			break
	}

	return result
}
