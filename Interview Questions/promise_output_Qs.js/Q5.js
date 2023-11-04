// Q5. Find the output 

function job() {
    return new Promise((resolve, reject) => {
        reject();
    });
}

const p1 = job();

p1
    .then(function () {
        console.log('success 1');
    })
    .then(function () {
        console.log('success 2');
    })
    .then(function () {
        console.log('success 3');
    })
    .catch(function () {
        console.log('Error 1');
    })
    .then(function () {
        console.log('success 4');
    })

/*
Error 1
success 4
*/