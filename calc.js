// Constants
const display = document.querySelector('.display');
const keys = document.querySelector('.keys');

// Variables
let displayValue = '',
    storedValue = '',
    operator = 0;

// Operator Functions
function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(){
    if (n1 === 0 || n2 === 0){
        return "That's impossible, but nice try.";
    } else {
        return n1 / n2;
    }
}

function calculate(displayValue, operator, storedValue) {
    let n1 = parseFloat(storedValue);
    let n2 = parseFloat(displayValue);
    if (operator === '+'){
        return add;
    } else if (operator === '-'){
        return subtract;
    } else if (operator === '*'){
        return multiply;
    } else if (operator === '/'){
        return divide;
    }
}

function setDisplay(text){
    display.textContent = text;
}

setDisplay(0);

//event handler
keys.addEventListener('click', (e) => {
    let number = e.target.innerText;
    displayValue += number;
    setDisplay(displayValue);
});