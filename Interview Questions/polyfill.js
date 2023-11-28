/* Polyfill Questions */
// Ref: https://www.youtube.com/watch?v=CJUAL18dbKs

// Q1. forEach polyfill
const nums = [1, 3, 5, 7, 9];

// nums.forEach(function (el) {
//     console.log(el ** 2);
// })

Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

function double(el, index, arr) {
    console.log(el ** 2);
}

nums.myForEach(double);

console.log('--------------------------');

// Q2. map method polyfill

Array.prototype.myMap = function (cb) {
    const output = [];

    // for (const el of this) {
    //     output.push(cb(el));
    // }

    // OR

    for (let i = 0; i < this.length; i++) {
        output.push(cb(this[i], i, this));
    }

    return output;
}

function square(el, i, arr) {
    return el ** 2;
}

const resArr1 = nums.myMap(square);

console.log(resArr1);

console.log('--------------------------');

// Q3. filter method polyfill

Array.prototype.myFilter = function (cb) {
    const output = [];

    for (const el of this) {
        if (cb(el)) {
            output.push(el);
        }
    }

    return output;
}

function gt3(el) {
    return el > 3;
}

const resArr2 = nums.myFilter(gt3);

console.log(resArr2);

console.log('--------------------------');

// Q4. reduce method polyfill

Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue;

    for (let i = 0; i < this.length; i++) {
        if (acc !== undefined) {
            acc = cb(acc, this[i], i, this);
            // console.log(acc);
        } else {
            acc = this[i];
        }
    }

    return acc;
}

function sum(accumulator, currentValue, index, arr) {
    return accumulator + currentValue;
}

const res1 = nums.myReduce(sum, 0);

console.log(res1);

console.log('--------------------------');

//Q5. call polyfill

// const user = {
//     'name': 'Ashish Tiwari'
// }

// function f1(param1) {
//     console.log(this);
//     console.log(param1);
// }

// f1.call(user, 101);

const user = {
    'name': 'Ashish Tiwari'
}

function f1(param1) {
    console.log(this);
    console.log(param1);
}

Function.prototype.myCall = function (context, ...args) {
    // here, 'this' refers to the function on which call is invoked

    if (typeof this !== 'function') {
        throw new Error(this, 'is  not callable');
    }

    // context object me ye function(this) jispe call invoke kiya gaya hai,
    // as a method add kardo.

    context.fn = this;
    context.fn(...args);

    /*
   What line 136 and 137 means (See above how we are modifying the user object)
   const user = {
    'name': 'Ashish Tiwari',
    fn: function(param1){
        console.log(this);
        console.log(param1)
    }
   }
   */
}

f1.myCall(user, 101);

console.log('--------------------------');

//Q6. apply polyfill

// const user = {
//     'name': 'Ashish Tiwari'
// }

// function f1(param1) {
//     console.log(this);
//     console.log(param1);
// }

// f1.apply(user, [101,102,103]);

const user1 = {
    'name': 'Ashish Tiwari'
}

function f2(param1, param2, param3) {
    console.log(this);
    console.log(param1, param2, param3);
}

Function.prototype.myApply = function (context, args) {
    // here, 'this' refers to the function on which call is invoked

    if (Array.isArray(args)) {
        // throw new Error(args, 'should be an array');
        throw new Error('CreateListFromArrayLike called on non-object');
    }

    if (typeof this !== 'function') {
        throw new Error(this, 'is  not callable');
    }

    // context object me ye function(this) jispe call invoke kiya gaya hai,
    // as a method add kardo.
    context.fn = this;
    context.fn(...args);

    /*
   What line 128 and 129 means (See above how we are modifying the user object)
   const user = {
    'name': 'Ashish Tiwari',
    fn: function(param1,param2,param3){
        console.log(this);
        console.log(param1,param2,param3);
    }
   }
   */
}

f2.myApply(user1, [101, 102, 103]);

console.log('--------------------------');

//Q7. bind polyfill

// const user2 = {
//     'name': 'Ashish Tiwari'
// }

// function f3(param1) {
//     console.log(this);
//     console.log(param1);
// }

// const retFn = f1.bind(user, 101);
// retFn();

const user2 = {
    'name': 'Ashish Tiwari'
}

function f3(param1) {
    console.log(this);
    console.log(param1);
}

Function.prototype.myBind = function (context, ...args) {
    // here, 'this' refers to the function on which call is invoked

    if (typeof this !== 'function') {
        throw new Error(this, 'is  not callable');
    }


    context.fn = this;

    return function (...newArgs) {
        return context.fn(...args, ...newArgs);
    }

}

const retFn = f3.myBind(user2, 101);
retFn();

// Q7. Promise polyfill


// Q8. curry polyfill


// Q9. setTimeout polyfill


// Q10. setInterval polyfill


// Q11. debounce polyfill


// Q12. throttle polyfill

