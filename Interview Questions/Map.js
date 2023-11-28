// an empty map object
const m1 = new Map();

// map object having properties
const m2 = new Map([['name', 'ashish'], ['age', '25']]);

const obj = { 'key1': 'value1' };
m1.set('vehicle', 'Audi');
m1.set('info', { 'name': 'Raman', 'age': 99 });
m1.set(obj, 'wow');

console.log(m1);

console.log('----------------');

console.log(m1.get('vehicle'));
console.log(m1.get(obj));

console.log('----------------');

console.log(m1.has('vehicle'));
console.log(m1.has('info'));
console.log(m1.has(obj));

console.log('----------------');

// You can get the number of elements in a Map using the 'size' property.
console.log(m1.size);

console.log('----------------');

m1.delete(obj);
console.log(m1);

console.log('----------------');

console.log(m1.keys());

console.log('----------------');

console.log(m1.values());

// m1.clear();
// console.log(m1);

console.log('----------------');

// iterating over map object

for (const e of m1.keys()) {
    console.log(e);
}

console.log('----------------');

for (const e of m1.values()) {
    console.log(e);
}

console.log('----------------');

for (const [key, value] of m1) {
    console.log(key, ' - ', value);
}

