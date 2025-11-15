function zeroAnArray(x){
    for(let i = 0; i < x.length; i++){
        x[i] = 0;
    }
}
function printElementsInAnArray(y){
    for(let i = 0; i < y.length; i++){
        console.log(y[i])
    }
}
function rotateArray(array, count){
    for(let i = 0; i < count; i++){
        let final = array[array.length - 1];
        for(let j = array.length - 1; j > 0; j--){
            array[j] = array[j - 1];
        }
        array[0] = final;
    }
}
function removeDuplicates(arr) {
    let valueArray = [];

    for (let i = 0; i < arr.length; i++) {
        let duplicate = false;

        for (let j = 0; j < valueArray.length; j++) {
            if (arr[i] === valueArray[j]) {
                duplicate = true;
                break;
            }
        }

        if (!duplicate) {
            valueArray.push(arr[i]);
        }
    }

    return valueArray;
}

// TESTER CODE
let testArray1 = [1, 2, 3, 4, 5];
console.log("testArray1:");
printElementsInAnArray(testArray1);

zeroAnArray(testArray1);
console.log("After zeroAnArray:");
printElementsInAnArray(testArray1);

let testArray2 = [1, 2, 3, 4, 5];
console.log("testArray2:");
printElementsInAnArray(testArray2);

rotateArray(testArray2, 2);
console.log("After rotateArray by 2:");
printElementsInAnArray(testArray2);

let testArray3 = [1, 2, 2, 3, 4, 4, 5];
console.log("testArray3:");
printElementsInAnArray(testArray3);

let uniqueArray = removeDuplicates(testArray3);
console.log("After removeDuplicates:");
printElementsInAnArray(uniqueArray);	
