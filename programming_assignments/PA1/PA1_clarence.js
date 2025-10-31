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
