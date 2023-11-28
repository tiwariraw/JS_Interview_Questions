// 127.0.0.1

// Q1. Write a function which generates a randomUserIp.
function randomUserIp() {
    let ip = ''
    for (let i = 1; i <= 4; i++) {
        ip = ip + Math.floor(Math.random() * 256) + (i < 4 ? '.' : '');
    }
    return ip;
}

console.log(randomUserIp());

console.log('-------------------');

// Q2. Write a function which generates a randomMacAddress

function randomMacAddress() {
    let mac = '';

    const hexDigits = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'
    ];

    for (let i = 1; i <= 6; i++) {
        mac = mac + hexDigits[Math.floor(Math.random() * hexDigits.length)] + hexDigits[Math.floor(Math.random() * hexDigits.length)] + (i < 6 ? '-' : '');
    }

    return mac;
}

console.log(randomMacAddress());

console.log('-------------------');

// Q3.  Declare a function name userIdGeneratedByUser. It doesn’t take any
//  parameter but it takes two inputs using prompt(). One of the input is the
//  number of characters and the second input is the number of ids which are 
// supposed to be generated.

function userIdGeneratedByUser() {
    const numOfChars = +prompt('Enter the number of characters: ');
    const numOfIds = +prompt('Enter the number of ids to be generated: ')

    const output = [];

    const alphanumeric = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'];


    for (let i = 1; i <= numOfIds; i++) {
        let id = '';
        for (let j = 1; j <= numOfChars; j++) {
            id += alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
        }
        output.push(id);
    }

    return output;
}

console.log(userIdGeneratedByUser());

console.log('-------------------');

// Q4. Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)

function rgbColorGenerator() {
    let rgb = [];

    for (let i = 1; i <= 3; i++) {
        rgb.push(Math.floor(Math.random() * 256));
    }

    return `rgb(${rgb.join(',')})`;
}

console.log(rgbColorGenerator());

console.log('----------------');

// Q5. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors() {
    let output = [];

    let hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    const randomNum = Math.floor(Math.random() * 20);

    for (let i = 0; i < randomNum; i++) {
        let hex = '#';
        for (let j = 0; j < 6; j++) {
            hex += hexDigits[Math.floor(Math.random() * hexDigits.length)];
        }
        output.push(hex);
    }

    return output;
}

console.log(arrayOfHexaColors());

console.log('----------------');

// Q6. Write a function arrayOfRgbColors which return any number of RGB colors in an array

function arrayOfRGBColors() {
    let output = [];

    const randomNum = Math.floor(Math.random() * 20);

    for (let i = 0; i < randomNum; i++) {
        let rgb = [];
        for (let j = 0; j < 3; j++) {
            rgb.push(Math.floor(Math.random() * 256));
        }
        output.push(`rgb(${rgb.join(',')})`);
    }

    return output;
}

console.log(arrayOfRGBColors());

console.log('----------------');

// Q7. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

/*
    We will use the following approach to convert hex color codes into RGB format:

     -> The RGB format has three values: Red, Green, and Blue.
     -> Hex color codes have a length of 6, i.e., they can contain 6 hex values (like BAFD32, AAFF22, etc).
     -> We need to take two hex values for one RGB value, convert those two hex values to decimal values, and then perform the same step with the other values.
     -> We will get 3 values that correspond to RGB values.
*/

// https://sabe.io/blog/javascript-hex-to-decimal


function convertHexaToRgb(hex) {
    const output = [];

    // remove the # from the hex string
    const hexArr = hex.slice(1).split('');

    // converting hexadecimal to decimal with parseInt function from hexArr two at a time
    for (let i = 0; i < hexArr.length; i += 2) {
        output.push(parseInt(hexArr[i] + hexArr[i + 1], 16));
    }

    return `rgb(${output.join(',')})`;
}

console.log(convertHexaToRgb('#3c4ef1'));

console.log('----------------');

// Q8. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function convertRgbToHexa(r, g, b) {
    let hex = '';

    hex += '#' + r.toString(16) + g.toString(16) + b.toString(16);

    return hex;
}

console.log(convertRgbToHexa(60, 78, 241));

console.log('----------------');


// Q9. Write a functions which checks if all items are unique in the array.

function f1(arr) {
    const output = [];

    for (const e of arr) {
        if (!output.includes(e)) {
            output.push(e);
        }
    }

    if (output.length === arr.length) {
        return true;
    }
    else {
        return false;
    }
}

console.log(f1([1, 2, 2, 4, 5]));

console.log('---------------');

//  OR

function f2(arr) {
    const uniqueSet = new Set(arr);

    return uniqueSet.size === arr.length
}

console.log(f2([1, 2, 2, 4, 5]));

console.log('---------------');

// Q10. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVariableRegEx(variableName) {
    const validVariablePattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

    const isValid = validVariablePattern.test(variableName);

    if (isValid) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidVariableRegEx('_$ashish'));
console.log(isValidVariableRegEx('_car@987'));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
// https://stackoverflow.com/questions/10940137/regex-test-v-s-string-match-to-know-if-a-string-matches-a-regular-expression

/*

Explanation:

1. ^ : Asserts the start of the string.
2. [a-zA-Z_$]: Matches any single character that is a letter (uppercase or lowercase),
underscore (_), or dollar sign ($). This ensures that the variable name must 
start with a letter, underscore, or dollar sign.
3. [a-zA-Z0-9_$]*: Matches zero or more occurrences of any character that is a 
letter (uppercase or lowercase), digit, underscore (_), or dollar sign ($).
This allows for additional characters in the variable name after the first 
character.
4. $: Asserts the end of the string.

In summary:

-> ^[a-zA-Z_$]: Ensures the variable name starts with a letter, underscore, or dollar sign.
-> [a-zA-Z0-9_$]*$: Allows for zero or more occurrences of letters, digits, underscores, or dollar signs after the first character.

*/

console.log('---------------');

// Q11. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

function sevenRandomNumbers() {
    const output = [];

    for (let i = 1; i <= 7; i++) {
        const randomNum = Math.floor(Math.random() * 10);
        if (!output.includes(randomNum)) {
            output.push(randomNum);
        } else {
            i--;
        }
    }

    return output;
}

console.log(sevenRandomNumbers());