// Arrow function vs regular function

//1. Syntax

function f1() {
    console.log('regular function');
}

const f1Arrow = () => {
    console.log('Arrow function');
}

// 2. Implicit 'return' keyword in arrow function if there is only one statement in the function body
const f2 = (a, b) => a + b;

// 3. arguments (not available in arrow function)
function f3() {
    console.log(arguments);
}

f3(1, 3, 5);

const f3Arrow = () => {
    console.log(arguments);
}

f3Arrow(1, 3, 5);

// 4. 

//4. this keyword 
const user = {
    'name': 'ashish',
    run: function () {
        console.log(this);
        console.log(`${this.name} is running`);

        function inner() {
            console.log(this);
        }

        inner();
    }
}

user.run();

console.log('--------------------------------------');

const animal = {
    'name': 'lion',
    hunt: function () {
        console.log(this);
        console.log(`${this.name} is hunting`);

        const inner = () => {
            console.log(this);
        }

        inner();
    }
}

animal.hunt();