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