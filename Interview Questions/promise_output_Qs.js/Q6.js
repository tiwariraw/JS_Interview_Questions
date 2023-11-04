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

        return job(false);
    })
    .catch(function (err) {
        console.log(err.message);


        // don't think that it's an error, it's just a string and it is the resolved value
        return 'Error Caught';
    })
    .then(function (data) {
        console.log(data);

        return job(true);
    })
    .catch(function (err) {
        console.log(err.message);
    })

/*
success
An error occured
Error caught
*/