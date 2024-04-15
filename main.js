function calculate() {
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var operator = document.getElementById("operator").value;

  var result = document.getElementById("result");

  checkInp(firstNumber, secondNumber);

  var calc = performCalculate(
    parseFloat(firstNumber),
    parseFloat(secondNumber),
    operator
  );
  result.value = calc.toFixed(3);
}


function checkInp(x, y)
{
    var checkCharecter=/^[0-9]+$/;
    if (!x.match(checkCharecter) || !y.match(checkCharecter))
    {
        // alert("Must input Number");
        result.value=("Must input integer or float number ! any characters or special-characters are not allowed");
        return false;
    }
}

function performCalculate(x, y, operator) {
  if (x >= 0 && y >= 0 && operator == "+") {
    return x + y;
  } else if (x >= 0 && y >= 0 && operator == "-") {
    return x - y;
  } else if (x >= 0 && y >= 0 && operator == "*") {
    return x * y;
  } else if (x >= 0 && y >= 0 && operator == "/") {
    return x / y;
  } else {
    return "Please enter a valid number, empty not allowed";
  }
}

