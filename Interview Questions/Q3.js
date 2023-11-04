// Q1. Determine if the function received the number of parrameters it expected.
// Expl: https://www.youtube.com/watch?v=WyxU9MzUwOw&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=4

const f1 = function (a, b) {
    // console.log(arguments);
    // console.log(f1.length); // number of parameters defined when defining the function

    if (a !== undefined && b != undefined && arguments.length === f1.length) {
        console.log('we have a match');
    } else {
        console.log('we do not have a match');
    }
}

f1(1);
f1(1, 2);
f1(1, 2, 3);