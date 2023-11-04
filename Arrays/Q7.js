// Q6. Remove duplicates from sorted array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same. Then return the
// number of unique elements in num.

// Inp: [1,1,2] => Output: 2, [1,2]
// Inp: [0,0,1,1,1,2,2,3,3,4] => Output: 5,[0,1,2,3,4]

const nums = [1, 1, 2];

// M1 (This will only work wen the array is sorted)
const removeDuplicates = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i + 1, 1);
            i--;
        }
    }
    return arr.length;
}

const len = removeDuplicates(nums);
console.log(len);

// M2 (Two pointer approach)
const removeDuplicatesNew = (arr) => {
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}

const len1 = removeDuplicatesNew(nums);
console.log(len1);