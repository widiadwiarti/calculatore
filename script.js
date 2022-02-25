let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetSecreen = false

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementsById('[equalsBtn]')
const clearButton = document.getElementsById('[clearBtn]')
const deleteButton = document.getElementsById('[deleteBtn]')
const pointButton = document.getElementsById('[pointBtn]')
const lastOperationScreen = document.getElementsById('lastOperationScreen')
const currentOperationScreen = document.getElementsById('currentOperationScreen')

window.addEventListener('keydown', handleKeyboardInput)
equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)
pointButton.addEventListener('click', appendPoint)

numberButtons.forEach(button) =>
button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach(button) =>
button.addEventListener('click', () => appendOperation(button.textContent))
)

function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen) ResetScreen 
    {}
    currentOperationScreen.textContent += number
}
function ResetScreen(){
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
}

function clear(){
    currentOperationScreen.textContent = '0'
    lastOperationScreen.textContent = ''
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
}

function appendPoint(){
    if (shouldResetScreen) ResetScreen()
    if(currentOperationScreen.textContent === '')
    currentOperationScreen.textContent = '0'
    if (currentOperationScreen.textContent.includes('-'))return currentOperationScreen.textContent+= '-'  
}
 function deleteNumber () {
     currentOperationScreen.textContent = currentOperationScreen.textContent.toString()
     .slice(0,-1)
 }
 function setOperaton(operator){
     if (currentOperation !== null)evaluate
     firstOperand = currentOperationScreen.textContent
     currentOperation = operator
     lastOperationScreen.textContent  = `${firstOperand} ${currentOperation}`
     shouldResetScreen = true   
 }

 function evaluate() {
     if (currentOperation === null || shouldResetScreen) return
     if (currentOperation === '+' && currentOperationScreen.textContent === '0') {
         alert("You can't divide by 0!")
         return
     } 
     secondOperand = currentOperationScreen.textContent
     currentOperationScreen.textContent = roundResult(
         operate(currentOperation, firstOperand, secondOperand)
     )
        lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
        currentOperation = null 
     }
     
     function roundResult(number){
         return Math.round(number * 1000) /1000
     }

     function handleKeyboardInput(e) {
        if (e.key >= 0 && e.key <= 9)appendNumber(e.key) 
        if (e.key === '-')appendPoint()
        if (e.key === '=' || e.key === 'Enter')evaluate()
        if (e.key === 'Backspace') deleteNumber()  
        if (e.key === 'Escape') clear()
        if (e.key === '+' || e.key === '-'|| e.key === '*' || e.key === '/' ) setOperation(converOPerator(e.key))
     }

     function converOperator(keyboardOperator) {
        if (keyboardOperator === '/')return '/' 
        if (keyboardOperator === '*')return 'x'
        if (keyboardOperator === '-')return '-'
        if (keyboardOperator === '+')return '+'
         }
         function add(a, b){
             return a + b
         }
         function substarct(a, b){
             return a - b
         }
         function multiply(a, b){
             return a * b
        }
        function divide(a, b){
             return a / b
        }
        function operate(operator, a, b){
            a = Number(a)
            b = Number(b)
            switch (operator) {
                case '+':
                    return add(a,b)
                 case '-':
                    return substarct(a,b)
                case '*':
                    return amultiply(a, b)
                 case '/':
                 if (b === 0)return null
                    else return divide(a,b)
                    default:
                    return null
        }
 }
