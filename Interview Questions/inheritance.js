// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         // console.log(this);
//         console.log(`${this.name} is eating`);
//     }
// }

// class Developer extends Person {
//     constructor(name, age, profile) {
//         super(name, age);
//         this.profile = profile;
//     }

//     code() {
//         // console.log(this);
//         console.log(`${this.name} is a senior ${this.profile} who is coding right now.`);
//     }

//     eat() {
//         super.eat();
//         console.log('Developer bhi eat kar raha hai');
//     }
// }

// const dev1 = new Developer('ashish', 25, 'frontend developer');
// dev1.code();
// dev1.eat();


/* How inheritance is done in case of constructor function */

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.eat = function () {
        console.log(`${this.name} is eating`);
    }
}

function Developer(name, age, profile) {
    Person.call(this, name, age); // inheriting from Person
    this.profile = profile;

    this.code = function () {
        console.log(`${this.name} is a senior ${this.profile} who is coding right now.`);
    }
}

const dev1 = new Developer('ashish', 25, 'frontend developer');
dev1.code();
dev1.eat();


// private properties in a class 

class Person {
    #name;

    constructor(name, age) {
        this.#name = name;
        this.age = age;
    }

    getPrivateName() {
        return this.#name;
    }
}

const p1 = new Person('ashish', 99);

console.log(p1);
console.log(p1.age);
console.log(p1.getPrivateName());
// console.log(p1.#name); //SyntaxError: Private field '#name' must be declared in an enclosing class
console.log(p1.name); // undefined


// Difference between __proto__ and prototype

// __proto__ is used to access an object's prototype directly, while prototype
//  is used to define the prototype for objects created with a constructor function.

// It’s important to note that prototype is a property of functions 
// (specifically, constructor functions), while __proto__ is a property of 
// objects themselves.


// How can you create an object without a prototype in JavaScript?

// 1.

const obj1 = Object.create(null);

obj1.name = 'ashish';
obj1.age = 99;

console.log(obj1);
console.log(obj1.__proto__);

// 2.
const user1 = {
    'username': 'jack',
    'password': 'abc@123',
}

Object.setPrototypeOf(user1, null);

console.log(user1);
console.log(user1.__proto__);

// 3.
const user2 = {
    'username': 'mark',
    'password': 'xyz@123',
    __proto__: null,
}

console.log(user2);
console.log(user2.__proto__);

// The hasOwnProperty() method of Object instances returns a boolean 
// indicating whether this object has the specified property as its own property (as opposed to inheriting it).

const monkey = {
    'name': 'bandar',
    eatBanana: function () {
        console.log(`${this.name} is eating banana`);
    }
}

const user3 = {
    'name': 'jack',
    'password': 'abc@123',
}

Object.setPrototypeOf(user3, monkey);

console.log(user3.hasOwnProperty('password')); // true
console.log(user3.hasOwnProperty('eatBanana')); // false (inherited from its prototype which is 'monkey' object)
console.log(user3.hasOwnProperty('toString')); // false (inherited from Object.protoype)


// Iterating over all the properties of the object which are not methods. 

const user = {
    'name': 'jack',
    'password': 'abc@123',

}

Object.defineProperty(user, 'greet', {
    value: function () {
        console.log('Hello bro');
    },
    enumerable: false,
})

for (const key in user) {
    console.log(`${key} : ${user[key]}`);
}




/***VIP: https://levelup.gitconnected.com/prototypal-inheritance-classical-inheritance-72138429a364 ***/
