const error = 'Error!'
import './styles.css'
class Calculator {
  constructor(operandoPrevioTexto, siguienteOperandoTexto) {
    this.previoOperandoTextElement = operandoPrevioTexto
    this.siguienteOperandoTextElement = siguienteOperandoTexto
    this.clear()
  }

  clear() {
    this.siguienteOperando = ''
    this.previoOperando = ''
    this.operation = undefined
  }

  delete() {
    this.siguienteOperando = this.siguienteOperando.toString().slice(0, -1)
  }

  changeSymbol() {
    if (this.siguienteOperando.includes('-')) {
      this.siguienteOperando = this.siguienteOperando.replace('-', '')
    } else {
      this.siguienteOperando = '-' + this.siguienteOperando
    }
  }

  appendNumber(number) {
    if (number === '.' && this.siguienteOperando.includes('.')) return
    this.siguienteOperando =
      this.siguienteOperando.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.siguienteOperando === '') return
    if (this.previoOperando !== '') {
      this.compute()
    }
    this.operation = operation
    this.previoOperando = this.siguienteOperando
    this.siguienteOperando = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previoOperando)
    const current = parseFloat(this.siguienteOperando)
    const error = 'Error!'
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current

        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      case '%':
        computation = prev % current
        break
      default:
        return
    }
    this.siguienteOperando = computation
    this.operation = undefined
    this.previoOperando = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]

    let integerDisplay

    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toString()
    }
    if (decimalDigits != null) {
      if (integerDigits >= 0) {
        let decimalSpace = 8 - integerDisplay.length
        console.log(decimalSpace)
        console.log(decimalDigits)
        return `${integerDisplay}.${decimalDigits.substring(0, decimalSpace)}`
      } else {
        if (integerDigits < -9999999) {
          return 'ERROR'
        }
        let decimalSpace = 7 - integerDisplay.length
        return `${integerDisplay}.${decimalDigits.substring(0, decimalSpace)}`
      }
    } else {
      if (integerDigits > 999999999) {
        return 'ERROR'
      } else if (integerDigits < -99999999) {
        return 'ERROR'
      }
      return integerDisplay
    }
  }

  updateDisplay() {
    this.siguienteOperandoTextElement.innerText = this.getDisplayNumber(
      this.siguienteOperando
    )

    if (this.operation != null) {
      this.previoOperandoTextElement.innerText = `${this.getDisplayNumber(
        this.previoOperando
      )} ${this.operation}`
    } else {
      this.previoOperandoTextElement.innerText = ''
    }
  }
}

const numberButtons = document.querySelectorAll('[data-numero]')
const operationButtons = document.querySelectorAll('[operacion]')
const equalsButton = document.querySelector('[igual]')
const deleteButton = document.querySelector('[data-borrar]')
const allClearButton = document.querySelector('[clear-all]')
const masmenos = document.querySelector('[data-masmenos]')

const previoOperandoTextElement = document.querySelector(
  '[data-operando-previo ]'
)
const siguienteOperandoTextElement = document.querySelector(
  '[data-siguiente-operando]'
)

const calculator = new Calculator(
  previoOperandoTextElement,
  siguienteOperandoTextElement
)

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', (button) => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', (button) => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', (button) => {
  calculator.delete()
  calculator.updateDisplay()
})

masmenos.addEventListener('click', (button) => {
  calculator.changeSymbol()
})
