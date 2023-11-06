/*************** Object ***************/

// Object.assign()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


const obj1 = {
    name: 'ashish',
    age: 25,
}

const obj2 = {
    'vehicle': 'Audi',
    'price': 1000,
}

// add obj2 properties to obj1

const retObj1 = Object.assign(obj1, obj2);

console.log(retObj1);
console.log(obj1);
console.log(obj2);

// Another way to do the above
/*
for (const key in obj2) {
    obj1[key] = obj2[key];
}

console.log(obj1);
console.log(obj2);
*/

console.log('-----------');

// merge obj1, obj2 into a single new object

const obj3 = {
    a: 1,
    b: 2,
}

const obj4 = {
    c: 3,
    d: 4,
}

const retObj2 = Object.assign({}, obj3, obj4);
console.log(retObj2);
// obj3 and obj4 are not modified
console.log(obj3);
console.log(obj4);

console.log('-----------');

let user = {
    name: 'ashish',
    age: 25,
}

console.log('age' in user);
console.log(user.hasOwnProperty('age'));