// Constants
const decimalBtn = document.getElementById('calc-decimal');
const clearBtn = document.getElementById('calc-clear');
const backspaceBtn = document.getElementById('calc-backspace');

const displayValElement = document.getElementById('calc-display-val');

const calcNumBtns = document.getElementsByClassName('calc-btn-num');
const calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

// Variables 
let displayVal = '0';
let pendingVal;
let evalStringArray = [];

// functions
let updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;

    if (displayVal === '0') 
        displayVal = '';
    
    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

let preformOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;

        case '-': 
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;

        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
        break;

        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
        break;    

        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation
            displayValElement.innerText = displayVal;
            evalStringArray = [];
        break;
    
        default:
            break;
    }
}

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal);
}

for (let i = 0; i < calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener('click', preformOperation, false);
}



clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evaStringArray = [];
    displayValElement.innerText = displayVal;
}

backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

    if (displayVal === '')
        displayVal = '0';
    displayValElement.innerText = displayVal;
}

decimalBtn.onclick = () => {
    if (!displayVal.includes('.'))
        displayVal += '.';
    displayValElement.innerText = displayVal;
}