// Q1. o/p

const f1 = (function (x) {
    delete x;
    console.log(x);
})(5);

// Expl: 'delete' keyword is used to delete property from an object
// and not a variables value

console.log('---------------------');

// Q2. 

const user = {
    'name': 'ashish',
    'age': 99,
}

delete user.name; // or delete user['name'];
console.log(user); // {age: 99}

console.log('---------------------');

// Q3. adding dynamic keys

const key1 = "fullName";
const value1 = "Ashish Tiwari";

// Expected o/p: {fullName: 'Ashish Tiwari'}

const person = {
    [key1]: value1,
}

console.log(person);

console.log('---------------------');

// Q4. What's the output

const obj = {
    a: 'one',
    b: 'two',
    a: 'three',
}

console.log(obj); // {a: 'three', b: 'two'}

console.log('---------------------');

// Q5. Create a function multiplyNumericByTwo(obj) that multiplies all numeric property
// values of nums by 2.

const nums = {
    a: 100.5,
    b: 200,
    'title': "My numbers",
}

const multiplyNumericByTwo = (obj) => {
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2;
        }
    }

    return obj;
}

const res = multiplyNumericByTwo(nums);
console.log(res);

console.log('---------------------');

// VIMP Q6. What's the output

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a);

console.log(a[b]); // 456

console.log('---------------------');

//Q7. What's the output

console.log([..."Ashish"]);

console.log('---------------------');

// Q8. What's the output

const user1 = { 'name': 'John', age: 30 };
const admin = { admin: true, ...user1 };

console.log(admin);

console.log('---------------------');

// Q9. What's the output

const settings = {
    username: 'Ashish',
    level: 15,
    health: 80,
}

const data = JSON.stringify(settings, ['level', 'health']);

console.log(data); // {"level":15,"health":80}

// Ref: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

console.log('---------------------');

// Q10. What's the output

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
}

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // undefined

console.log('---------------------');

// Q11. What's the output (nested object destructuring)

const user2 = {
    'name': 'ashish',
    'age': 99,
    'fullName': {
        'firstName': 'Ashish',
        'lastName': 'Tiwari',
    }
}

const { name, age, fullName: { firstName: fn, lastName: ln } } = user2;

console.log(fn, ln);

console.log('---------------------');

// Q12. What's the output

const obj1 = { 'name': 'ashish' };
let d;

d = c; // only the reference of c is passed to d

c.name = 'Lal Badshah';

console.log(d.name);

console.log('---------------------');

// Q13. What's the output

console.log({ 'name': 'ashish' } == { 'name': 'ashish' }); // false
console.log({ 'name': 'ashish' } === { 'name': 'ashish' }); // false

// Expl: JS compares objects by reference, not by value.

console.log('---------------------');

// IMP Q14. What's the output

let person1 = { 'name': 'Ashish' };
const members = [person1]; // we are creating an array and its first element is person1 object
person1 = null;

console.log(members);[{ 'name': 'Ashish' }];

// Expl: ye object ({ 'name': 'Ashish' }) to hai hi memory me, bas person1 ab 
// isko nahi balki null ko point kar raha hai.

// But if we do like person1.name = null, then it will affect the members array too.

console.log('---------------------');

// Q15. What's the output

const value = { number: 10 };

const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
}

multiply(); // 20
multiply(); // 20
multiply(value); // 20
multiply(value); // 40

console.log('---------------------');

// Q15. What's the output

function changeAgeAndReference(person) {
    person.age = 25;

    person = {
        name: 'John',
        age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // {name: 'Alex', age: 25}
console.log(personObj2); // {name: 'John', age: 50}


console.log('---------------------');