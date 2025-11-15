// TESTER CODE FOR FRAME FUNCTIONS:
let messages = [
    "Hello World",
    "This is a test",
    "Pig Latin is fun"
];

console.log("Original Messages in Frame:");
printInFrame(messages);

console.log("\nPig Latin Messages in Frame:");
pigInFrame(messages);

// TESTER CODE FOR PIG LATIN FUNCTION:
// Single string test
let testString = "Hello World from Pig Latin";
let pigLatinString = toPigLatin(testString);
console.log("\nOriginal String: " + testString);
console.log("Pig Latin (Should output 'ellohay orldway romfay igpay atinlay'): " + pigLatinString);
console.log("Converted Back: " + fromPigLatin(pigLatinString));
