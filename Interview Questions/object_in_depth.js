// https://www.youtube.com/watch?v=jss2rL9kv6s&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=47 (Hitesh)
// https://stackoverflow.com/questions/14984533/what-are-the-benefits-of-making-properties-non-enumerable
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

// Can we make an entire object in JavaScript non enumerable? <--- (chatgpt)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// console.log(Object.getOwnPropertyDescriptors(Math));

const user = {
    'name': 'Ashish',
    'email': 'demo@gmail.com',
    'password': 'abc@123',
}

Object.defineProperty(user, 'age', {
    value: 25,
    writable: false,
    enumerable: false
})

console.log(user);

user.age = 78; // won't work because this property is non writable
console.log(user);

console.log('------------------');

// Since, the 'name' property of the user object is marked as non-enumerable. So
// when iterating over this object, the name property won't be considered. 

Object.defineProperty(user, 'name', {
    enumerable: false,
});

for (const key in user) {
    console.log(`${key} : ${user[key]}`);
}

console.log('------------------');