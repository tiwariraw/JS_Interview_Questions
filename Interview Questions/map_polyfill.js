// Ref: Roadsidecoder "JavaScript Interview Questions" youtube playlist

// map (an array method)

const nums = [1, 3, 5, 7, 9];
const resArr = nums.map((num, i, arr) => {
    return num * 2;
})
console.log(resArr);
console.log('-----------------');

// map method polyfill

Array.prototype.myMap = function (cb) {
    const output = [];

    // for (const el of this) {
    //     output.push(cb(el));
    // }

    // OR

    for (let i = 0; i < this.length; i++) {
        output.push(cb(this[i], i, this));
    }

    return output;
}

function square(el, i, arr) {
    return el ** 2;
}

const resArr1 = nums.myMap(square);

console.log(resArr1);