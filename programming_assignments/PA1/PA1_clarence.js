function add(num1, num2){
    console.log(num1 + num2)
}
function subtract(num1, num2){
    console.log(num1 - num2)
}
function divide(num1, num2){
    console.log(num1 / num2)
}
function multiply(num1, num2){
    console.log(num1 * num2)
}
function qFormula(a, b, c){
    if(((Math.pow(b, 2)) - (4*a*c)) < 0) {
        console.log('No Real Solution')
    } 
    else{
        var root1 = ((-b)+Math.sqrt((Math.pow(b, 2)) - (4*a*c)))/(2*a)
        var root2 = (((-b)-Math.sqrt((Math.pow(b, 2)) - (4*a*c)))/(2*a))
    
        console.log(root1)
        console.log(root2)
    }
}

//tester code
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
