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