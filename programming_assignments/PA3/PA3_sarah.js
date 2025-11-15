function zeroArr(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = 0;
    }
}

function printArr(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function rotateArray(arr, count){
    for(let i = 0; i < count; i++){
        let last = arr.pop()
        arr.unshift(last);
    }
    return arr;
}


// TESTER CODE
let testArray1 = [1, 2, 3, 4, 5];
console.log("testArray1:");
printArr(testArray1);

zeroArr(testArray1);
console.log("After zeroAnArray:");
printArr(testArray1);

let testArray2 = [1, 2, 3, 4, 5];
console.log("testArray2:");
printArr(testArray2);

rotateArray(testArray2, 2);
console.log("After rotateArray by 2:");
printArr(testArray2);

let testArray3 = [1, 2, 2, 3, 4, 4, 5];
console.log("testArray3:");
printArr(testArray3);

//let uniqueArray = removeDuplicates(testArray3);
//console.log("After removeDuplicates:");
//printArr(uniqueArray);
