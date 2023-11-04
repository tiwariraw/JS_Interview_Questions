// Q1. Truncate the text
// Write a function called truncate that checks the length of a given string str,
// and if it surpasses a specified maximum length, maxlength, it replaces the end
// of the string with the ellipsis character "..." so that the length matches
// the maximum length.

// Inp: str = 'Subscribe to Roadsidecoder', maxlength = 9 => Output: Subscribe...

// const str = 'Subscribe to Roadsidecoder';
// const maxlength = 
9;
const str = 'Subscribe';
const maxlength = 15;

const truncate = (str, maxlength) => {
    let newStr = '';
    
    if (str.length > maxlength) {
        newStr = str.slice(0, maxlength) + '...';
        return newStr;
    } else {
        return str;
    }
}

const res = truncate(str, maxlength);
console.log(res);