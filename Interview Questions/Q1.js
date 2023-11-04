// setTimeout

//Q1. Predict the output
console.log('a');

let timmy = setTimeout(() => {
    console.log('b');
}, 1);

let timothy = setTimeout(() => {
    console.log('c');
}, 10);

let timer = setTimeout(() => {
    console.log('d');
}, 0);

console.log('e');

/*
a
e
b
d
c
*/

// Q2.

console.log('a');

let t1 = setTimeout(() => {
    console.log('b');
}, 0);

let t2 = setTimeout(() => {
    console.log('c');
}, 0);

console.log('e');

/*
a
e
b
c
*/

// Expl: If the delay is same, then the order will be preserved