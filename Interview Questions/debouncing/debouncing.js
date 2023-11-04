/* Debouncing */

// It limits the execution of a function call and waits for a certain
// amount of time before running it again.

// Real word eg: limiting api calls (in flipkart, when we search for an item, api
// call is not made for every letter entered but is made when there is delay
// of say 400ms between the two typed letters)

// Ref: https://www.youtube.com/watch?v=yBFHwJgqLD4&t=646
// https://www.freecodecamp.org/news/javascript-debounce-example/

let counter = 0;
const getData = () => {
    console.log('Fetching data...', ++counter);
}

const debounce = (cb, delay) => {
    let timerId;
    // console.log('id at immediate load: ',timerId);

    return function (...args) {
        // console.log('previous id: ', timerId);
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

const betterFn = debounce(getData, 500);



/* Explaination */

//1. Setting up a counter:

// -> The code starts by declaring a variable called counter and sets its initial
//  value to 0. This variable will be used to keep track of how many times a
// function is called.

//2. Defining a function called getData:

// -> This function is created using the getData variable.
// -> Inside this function, a message "Fetching data..." is printed to the
// console, and the counter is incremented by 1 each time the function is called.

//3. Creating a debounce function:

// -> The code defines another function called debounce. This function takes
// two arguments: cb (a function) and delay (a number).

//4. Inside the debounce function:

// -> The let timer; line declares a variable called timer without giving it
// any initial value.
// -> The function returns another function that can take any number of arguments
//  (using ...args).

//5.  Inside the returned function:

// -> It first checks if there is an existing timer. If there is, it
// clears it using clearTimeout(timer). This means that if this returned
// function is called again before the timer expires, the previous timer is canceled.

// -> Then, it sets a new timer using setTimeout. The timer will
// run after a specified delay in milliseconds.

// -> Inside the setTimeout function, it calls the original function cb().
// This is the function you passed to debounce, which, in this code, is getData.

//6. Using the debounce function:

// -> Finally, the code creates a new variable called betterFn and assigns it
// the result of calling debounce(getData, 500).

// -> This means that betterFn now represents a version of the getData function
//  that has a debounce mechanism applied to it. When you call betterFn,
//  it will only execute the original getData function if there has been no
//  new call to betterFn within the last 500 milliseconds (0.5 seconds).

// In simple terms, the debounce function helps you control how often a
// function like getData is actually executed. If you call betterFn multiple
// times in quick succession, it will only execute the underlying getData
// function once every 500 milliseconds, preventing it from being called too
//  frequently. This can be useful for scenarios like handling user input or
//  network requests to avoid overloading the system with too many requests.