function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const expression = document.getElementById('display').value;
  const regex = /(\d+(\.\d+)?)[+\-*/]?/g;
  const numbers = expression.match(regex);
  
  if (numbers) {
    try {
      const result = eval(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  } else {
    document.getElementById('display').value = 'Error';
  }
}

  