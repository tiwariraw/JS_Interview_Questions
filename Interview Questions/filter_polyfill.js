// filter (an array method)

const nums = [1, 3, 5, 7, 9];
const resArr = nums.filter((num, i, arr) => {
    return num > 3;
})
console.log(resArr);
console.log('-----------------');

// filter method polyfill

Array.prototype.myFilter = function (cb) {
    const output = [];

    for (const el of this) {
        if (cb(el)) {
            output.push(el);
        }
    }

    return output;
}

function gt3(el) {
    return el > 3;
}

const resArr1 = nums.myFilter(gt3);

console.log(resArr1);