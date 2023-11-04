/* Closures questions */

// Q1. Find the output 

let count = 0;

(function printCount() {
    if (count === 0) {
        let count = 1; //shadowing
        console.log(count); //1
    }
    console.log(count); //0
})();

console.log('------------------');

// Q2. Write a function that would allow you to do this

// const addSix = createBase(6);
// console.log(addSix(10)); // returns 16
// console.log(addSix(21)); // returns 27

function createBase(x) {
    return function (y) {
        return x + y;
    }
}

const addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

console.log('------------------');

// *Q3. Time Optimization (hint: use closures)
/*
function find(index) {
    let output = [];

    for (let i = 0; i < 1000000; i++) {
        output[i] = i * i;
    }

    return output[index];
}

console.time('6');
console.log(find(6));
console.timeEnd('6');

console.time('50');
console.log(find(50));
console.timeEnd('50');
*/

function find() {
    let output = [];

    for (let i = 0; i < 1000000; i++) {
        output[i] = i * i;
    }

    // call the find function once which will return a function 
    //and this returned function forms a closure with its lexical environment
    // and contains the reference to 'output' array. So, we dont need to call
    // the find function again. Just call the returned function.
    return function (index) {
        return output[index];
    };
}

const returnedFn = find();

console.time('6');
console.log(returnedFn(6));
console.timeEnd('6');

console.time('50');
console.log(returnedFn(50));
console.timeEnd('50');

console.log('------------------');

// Q4. Use a closure to create a private counter.
function counter() {
    let count = 0;

    function increment(value) {
        count += value;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        getCount,
    }
}

const c1 = counter();
c1.increment(5);
console.log(c1.getCount());

console.log('------------------');

// Q5. What is a module pattern
// Ref: https://www.youtube.com/watch?v=e0u8z-9aAEw
// https://www.telerik.com/blogs/how-module-pattern-works-javascript#:~:text=The%20module%20pattern%20is%20a,being%20accessed%20from%20other%20scopes.

const myModule = (() => {
    function privateFn() {
        // do something
        console.log('private');
    }

    return {
        public: function () {
            // can call private method
            privateFn();
            console.log('public');
        }
    }
})();

myModule.public();
// myModule.private(); // TypeError: myModule.private is not a function

console.log('------------------');

// Q6. Make the below function run only once

/*
let channelName;
function likeTheVideo() {
    channelName = 'RawCodes';
    console.log('Subscribe to', channelName);
}

likeTheVideo();
*/

let channelName;

function likeTheVideo() {
    let callingCount = 0;

    return function () {
        if (callingCount > 0) {
            console.log('Already Subscribed');
        } else {
            channelName = 'RawCodes';
            console.log('Subscribe to', channelName);
            callingCount++;
        }
    }
}

const retFn = likeTheVideo();
retFn();
retFn();
retFn();

// Q7. once polyfill

// once function (present in lodash library)
//The _.once function is used in conditions where we want a particular function 
//to be executed only a single time. Even though we execute or call this function
//multiple times then also it will have no effect. The original function’s values 
//will only be returned each time it is called.

function once(cb, context) {
    let ran;

    return function () {
        if (cb) {
            ran = cb.apply(context || this, arguments);
            cb = null;
        }
        return ran;
    }
}

const greet = (a, b) => {
    console.log('Namaste', a, b);
}

const retFn1 = once(greet);

retFn1(1, 3);
retFn1(1, 3);

// Ref: https://www.geeksforgeeks.org/underscore-js-_-once-function/

// Q8. memoize polyfill

