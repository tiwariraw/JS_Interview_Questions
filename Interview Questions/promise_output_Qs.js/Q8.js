// Q. promRecurse function takes an array of promises. Write this function to
// resolve promises recursively

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 resolved value');
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 resolved value');
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3 resolved value');
    }, 3000);
});

function promRecurse(promises) {
    if (promises.length === 0) return;

    // array shift method removes and returns the first element from the array
    const p = promises.shift();
    p
        .then(val => {
            console.log(val);
        })
        .catch(err => {
            console.log(err);
        });

    promRecurse(promises);
}

promRecurse([p1, p2, p3]);