// Q2. The hamming distance between two integers is the number of positions
// at which the corresponding bits are different
// Given two integers num1 and num2, return the hamming distance between them.

// Inp: num1 = 1, num2 = '4 => Output: 2
// Explaination:
// 1    (0 0 0 1)
// 4    (0 1 0 0)
//         ↑   ↑

const num1 = 1;
const num2 = 4;

const hammingDistance = (n1, n2) => {
    let distance = 0;

    n1 = n1.toString(2);
    n2 = n2.toString(2);

    if (n1.length < n2.length) {
        while (n1.length !== n2.length) {
            n1 = '0' + n1;
        }
    } else {
        while (n1.length !== n2.length) {
            n2 = '0' + n2;
        }
    }

    for (let i = 0; i < n1.length; i++) {
        if (n1[i] !== n2[i]) {
            distance++;
        }
    }

    return distance;

}

const res = hammingDistance(num1, num2);
console.log(res);
