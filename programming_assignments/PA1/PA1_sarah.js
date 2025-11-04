function addition(num1, num2){
    console.log(num1 + num2);
}

function subtraction(num1, num2){
    console.log(num1-num2);
}

function divide(num1, num2){
    console.log(num1/num2);
}

function multiply(num1, num2){
    console.log(num1 * num2);
}

function quadraticFormula(a,b,c){
    if(Math.pow(b,2)-(4*a*c) < 0){
        console.log("No real solution")
    }
    else{
        let root1 = (-b+Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
        let root2 = (-b-Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
        console.log(root1);
        console.log(root2);
    }
}

//tester code
console.log("Addition")
addition(1,2)
addition(6,7)

console.log("Subtraction")
subtraction(1,2)
subtraction(6,7)

console.log("Division")
divide(1,2)
divide(6,7)
divide(3,0) // ERROR

console.log("Multiplication")
multiply(1,2)
multiply(6,7)

console.log("Quadratic Formula")
quadraticFormula(1, 3, 2)
quadraticFormula(0, 2, 3) // ERROR
quadraticFormula(1, 0, 4)
