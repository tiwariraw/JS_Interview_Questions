// Given a string, reverse each word in the sentence "Welcome to this Javascript Guide!" should 
// become "emocleW ot siht tpircsavaJ !ediuG"

const str1 = "Welcome to this Javasript Guide!";

const reversedSentence = str1.split('').reverse().join('');
const reversedWords = reversedSentence.split(' ').reverse().join(' ');

console.log(reversedSentence);
console.log(reversedWords);