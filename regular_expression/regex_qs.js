//Q1. Write a pattern which identify if a string is a valid JavaScript variable

const isValidVariable = function (str) {
    const pattern = /^[a-zA-Z$_][a-zA-Z0-9$_]*$/g;
    return pattern.test(str);
}

console.log(isValidVariable('first_name'));
console.log(isValidVariable('first-name'));
console.log(isValidVariable('1first_name'));
console.log(isValidVariable('firstname'));

//Q2. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
// Expected cleaned sentence:
// I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(sentence, n) {
    const obj = {};

    const arr = sentence.replace(/[^a-zA-Z0-9\s]/g, '').split(' ');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            ++obj[arr[i]];
        } else {
            obj[arr[i]] = 1;
        }
    }

    const resArr = Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, n);

    return resArr.map(entry => ({ words: entry[0], count: entry[1] }));
}

console.log(cleanText(sentence, 3));


