/*************** Date ***************/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// JavaScript Date objects represent a single moment in time in a platform-independent format.
// A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

//1.

const date1 = new Date();
console.log(date1); // Sun Nov 05 2023 20:00:04 GMT+0530 (India Standard Time)
console.log(typeof date1); // object

console.log('-----------');

console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());
console.log(date1.getMilliseconds());
console.log(Date.now()); // The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
console.log(date1.getTime());

console.log('-----------');

console.log(date1.toDateString());
console.log(date1.toLocaleDateString());

// getDate()	       ->      Get day as a number (1-31)
// getDay()	           ->      Get weekday as a number (0-6)
// getFullYear()       ->	   Get year as a four digit number (yyyy)
// getMonth()	       ->      Get month as a number (0-11)
// getHours()	       ->      Get hour (0-23)
// getMinutes()	       ->      Get minute (0-59)
// getSeconds()	       ->      Get second (0-59)
// getMilliseconds()   ->      Get millisecond (0-999)
// getTime()	       ->      Get time (milliseconds since January 1, 1970)

// https://www.w3schools.com/js/js_date_methods.asp

console.log('-----------');

//2. 
const myCreatedDate1 = new Date('1997-05-20');
const myCreatedDate2 = new Date('05-20-1997');
const myCreatedDate3 = new Date(1997, 4, 20); // months starts from 0 in JS
console.log(myCreatedDate1);
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3);

console.log('-----------');

//3. 
console.log(date1.toLocaleString('default', {
    weekday: "long", // "narrow", "short"
    hour: "2-digit", // "numeric"
    month: "2-digit", // "long", "numeric", "narrow", "short"
}));

console.log('-----------');

// Q1. Print day first, then date, then hour, then minutes.
console.log(`Day: ${date1.getDay()}, Date: ${date1.getDate()}, Hours: ${date1.getHours()}, Minutes: ${date1.getMinutes()}`);