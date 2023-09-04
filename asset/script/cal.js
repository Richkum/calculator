const numbers = document.querySelectorAll('.numb');
const display = document.querySelector('.display textarea');
const caltn = document.querySelector('.caltn');
const equals = document.querySelector('.equals');
const clear = document.querySelectorAll('.clear');
const negpos = document.querySelector('.negpos');
const percent = document.querySelector('.percent');


let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let displayValue = 0;

for(let i = 0; i <numbers.length; i++) {
  numbers[i].addEventListener('click', (e) => {
    let atr = e.target.getAttribute('value');
    if(isFirstValue  === false) {
      getFirstValue(atr);
    }
    if(isSecondValue === false) {
      getSecondValue(atr);
    }
  })
}

function getFirstValue(el) {
  display.innerHTML = "";
  firstValue += el;
  display.innerHTML = firstValue;
  firstValue = +firstValue;
}

function getSecondValue(el) {
  if(firstValue != "" && sign != "") {
    secondValue += el;
    display.innerHTML = secondValue;
    secondValue = +secondValue;
  }
}

function getCaltn() {
  for(let i = 0; i < caltn.length; i++) {
    caltn[i].addEventListener('click', (e) => {
      sign = e.target.getAttribute('value');
    })
  }
}
getCaltn();

equals.addEventListener('click', () => {
  display.innerHTML = "";
  if(sign === '+') {
    displayValue = firstValue + secondValue;
  }else if(sign === '-') {
    displayValue = firstValue - secondValue;
  }else if(sign === '*') {
    displayValue = firstValue * secondValue;
  }else if(sign === '/') {
    displayValue = firstValue / secondValue;
  }
  display.innerHTML = displayValue;
  firstValue = displayValue;
  secondValue = "";

  checkDisplaytLength();

})

function checktLength() {
  displayValue = JSON.stringify(resultsValue);

  if(resultsValue.length >= 8) {
    resultsValue = JSON.parse(resultsValue);
    results.innerHTML = resultsValue.toFixed(5);
  }
}


