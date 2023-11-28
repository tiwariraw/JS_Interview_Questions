// https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/

function shuffleArray(arr) {

    for (let i = arr.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));

        // Swap the elements at indices i and j
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }

    return arr;
}

const myArray = ['A', 'B', 'C', 'D', 'E'];
const shuffledArray = shuffleArray(myArray);
console.log(shuffledArray);


/*

The Fisher-Yates shuffle algorithm, also known as the Knuth shuffle, is a 
simple and efficient algorithm used for randomly shuffling the elements of 
an array. The algorithm works by iteratively swapping each element with a 
randomly chosen element before it (or including itself). The key 
idea is to iterate through the array in reverse order, ensuring that each 
element has an equal chance of ending up in any position.


Steps:

1. Start from the last element of the array (i = array.length - 1).
2. Generate a random index (j) between 0 and the current index (i).
3. Swap the element at index i with the element at index j.
    -> This step ensures that the current element has an equal chance of being placed in any position, including its own.
4. Decrement i and repeat the process until i becomes 0.
    -> Move to the previous element in the array and repeat steps 2-3.


The algorithm guarantees that each element in the array is equally likely 
to end up in any position. It has a time complexity of O(n), where n is the
 length of the array.
*/

function shuffleArrayUsingSort(arr) {
    return arr.sort(function () {
        return Math.random() - 0.5;
    });
}

const myArray2 = ['A', 'B', 'C', 'D', 'E'];
const shuffledArray2 = shuffleArrayUsingSort(myArray2);
console.log(shuffledArray2);

/*

1. The sorting function returns a random number between -0.5 and 0.5 using 
Math.random() - 0.5. This random number is used to determine the sorting order.

2. The sorting order determines how the elements are rearranged in the array. 
If the sorting function returns a negative number, it means that the first 
element should come before the second element; if it returns a positive number, 
it means that the second element should come before the first element; if it
returns zero, the order remains unchanged.'

3. Issue with Random Sorting: 
    -> The intention here is to randomize the order of the array elements 
       by introducing randomness into the sorting order. However, the issue 
       is that the sorting function is called only once for each pair of elements
       during the sorting process. This means that the randomness is only
       introduced once, and the subsequent comparisons rely on the initially 
       determined sorting order.

*/

