/***************  Number ***************/

// 1.
const num1 = 100.3579;

// num.toString() -> returns a string representation of the object
console.log(num1.toString(), typeof num1.toString());

// num.toFixed() -> Returns a string representing a number in fixed-point notation.
console.log(num1.toFixed(2)); // 100.36
console.log(num1.toFixed(3)); // 100.358
console.log(num1); // 100.3579

console.log('------------');

// 2.

const num2 = 123.8945;

// The toPrecision() method of Number values returns a string representing this number to the specified precision.
// It takes an optional argument 'precision' specifying the number of significant digits 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision

console.log(num2.toPrecision(2)); // 1.2e+2
console.log(num2.toPrecision(3)); // 124
console.log(num2.toPrecision(4)); // 123.9
console.log(num2.toPrecision(5)); // 123.89

console.log('------------');

// 3.
const num3 = 1000000;
console.log(num3.toLocaleString()); // 1,000,000
console.log(num3.toLocaleString('en-IN')); // 10,00,000

console.log('------------');

// 4.

// Number properties
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log('------------');

// Number methods

console.log(Number.isFinite(123456789)); // true
console.log(Number.isFinite(Number.POSITIVE_INFINITY)); //false

console.log('------------');

console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(123.456)); //false

console.log('------------');

console.log(Number.isSafeInteger(1234567891234567)); //true
console.log(Number.isSafeInteger(12345678912345678)); //false
console.log('------------');

console.log(Number.isNaN(123)); // false
console.log(Number.isNaN('ashish123')); // false
console.log(Number.isNaN(5 / 'ashish')); // true
console.log('------------');

console.log(Number.parseInt('123ashish')); 123
console.log(Number.parseInt('ashish123')); // NaN
console.log('------------');

console.log(Number.parseFloat('123.58')); // 123.58
console.log(Number.parseFloat('123.58ashish')); // 123.58
console.log(Number.parseFloat('ashish123.58')); // NaN

console.log('------------');


/***************  Math ***************/

console.log(Math.abs(-4)); // 4
console.log(Math.abs(-4.58)); // 4.58
console.log(Math.abs(4)); // 4

console.log('----------');

console.log(Math.round(4.6)); // 5
console.log(Math.round(4.658)); // 5

console.log('----------');

console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.6)); // 4

console.log('----------');

console.log(Math.min(5, 8, 1, 7, 9)); // 1
console.log(Math.max(5, 8, 1, 7, 9)); // 9
console.log(Math.min([5, 8, 1, 7, 9])); // NaN

console.log('----------');


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Math.random() static method returns a floating-point, pseudo random number between 0 (inclusive),  and 1 (exclusive)
// Math.random() always returns a number lower than 1.

console.log(Math.random()); // 0.32084650609339005

// Math.random() used with Math.floor() can be used to return random integers.

console.log(Math.floor(Math.random() * 10)); // Returns a random integer from 0 to 9
console.log(Math.floor((Math.random() * 10) + 1)); // Returns a random integer from 1 to 10

console.log(Math.floor(Math.random() * 11)); // Returns a random integer from 0 to 10

console.log(Math.floor(Math.random() * 100)); // Returns a random integer from 0 to 99
console.log(Math.floor((Math.random() * 100) + 1)); // Returns a random integer from 1 to 100

console.log('----------');

// Q1. Create a function getRandomInteger which accepts two arguments i.e. min and max
// and returns a random number between them.

const getRandomInteger = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

console.log(getRandomInteger(1, 100));

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range