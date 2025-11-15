/*PROGRAMMING ASSIGNMENT 1

Make function:
- add (num1, num2)
- subtract (num1, num2)
- divide (num1, num2)
- multiply (num1, num2)

In addition make the function:
- quadraticFormula (a, b, c)
^^^ This function calculates the roots for a quadratic ^^^
^^^ If a quadratic has imaginary solutions let the user know
^^^ Make sure to handle divide by zero errors

Good Luck!
*/
function add(num1, num2) {
    console.log(num1 + num2);
}

function subtract(num1, num2) {
    console.log(num1-num2);
}

function multiply(num1, num2) {
    console.log(num1*num2);
}

function divide(num1, num2) {
    if(num2 === 0)
        console.log("No Solution")
    else {
        console.log(num1/num2);
    }
}

function qFormula(a, b, c) {
    let sqrt = b*b-4*a*c
    if(a === 0)
        console.log("No Solution")
    else {
        if(sqrt < 0) {
            console.log("No Real Solution")
        }
        else {
            let pos = (-b + Math.sqrt(sqrt)) / (2*a);
            let neg = (-b - Math.sqrt(sqrt)) / (2*a);
            console.log("Answer: " + pos + ", " + neg);
        }
    }
}

console.log("Addition")
add(1,2)
add(6,7)

console.log("Subtraction")
subtract(1,2)
subtract(6,7)

console.log("Division")
divide(1,2)
divide(6,7)
divide(3,0) // ERROR

console.log("Multiplication")
multiply(1,2)
multiply(6,7)

console.log("Quadratic Formula")
qFormula(1, 3, 2)
qFormula(0, 2, 3) // ERROR
qFormula(1, 0, 4)
