


function insertValue(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function calculate() {
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    alert("Invalid Expression");
    clearScreen();
  }

}


function clearScreen() {
  const display = document.getElementById("display");
  display.value = '';
}

function basicEval(expression) {
  return new Function('return' + expression)();
}


function cross() {

  const displayValue = document.getElementById("display").value;
  let deleteDigit = displayValue.slice(0, -1);

  document.getElementById("display").value = deleteDigit;
}