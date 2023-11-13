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