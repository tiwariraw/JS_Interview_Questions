//  Q1. Output based question

const person = {
    fullName: 'Ashish Tiwari',
}

function greet(message) {
    return `${message} ${this.fullName}`;
}

console.log(greet.call(person, 'Namaste')); // Namaste Ashish Tiwari
console.log(greet.bind(person, 'Hola')); // bind returns a function 

console.log('-----------------');

// Q2. Output based question

const age = 10;

const person1 = {
    fullName: 'Ashish Tiwari',
    age: 20,
    getAge: function () {
        return this.age;
    }
}

const person2 = { age: 24, };

console.log(person1.getAge.call(person2)); // 24

console.log('-----------------');

// Q3. Output based question

var status = "😁";

/*
setTimeout(() => {
    const status = "💕";

    const data = {
        status: "🥝",

        getStatus() {
            return this.status;
        }
    }

    console.log(data.getStatus()); // 🥝
    console.log(data.getStatus.call(this)); // 😁 (here, this refers to window object)
    // Ref: call,apply,bind video (Roadside code JS Interview playlist): 8:00 to 9:52
}, 0);
*/

console.log('-----------------');

// Q4. call printAnimals function such that it prints all objects in animals array

const animals = [
    { species: 'Lion', name: 'King', },
    { species: 'Whale', name: 'Queen', }
];

function printAnimals(i) {
    // console.log(this);

    this.print = function () {
        console.log(`${this.species}: ${this.name}, i = ${i}`);
    }

    this.print();
}

for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i);
}

console.log('-----------------');

// Q5. Append an array to another array using apply method
const arr1 = ["chole", "bhature"];
const arr2 = [1, 3, 5, 7, 9];

arr1.push.apply(arr1, arr2)

console.log(arr1);

console.log('-----------------');

// Q6. Find min/max from an array using apply

const nums = [1, 3, 9, 7, 5];
console.log(Math.max.apply(null, nums));
console.log(Math.min.apply(null, nums));

console.log('-----------------');

// Q7. 
function f1() {
    console.log(this); //?
}

let user = {
    g: f1.bind(null),
    // null means we aare not providing any context for f1 function, there
}

user.g();

console.log('-----------------');

// Ans: ▶window object

// IMP Q8. bind chaining

function f2() {
    console.log(this.name);
}

f2 = f2.bind({ 'name': 'Dhimesh' }).bind({ name: 'Pritam' });

f2(); // Dhimesh

// Expl: A function when once bound by using 'bind' keyword can not be rebound

console.log('-----------------');

// Q9. Fix the line 152  to make code work properly

function checkPassword(success, failed) {
    let password = prompt("Password: ", "");
    if (password === 'tiwariraw9') {
        success();
    } else {
        failed();
    }
}

let user1 = {
    name: 'Ashish Tiwari',

    loginSuccessful() {
        console.log(`${this.name} logged in`);
    },

    loginFailed() {
        console.log(`${this.name} failed to log in`);
    },
}

checkPassword(user1.loginSuccessful, user1.loginFailed);

// Soln:
// checkPassword(user1.loginSuccessful.bind(user1), user1.loginFailed.bind(user1));

console.log('-----------------');

// Q10. write the checkPassword function call

function checkPassword1(ok, fail) {
    const password = prompt('Password: ', '');
    if (password === 'abc123') {
        ok();
    } else {
        fail();
    }
}

const user2 = {
    'fullName': 'Ashish Tiwari',

    login(result) {
        console.log(this.fullName, result ? 'login successful' : 'login failed');
    }
}

// checkPassword1(?,?);
checkPassword1(user2.login.bind(user2, true), user2.login.bind(user2, false));

console.log('-----------------');

// VIMP Q11. Explicit binding with arrow function

const age1 = 10;

var person3 = {
    'fullName': 'Ashish Tiwari',

    age1: 20,

    getAgeArrow: () => console.log(this.age1),

    getAge: function () {
        console.log(this.age1);
    }
}

var person4 = { age: 24 };

person3.getArrow.call(person4); //? --> Ans: 24
person3.getAgeArrow.call(person4); //? --> Ans: undefined

// Expl: We can't manipulate the context of an arrow function using 
// call, apply, and bind methods

console.log('-----------------');