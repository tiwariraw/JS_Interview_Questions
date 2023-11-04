// Q1. Given an array of size n, print second largest distinct element from the array.
// Inp: [12,35,1,10,34,1] => Output: 34
// Inp: [-10, 3, 17, 0, 18, -2, 15] => Output: 17
// Inp: [10,5,10] => Output: 5

const nums = [12, 35, 1, 10, 34, 1];

// Brute force approach:

const secondLargest = (arr) => {
    const uniqueArray = [...new Set(arr)];
    uniqueArray.sort((a, b) => a - b);

    // if array has only one element
    if (uniqueArray.length === 1) {
        return -1;
    } else {
        return uniqueArray[arr.length - 2]; // second largest element
    }
}

const secondLargestNumber = secondLargest(nums);
console.log(secondLargestNumber);


// Optimised approach

const secondLargestOptimised = (arr) => {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

// const secondLargestNumber = secondLargestOptimised(nums);
// console.log(secondLargestNumber);