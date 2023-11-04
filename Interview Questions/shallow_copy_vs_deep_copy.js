//In JavaScript, "shallow copy" and "deep copy" are two different approaches
// to copying objects and arrays.

// A shallow copy creates a new object or array
// and copies the values from the original object or array to the new one.
// However, if the original object contains nested objects or arrays, the
// shallow copy will not create new copies of those nested elements but
// will instead maintain references to them. This means changes made to
// the nested elements in the shallow copy will affect the original
// object and vice versa.

const originalObject = {
    name: 'Ashish',
    age: 30,
    address: {
        city: 'Varanasi',
        state: 'Uttar Pradesh'
    }
};

// Creating a shallow copy using the spread operator

const shallowCopy = { ...originalObject };

// Modifying the shallow copy

shallowCopy.name = 'Dhimesh';
shallowCopy.address.city = 'Bengaluru';

console.log(originalObject); // {name: 'Ashish', age: 30, address: {city: 'Bengaluru', state: 'Uttar Pradesh'}}
console.log(shallowCopy); // {name: 'Dhimesh', age: 30, address: {city: 'Bengaluru', state: 'Uttar Pradesh'}}

// Expl:  the name property change is isolated to the shallow copy, 
// but changes to the nested object address affect the original object.

const originalObject1 = {
    name: 'Ashish',
    age: 30,
    address: {
        city: 'Varanasi',
        state: 'Uttar Pradesh'
    }
};

// Creating a deep copy using JSON.stringify and JSON.parse
const deepCopy = JSON.parse(JSON.stringify(originalObject1));

// Modify the deep copy
deepCopy.name = 'Dhimesh';
deepCopy.address.city = 'Bengaluru';

console.log(originalObject1);
console.log(deepCopy);

// As you can see, changes to the deep copy do not affect the original object,
// and they are completely isolated from each other.

// In summary, a shallow copy preserves references to nested objects and
// arrays, while a deep copy creates fully independent copies of all nested elements.