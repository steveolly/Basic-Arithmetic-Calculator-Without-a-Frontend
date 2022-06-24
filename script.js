const num1 = parseFloat(prompt("Input first variable"));
const operator = prompt("choose the operator (*, /, +, -)");
const num2 = parseFloat(prompt("Input second variable"));

let answer = 0;
if (isNaN(num1) || isNaN(num2)) {
  document.write("invalid variable.");
} else if (operator == "+") {
  answer = num1 + num2;
  document.write(
    num1 + " " + operator + " " + num2 + " " + " = " + answer + "."
  );
} else if (operator == "-") {
  answer = num1 - num2;
  document.write(
    num1 + " " + operator + " " + num2 + " " + " = " + answer + "."
  );
} else if (operator == "*") {
  answer = num1 * num2;
  document.write(
    num1 + " " + operator + " " + num2 + " " + " = " + answer + "."
  );
} else if (operator == "/") {
  answer = num1 / num2;
  document.write(
    num1 + " " + operator + " " + num2 + " " + " = " + answer + "."
  );
} else {
  document.write("Invalid Operator....");
}
