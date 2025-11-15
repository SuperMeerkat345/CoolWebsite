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

function pigLatin(text){
    let arr = text.split(" ");
    for(let i = 0; i < arr.length; i++){
        let output ="";
        output+=arr[i].substring(1,arr[i].length);
        output+=arr[i].substring(0,1);
        output+="ay";
        arr[i] = output;
    }
    text = arr.join(" ");
    return(text);
}

function pigLatinFrame(arr){
    let text = arr.join(" ");
    let newArr = pigLatin(text).split(" ");
    frameList(newArr);
}


// TESTER CODE FOR FRAME FUNCTIONS:
let messages = [
    "Hello World",
    "This is a test",
    "Pig Latin is fun"
];

console.log("Original Messages in Frame:");
frameList(messages);

console.log("\nPig Latin Messages in Frame:");
pigLatinFrame(messages);

// TESTER CODE FOR PIG LATIN FUNCTION:
// Single string test
let testString = "Hello World from Pig Latin";
let pigLatinString = pigLatin(testString);
console.log("\nOriginal String: " + testString);
console.log("Pig Latin (Should output 'ellohay orldway romfay igpay atinlay'): " + pigLatinString);
//console.log("Converted Back: " + fromPigLatin(pigLatinString));
