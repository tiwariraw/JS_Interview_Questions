// Q2. Hamming distance (number of mismatches occuring in two strings at the same position)
// Given two strings str1 and str2, return the hamming distance between them.
// For hamming distance, the length of both strings should be same.

// Inp: str1 = 'hello', str2 = 'hwllr' => Output: 2
// Explaination:
// (hello)
// (hwllr)
//   ↑  ↑

const str1 = 'hello';
const str2 = 'hwllr';

const hammingDistance = (str1, str2) => {
    if (str1.length !== str2.length) {
        throw new Error('Strings must be of same length');
    }

    let distance = 0;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            ++distance;
        }
    }

    return distance;
}

const res = hammingDistance(str1, str2);
console.log(res);

// References:

// 1. https://www.youtube.com/watch?v=EREfTIcnPrc
// 2. https://www.youtube.com/watch?v=Dn-w2favLHw