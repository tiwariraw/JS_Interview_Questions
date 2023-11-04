// Q4. Find the output 
console.log('start');

const f1 = () => {
    return new Promise((resolve, reject) => {
        console.log(1);
        resolve('success')
    })
}

console.log('middle');

f1().then(val => console.log(val))

console.log('end');

/*
start
middle
1
end
success
*/

