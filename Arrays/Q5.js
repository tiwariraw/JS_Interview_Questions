// Q1. Given an integer array nums, rotate the array to the right by k steps.
// where k is non-negative

// Inp: [1,2,3,4,5,6,7], k=3  => Output: [5,6,7,1,2,3,4]
// Inp: [-1,-100,3,99], k=2  => Output: [3,99,-1,-100]


// (M1) Using JS inbuilt functions

const nums = [-1, -100, 3, 99];
const k = 2;

/*
const rotateByK = (arr, k) => {
    const size = arr.length;
    if (k > size) {
        k = k % size;
    } else {
        const arrCopy = [...arr];
        for (let i = 0; i < k; i++) {
            let temp = arrCopy.pop();
            arrCopy.unshift(temp);
        }
        return arrCopy;
    }
}

const result = rotateByK(nums, k);
console.log(result);
*/


// (M2) Using JS inbuilt function

const rotateByK = (arr, k) => {
    const size = arr.length;
    if (k > size) {
        k = k % size;
    } else {
        const tempArr = arr.splice(size - k, size);
        arr.unshift(...tempArr);
        return arr;
    }
}

// const result1 = rotateByK(nums, k);
// console.log(result1);


// Without using JS inbuilt functions

const rotateArrayByK = (arr, k) => {
    if (k > size) {
        k = k % arr.length;
    } else {
        for (let i = 0; i < k; i++) {
            const temp = arr.pop();
            for (let j = arr.length; j >= 0; j--) {
                arr[j] = arr[j - 1];
            }
            arr[0] = temp;
        }
        return arr;
    }
}

const result2 = rotateArrayByK(nums, k);
console.log(result2);



// Reference:

// 1. https://www.youtube.com/watch?v=iCaDhMEhmz0&t=1798s


// Explaination:

/*
    if k > size => k = k % size;

    const nums = [1,2,3,4,5]
    const k = 5;

    Since, k === arr.length, if we rotate the array by 5, then we'll get the 
    original array.
    So, if k > arr.length => eg. k = 7,
    only (k % size) i.e. 2 rotations are required
*/