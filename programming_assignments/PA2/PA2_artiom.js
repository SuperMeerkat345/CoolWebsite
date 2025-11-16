/*
PROGRAMMING ASSIGNMENT 2

1.) 
Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********

2.) 
Write function that translates a text to Pig Latin and back. 
English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. 
“The quick brown fox” becomes “hetay uickqay rownbay oxfay”.

3.) 
Create a function which takes a list of strings, translates to pig latin, and puts in a frame. Do this by calling the previous two functions.

Good Luck!
*/

function printInFrame(arr) {
	let printArr = [];

	// Step 1:
	// Find the length of the longest string to find the dimensions of the frame
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > max) {
			max = arr[i].length;
		}
	}

	// Step 2:
	// The top of frame
	printArr.push('*'.repeat(max+4));

	// Step 3:
	// Stuff in the middle
	for (let i = 0; i < arr.length; i++) {
		let str = ""; // the string to push

		str += "* ";
		str += arr[i];
		str += " ".repeat(max - arr[i].length)
		str += " *"

		printArr.push(str)

	}
 	
	// Step 4:
	// The bottom of the frame
	printArr.push('*'.repeat(max+4));

	// Print the array:
	for (let i = 0; i < printArr.length; i++) {
		console.log(printArr[i])
	}
}


// TESTER CODE FOR FRAME FUNCTIONS: 
let messages = [ "Hello World", "This is a test", "Pig Latin is fun" ]; 
console.log("Original Messages in Frame:"); 
printInFrame(messages);

//console.log("\nPig Latin Messages in Frame:");
//pigInFrame(messages);

// TESTER CODE FOR PIG LATIN FUNCTION:
// Single string test
//let testString = "Hello World from Pig Latin";
//let pigLatinString = toPigLatin(testString);
//console.log("\nOriginal String: " + testString);
//console.log("Pig Latin (Should output 'ellohay orldway romfay igpay atinlay'): " + pigLatinString);
//console.log("Converted Back: " + fromPigLatin(pigLatinString));
//
