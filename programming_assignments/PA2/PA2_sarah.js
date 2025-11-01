function frameList(arr){
    let maxLength = arr[0].length;
    for(let i = 1; i<arr.length; i++){
        if(arr[i].length > maxLength)
        {
            maxLength = arr[i].length;
        }
    }

let output = ""
    for(let i = 0; i<maxLength+4; i++){
        output+="*";
    }
    console.log(output);

for(let j = 0; j < arr.length; j++){
        let row ="";
        row+= "* ";
        row+=arr[j];
        for(let i = arr[j].length; i<maxLength; i++){
            row+=" ";
        }
        row+=" *";
        console.log(row);
    }
    
    let output2 = ""
    for(let i = 0; i<maxLength+4; i++){
        output2+="*";
    }
    console.log(output2);
}