'use strict';

// Write a function that takes two arrays as argument. Merge both arrays and remove duplicate values. Return the resultant array.
// arr1 = [1,2,3]
// arr2 = [3,4,5]
// Expected Output: [1,2,3,4,5]

// Sol1:
function myFunction(arr1,arr2){
    const mergedarr = [].concat(arr1,arr2);
    return [...new Set(mergedarr)];
}


// Sol2:
const arr1 = [1,2,3];
const arr2 = [3,4,5];

function removeDuplicate(arr1,arr2){
    const mergedarr = [].concat(arr1,arr2);
    const output = [];
    for(const e of mergedarr){
        if(!output.includes(e)){
            output.push(e);
        }

        /*
        if(output.indexOf(e) === -1){
            output.push(e);
        }
        */
    }
    return output;
}

const arrOutput = removeDuplicate(arr1,arr2)
console.log(arrOutput);
