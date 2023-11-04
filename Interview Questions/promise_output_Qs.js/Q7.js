// Q6. Find the output 

function job(state) {
    return new Promise((resolve, reject) => {
        if (state) {
            resolve('success');
        } else {
            reject(new Error('An error occured'));
        }
    });
}

const p1 = job(true);

p1
    .then(function (data) {
        console.log(data);

        return job(true);
    })
    .then(function (data) {
        // since if cond is true, an erorr is thrown and this becomes a rejected 
        // promise and it will go to catch handler and the line return job(true) will not be executed
        if (data !== 'victory') {
            throw 'Defeat';
        }

        return job(true);
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);

        return job(false);
    })
    .then(function (data) {
        console.log(data);

        return job(true);
    })
    .catch(function (err) {
        console.log(err);

        return 'Error caught';
    })
    .then(function (data) {
        console.log(data);

        // this is a resolved promise only, it is there to confuse us
        return new Error('test');
    })
    .then(function (data) {
        console.log("Success: ", data.message);
    })
    .catch(function (err) {
        console.log("Error: ", err.message);
    })

/*
success
Defeat
Error: An error occured
Error Caught
Success: test
*/

// Whenever we return a new Error instance from a then handler, it is treated as
// a resolved promise.

const f1 = () => {
    return new Promise((resolve, reject) => {
        resolve('p1 resolved value');
    });
}

f1()
    .then(function (val) {
        console.log(val);

        return new Error('An error occured');
    })
    .then(function (val) {
        console.log(val);
    })