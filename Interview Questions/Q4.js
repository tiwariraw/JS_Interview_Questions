// ASI(Automatic Semicolon Insertion, sqaure bracket syntax, hoisting)

// Q1. What happens when you run this code? Why?
// How would you fix it?

// Expl: https://www.youtube.com/watch?v=MF-vhTCHHXA&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=5

/*
const a = {
    a: 123,
}  ⬅️(no semicolon here)

[a].forEach(function (x) {
    console.log(x);
})
*/

// We get a  ReferenceError: Cannot access 'a' before initialization.

// Sol: ASI

const a = {
    a: 123,
};

[a].forEach(function (x) {
    console.log(x);
})

