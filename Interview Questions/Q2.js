// async, await

// Q1. What is the output?
// Expl: https://www.youtube.com/watch?v=j1ykOrC2f0A&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=2

let num = 0;

async function increment() {
    num += await 2;
    console.log(num);
}

increment();

num += 1;
console.log(num);

/*
1
2
*/