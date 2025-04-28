let num1
let num2
let operator
let equalsBtn = document.querySelector('.equals');


function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(num1, num2, operator) {
    return num1 + operator + num2;
}

equalsBtn.addEventListener('click', (e) => {
    console.log('testing result')
})