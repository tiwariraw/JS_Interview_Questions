// Implement Caching/Memoization in JavaScript

// Memoization is an optimization technique that can be used to reduce time-consuming
// calculations by saving previous input to something called cache and returning
// the result from it.

const calc = (n) => {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

const memoize = (cb) => {

    const cache = {};

    return function (...args) {
        let n = args[0];

        if (n in cache) {
            console.log('from cache');
            // console.log(cache);
            return cache[n];
        } else {
            console.log('calculating first time');
            const res = cb(n);
            cache[n] = res;
            // console.log(cache);
            return res;
        }
    }
}

const efficient = memoize(calc);

console.time('memoize');
console.log(efficient(1000000000));
console.timeEnd('memoize');

console.log('---------------------');

console.time('memoize1');
console.log(efficient(1000000000));
console.timeEnd('memoize1');

// References:
// https://www.youtube.com/watch?v=oa0FJyHMuqg
// https://www.freecodecamp.org/news/memoization-in-javascript-and-react/