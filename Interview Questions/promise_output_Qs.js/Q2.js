// Q2. Find the output 
console.log('start');

const p1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
});

p1.then(val => console.log(val));

console.log('end');

/*
start
1
3
end
2
*/

