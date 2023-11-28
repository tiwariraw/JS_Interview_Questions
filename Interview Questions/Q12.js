//Q1. This is a fruit array , ['banana', 'orange', 'mango', 'lemon']. Reverse the order using loop without using a reverse method.

const fruits = ['banana', 'orange', 'mango', 'lemon'];
// const fruits = ['banana', 'orange', 'mango', 'lemon', 'kiwi'];

function reverseArr(arr) {
    let endIndex = fruits.length - 1;

    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[endIndex];
        arr[endIndex] = temp;

        endIndex--;
    }

    return arr;
}

console.log(reverseArr(fruits));


// Q2. Capitalize the first letter in each country 

const countries = ['albania', 'bolivia', 'canada'];

Array.prototype.capitalize = function () {
    // console.log(this); // ['albania', 'bolivia', 'canada']

    const output = [];

    for (const e of this) {
        output.push(e.charAt(0).toUpperCase() + e.slice(1));
    }

    return output
}

console.log(countries.capitalize());


