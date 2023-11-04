/* What is currying? */

// Named after Haskel B. Curry
// Concept from lambda calculus 

// Currying in JavaScript transforms a function with multiple arguments into
// a nested series of functions, each taking a single argument.
//  Currying helps you avoid passing the same variable multiple times,
//  and it helps you create a higher order function.

// Curried functions are constructed by chaining closures and by defining 
// and immediately returning their inner functions simultaneously.

// Imp cond for currying: A curried function only takes one parameter at a time

/* Whyshould we use currying? */
// 1. TO avoid passing same variables again and again
// 2. To create higher order functions


// Ref: https://builtin.com/software-engineering-perspectives/currying-javascript
// https://www.youtube.com/watch?v=k5TC9i5HonI&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=5

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(1, 2, 3));

function sumCurrying(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(sumCurrying(1)(2)(3));

console.log('--------------');

// Q1. Create a curried function evaluate as per given requirement below
/*
  evaluate("sum")(4)(2) => 6
  evaluate("subtract")(4)(2) => 2
  evaluate("multiply")(4)(2) => 8
  evaluate("divide")(4)(2) => 2
*/

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === 'sum') {
                return a + b;
            } else if (operation === 'subtract') {
                return a - b;
            } else if (operation === 'multiply') {
                return a * b;
            } else if (operation === 'divide') {
                return a / b;
            } else {
                return 'Invalid operation';
            }
        }
    }
}

console.log(evaluate("sum")(4)(2));
console.log(evaluate("subtract")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));

console.log('--------------');

// Now we can have reusable functions, eg. multiply
const mul = evaluate("multiply");
console.log(mul(3)(5)); // 15
console.log(mul(7)(2)); // 14

console.log('--------------');

// Q2. Infinite currying -> sum(1)(2)(3)...(n)

function add(a) {
    return function (b) {
        if (b) {
            return add(a + b);
        } else {
            return a;
        }
    }
}

console.log(add(1)(2)(3)());
console.log(add(1)(2)(3)(4)());

console.log('--------------');

// Q3. DOM manipulation

// <div id='root'></div>

function updateElementContent(id) {
    return function (text) {
        document.getElementById(id).textContent = text;
    }
}

const el = updateElementContent('root');
el('Namaste Ashish');
el('Pranam Poojaji');

// Q4. Write a function 'curry' which converts a normal function into a curried function.
// f1(1,2,3) => f1(1)(2)(3)