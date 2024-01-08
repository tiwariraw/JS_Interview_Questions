// Closures: A function bundled together with 'reference' to its lexical environment or
// in simple words, a closure gives you access to an outer function's scope from an inner function.

// Q1.
function outer() {
    let num = 5;

    function inner() {
        console.log(num); // 10 (inner is a closure and it remembers the 'reference' of outer function variables)
    }

    num = 10;

    return inner;
}

const returnedFn = outer();
returnedFn();

console.log('----------------------------');

// Q2. 
for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}

// Solution
// 1. use let (as it has block scope)
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}

// 2. use a function to wrap
for (var i = 1; i <= 5; i++) {
    function wrapper(i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    wrapper(i);
}

// Q3. How data hiding and encapsulation is achieved with closures
let count = 0;

function incrementCount() {
    count++;
}

// Sol:
function counterFn() {
    let count1 = 0;

    function incrementCount() {
        count++;
        console.log(count);
    }

    return incrementCount;
}

// console.log(count1); // count1 is inaccessible now
const res = counterFn();
res(); // 1
res(); // 2

// Q4.
