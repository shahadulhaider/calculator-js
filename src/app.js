import Calculator from './calculator'

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

document.addEventListener('keydown', (event) => {
  event.preventDefault();

  const numKeys = [...Array(10)].map((_, i) => i.toString()).concat('.')
  const opKeys = ['+', '-', '*', '/']

  if (numKeys.includes(event.key)) {
    calculator.appendNumber(event.key)
    calculator.updateDisplay()
  }
  if (opKeys.includes(event.key)) {
    calculator.chooseOperation(event.key)
    calculator.updateDisplay()
  }

  if (event.key === 'Enter' || event.key === '=') {
    calculator.compute()
    calculator.updateDisplay()
  } else if (event.key === 'Backspace' || event.key === 'Delete') {
    calculator.delete()
    calculator.updateDisplay()
  }
})

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})
