function printInFrame(arr) {
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }

    let border = "";
    for (let i = 0; i < maxLength + 4; i++) {
        border += "*";
    }

    console.log(border);

    for (let i = 0; i < arr.length; i++) {
        let line = "* " + arr[i];
        while (line.length < maxLength + 3) {
            line += " ";
        }
        line += "*";
        console.log(line);
    }

    console.log(border);
}

function toPigLatin(text) {
    let words = text.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let pigWord = word.slice(1) + word[0] + "ay";
        result += pigWord;

        if (i < words.length - 1) {
            result += " ";
        }
    }

    return result;
}

function fromPigLatin(text) {
    let words = text.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let noAy = word.slice(0, -2);
        let originalWord = noAy.slice(-1) + noAy.slice(0, -1);
        result += originalWord;

        if (i < words.length - 1) {
            result += " ";
        }
    }

    return result;
}

function pigInFrame(arr) {
    let pigLatinArr = [];

    for (let i = 0; i < arr.length; i++) {
        pigLatinArr.push(toPigLatin(arr[i]));
    }

    printInFrame(pigLatinArr);
}