// Q3. Find the output 
console.log('start');

const p1 = new Promise((resolve, reject) => {
    console.log(1);
    console.log(3);
});

p1.then(val => console.log(val));

console.log('end');

/*
start
1
3
end
*/


// Expl: If there is no resolve or reject method inside the Promise constructor
// , JS Engine will not enter the then handler method attached to thhis promise
// object
