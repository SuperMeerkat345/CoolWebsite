function zeroAnArray(x){
    for(let i = 0; i < x.length; i++){
        x[i] = 0;
    }
}
function printElementsInAnArray(y){
    for(let i = 0; i < y.length; i++){
        console.log(y[i])``
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
function removeDuplicates(arr){
    let valueArray = []
    for(let i = 0; i < arr.length; i++){
        let duplicate = false;
    }
    for(let j = 0; j < valueArray.length; j++){
        if(arr[i] === valueArray[j]){
            duplicate = true;
            break;
        }
    }
    if(!duplicate){
        valueArray.push(arr[j])
    }
    return arr;
}
