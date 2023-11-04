// reduce (an array method)

const nums = [1, 3, 5, 7, 9];
const res = nums.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0)
console.log(res);
console.log('-----------------');

// reduce method polyfill

Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue;

    for (let i = 0; i < this.length; i++) {
        if (acc !== undefined) {
            acc = cb(acc, this[i], i, this);
            // console.log(acc);
        } else {
            acc = this[i];
        }
    }

    return acc;
}

function sum(accumulator, currentValue, index, arr) {
    return accumulator + currentValue;
}

const res1 = nums.myReduce(sum, 0);

console.log(res1);