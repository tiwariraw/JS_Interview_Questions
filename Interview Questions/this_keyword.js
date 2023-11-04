// Q1. What's the output?

const user = {
    firstName: 'Ashish',
    getName() {
        const firstName = 'Dhimesh';
        return this.firstName;
    },
}

console.log(user.getName()); // Ashish

console.log('---------------------');

// Q2. call,apply,bind
const person = {
    'name': 'Ashish',
    age: 99,
}

function greet(a, b, c) {
    console.log(this);
    console.log(`Namaste ${this.name}`);
    console.log(a, b, c);
}

// call
greet.call(person, 1, 3, 5);

console.log('*********************');

// apply
greet.apply(person, [1, 3, 5]);

console.log('*********************');

const bound = greet.bind(person, 1, 3, 5);
bound();

console.log('---------------------');

// Q3. Predict the output
function makeUser() {
    return {
        fullName: 'ashish',
        // ref: this,
        ref: this,
        display() {
            console.log(this);
        }
    }
}

const retObj = makeUser();
retObj.display(); // this inside display method points to the returned object
// console.log(retObj); // points to window object
console.log(retObj.ref.fullName); // undefined

console.log('---------------------');

// Q3. Predict the output

const user1 = {
    fullName: 'Ramesh Mewani',
    logMessage() {
        console.log(this.fullName);
    }
};

// setTimeout(user1.logMessage, 1000); // undefined after 1 sec

// setTimeout(user1.logMessage.call(user1), 1000); // fix1

// fix2

// setTimeout(function(){ 
//     user1.logMessage();
// }, 1000);

// when you wrap the user1.logMessage call inside an anonymous function 
// and pass that function to setTimeout, you create a closure. This closure
// retains the reference to the user1 object, and when the function is 
// executed inside the setTimeout, it correctly references user1 as the 
// context, and you see the expected output.

// Q4. Predict the output
const user2 = {
    fullName: 'Ketan Lal',

    greet() {
        console.log(`Hello, ${this.fullName}`);
    },

    farewell: () => {
        console.log(`Goodbye, ${this.fullName}`);
    }
}

user2.greet(); // Hello, Ketan Lal
user2.farewell(); // Goodbye, undefined

console.log('---------------------');

// Q5. Create an object calculator

/*
const calculator = {};
calculator.read(); // it should read two values from the user
calculator.sum(); // it should return the sum of those 2 values
calculator.mul(); // it should return the product of those 2 values
*/

const calculator = {
    read() {
        this.a = +prompt('Enter the first value: ', 0);

        this.b = +prompt('Enter the second value: ', 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
console.log('Sum is: ', calculator.sum());
console.log('Product is: ', calculator.mul());

console.log('---------------------');

// Q5. Predict the output

var length = 4;

function callback() {
    console.log(this.length); // what is logged?
}

const object = {
    length: 5,
    method(fn) {
        fn();
    },
};

object.method(callback);

// Ans: 4

console.log('---------------------');

// Q5. Predict the output
var length = 4;

function callback() {
    console.log(this.length); // what is logged?
}

const object1 = {
    length: 5,
    method(fn) {
        arguments[0]();
        // arguments: [callback, 1, 3]
        // this callback when executed will look for its lexical parent and in
        // this case it is the arguments (array like) (array is also an object in JS)
        // and it has a property 'length'.
    },
};

object1.method(callback, 1, 3);

console.log('---------------------');

// Q7. Implement calc

// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

const calc = {
    total: 0,

    add(val) {
        this.total += val;
        return this;
    },

    subtract(val) {
        this.total -= val;
        return this;
    },

    multiply(val) {
        this.total *= val;
        return this;
    },
}

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);