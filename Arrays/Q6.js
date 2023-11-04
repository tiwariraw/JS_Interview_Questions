// Q6. Remove duplicates from sorted array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates such that each unique element appears only once.
// The relative order of the elements should be kept the same. Then return the
// number of unique elements in num.

// Inp: [1,1,2] => Output: 2, [1,2]
// Inp: [0,0,1,1,1,2,2,3,3,4] => Output: 5,[0,1,2,3,4]

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// M1
/*
const removeDuplicates = (arr) => {
    arr = [...new Set(arr)];
    return [arr.length, arr];
}

const [len, arr] = removeDuplicates(nums);
console.log(len, arr);
*/

// M2
/*
const removeDuplicates = (arr) => {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (!output.includes(arr[i])) {
            output.push(arr[i]);
        }
    }
    return [output.length, output];
}

const [len, arr] = removeDuplicates(nums);
console.log(len, arr);
*/