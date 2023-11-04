// How would you empty an array in JavaScript

// Sol1: 
const arr1 = [1,3,5];

const emptyArray = () => {
    while(arr1.length !== 0){
        arr1.pop();
    }
}

emptyArray(arr1);
console.log(arr1);

//Sol2:
const arr2 = [2,4,6];
arr2.length = 0;
console.log(arr2);