// comparing 2 different data types (unpredictable results) => try to avoid these of comparisions

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log('-----------');


/* 
The reason is quality check operator (== or ===) and comparision 
operators (>, >=, <, <=) works differently.
Comparision operators convert null to a number, treating it as 0.
*/
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null === 0); // false
console.log(null > 0); // true ⬅️
console.log(null >= 0); // true

console.log('-----------');


console.log(undefined == 0); // false
console.log(undefined === 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false
console.log(undefined < 0); // false
console.log(undefined <= 0); // false