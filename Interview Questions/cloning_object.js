// How to copy / clone an object?

const user = {
    'name': 'Ashish',
    'age': 99,
    address: {
        city: 'Varanasi',
        state: 'UP'
    }
}

// M1 => Object.assign does a shallow copy
const shallowCopy1 = Object.assign({}, user);
shallowCopy1.name = 'Dhimesh';
shallowCopy1.address.city = 'hawai';

console.log(user);
console.log(shallowCopy1);

// M2 => spread operator does a shallow copy
const shallowCopy2 = { ...user };
shallowCopy2.name = 'Dhimesh';
shallowCopy2.address.city = 'hawai';

console.log(user);
console.log(shallowCopy2);

// M3 Deep copy
const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.name = 'Dhimesh';
deepCopy.address.city = 'Hawai';

console.log(user);
console.log(deepCopy);

// Caution for M3: JSON.stringify and JSON.parse will only work on
// JSON safe objects. If the objects contain functions, symbols or
// dates that won’t create a deep clone.