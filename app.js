let num1 = '';
let num2 = '';
let operator = '';
let isSecondNumber = false;
let calculated = false;
let equalsBtn = document.querySelector('.equals');
let result = document.querySelector('.result');
let clearBtn = document.querySelector('.clearBtn');
let addBtn = document.querySelector('.addBtn')
let negativeNumBtn = document.querySelector('.negativeNum')

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Div by 0";
    }
    return a / b;
}


function operate(num1, operator, num2) {
    if (operator === '+') {
        const sum = add(Number(num1), Number(num2));
        result.value = sum;
        console.log(sum)
        return sum;
      } else if(operator === '-') {
          const diff = subtract(Number(num1), Number(num2));
          result.value = diff;
          console.log(diff)
        return diff;
      } else if(operator === '*') {
          const product = multiply(Number(num1), Number(num2));
          result.value = product;
          return product;
      } else if(operator === '/') {
          const divsion = divide(Number(num1), Number(num2));
          result.value = divsion;
          return divsion;
      }
}

clearBtn.addEventListener('click', (e) => {
    console.log('cleared');
    num1 = '';
    num2 = '';
    operator = '';
    isSecondNumber = false;
    calculated = false;
    result.value = '';
})


const div = document.querySelector('div')

div.addEventListener("click", (event) => {
  if (event.target.tagName === 'BUTTON') {
    const buttonValue = event.target.innerText;

    if (buttonValue === "Clear") {
      return; // skip display update for Clear
    }

    //prevent duplicate '.' in a number
    if (buttonValue === ".") {
      if (!isSecondNumber && num1.includes(".")) return;
      if (isSecondNumber && num2.includes(".")) return;
}

    if (buttonValue === "+/-") {
      if (!isSecondNumber) {
      if (num1.startsWith("-")) {
      num1 = num1.slice(1); // remove negative
    } else {
      num1 = "-" + num1; // add negative
    }
    result.value = num1;
  } else {
      if (num2.startsWith("-")) {
      num2 = num2.slice(1);
    } else {
      num2 = "-" + num2;
    }
    // Show full expression: num1 operator num2
    result.value = num1 + operator + num2;
  }
  return;
}

    // Reset state if a new number is pressed after a calculation
    if (calculated && !["+", "-", "*", "/", "="].includes(buttonValue)) {
      result.value = '';
      num1 = '';
      num2 = '';
      operator = '';
      isSecondNumber = false;
      calculated = false;
    }

    console.log(buttonValue);

    // Multiplication, Division, etc.
    if (["+", "-", "*", "/"].includes(buttonValue)) {
      if (calculated) {
        // Chain the result as new num1
        num1 = result.value;
        num2 = '';
        calculated = false;
      }
      operator = buttonValue;
      isSecondNumber = true;
      result.value += buttonValue;
      return; // don't append again
    }

    // Equals pressed
    if (buttonValue === "=") {
      operate(num1, operator, num2);
      calculated = true;
      return; // don't append "=" to display
    }

    // Numbers go to num1 or num2
    if (!isSecondNumber) {
      num1 += buttonValue;
    } else {
      num2 += buttonValue;
    }

    result.value += buttonValue;
  }
});
