let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter a mathematical operation (+, -, *, /):");
let num2 = Number(prompt("Enter another number:"));
let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2; 
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        alert("Division by zero is not allowed.");
    }
} else {
    alert("Invalid operator.");
}
    alert("Result: " + result);
