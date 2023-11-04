// Q1. Find the output 
console.log('start');

const p1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
});

p1.then(val => console.log(val));

console.log('end');

/*
start
1
end
2
*/

// Expl: the synchronous code inside Promise constructor is executed before
// any asynchronous code