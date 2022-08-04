var readline = require('readline-sync');


let firstNum = readline.question("Enter the first number: ");
let secondNum = readline.question("Enter the second number: ");
let operator = readline.keyIn("do you want to (a)dd, (s)ubract, (d)ivide, or (m)ultiply? ");


var Calculation = function(firstNum, secondNum, operator) {
  this.num1 = parseInt(firstNum);
  this.num2 = parseInt(secondNum);
  this.operator = operator;

  this.result = function() {
    var num1 = this.num1;
    var num2 = this.num2;
    var operator = this.operator;


    if (operator === 'a') {
      var result = num1 + num2;
    } else if (operator === 's'){
      var result = num1 - num2;
    } else if (operator === 'd'){
      var result = num1 / num2;
    } else if (operator === 'm'){
      var result = num1 * num2;
    } else {
      var result = "try again."
    }
    

    console.log("The result is: " + result);

};
}

var calc = new Calculation(firstNum, secondNum, operator);

calc.result();






/*var readline = require('readline-sync');

var Calculation = function(num1, num2, op) {
  x = parseInt(num1);
  y = parseInt(num2);
  op = op;

  this.result = function() {
    var x = x;
    var y = y;
    var op = op;

    if (op === "+") {
      var result = x + y;
    } else if (op === "-") {
      var result = x - y;
    } else if (op === "/") {
      var result = x / y;
    } else if (op === "*") {
      var result = x * y;
    } else if (op === "%") {
      var result = x % y;
    } else {
      var result = "Error!"
    }

    console.log("Result: " + result);
  };
}

var num1 = readline.question("Please enter a number: ");
var num2 = readline.question("Please enter another number: ");
var op = readline.question("Please enter an operator: ");

var calc = new Calculation(num1, num2, op);

calc.result();

*/