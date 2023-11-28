// Q1. Develop a small script which generate array of 5 random numbers and the numbers must be unique

const output = [];

for (let i = 1; i <= 5; i++) {
    const rand = Math.floor(Math.random() * 10);

    if (!output.includes(rand)) {
        output.push(rand);
    } else {
        i--;
    }

}

console.log(output);


// Q2. Develop a small script which generate a six characters random id:
// e.g. 5j2khz

const alphanumeric = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'];

let otp = '';

for (let i = 1; i <= 6; i++) {
    const uniqueChar = alphanumeric[Math.floor(Math.random() * alphanumeric.length)]
    if (!otp.includes(uniqueChar)) {
        otp += uniqueChar;
    }
}

console.log(otp);


// Q3. Develop a small script which generate any number of characters random id:
// fe3jo1gl124g
// xkqci4utda1lmbelpkm03rba

const alphanumeric2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'];

function makeRandomId() {
    let otp = '';

    let n = Math.floor(Math.random() * 100);

    for (let i = 1; i <= n; i++) {
        const uniqueChar = alphanumeric2[Math.floor(Math.random() * alphanumeric2.length)]
        if (!otp.includes(uniqueChar)) {
            otp += uniqueChar;
        }
    }

    return otp;
}

console.log(makeRandomId());
console.log(makeRandomId());
console.log(makeRandomId());


// Q4. Write a script which generates a random hexadecimal number.
// '#ee33df'

const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function makeRandomId() {
    let hexColor = '#';

    for (let i = 1; i <= 6; i++) {
        hexColor += hexDigits[Math.floor(Math.random() * hexDigits.length)]

    }

    return hexColor;
}

console.log(makeRandomId());
console.log(makeRandomId());


// Q5. Write a script which generates a random rgb color number.
// rgb(240,180,80)

function makeRGB() {
    const output = [];

    for (let i = 1; i <= 3; i++) {
        output.push(Math.floor(Math.random() * 256));
    }

    return `rgb(${output.join()})`;
}

console.log(makeRGB());
console.log(makeRGB());


