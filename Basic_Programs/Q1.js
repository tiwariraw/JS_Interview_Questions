// Q2. Palindrome number

// Inp: 121 => Output: 121

const num = 121;

const palindrome = (num) => {
    const temp = num;
    let reverse = 0;
    while (num) {
        let rem = num % 10;
        num = Math.floor(num / 10);
        reverse = reverse * 10 + rem;
    }

    if (temp === reverse) {
        return true;
    } else {
        return false;
    }
}

const res = palindrome(num);

if (res === true) {
    console.log(`${num} is palindrome`);
} else {
    console.log(`${num} is not a palindrome`);
}

// M2

const isPalindrome = (n) => {
    return n < 0 ? false : n === +n.toString().split('').reverse().join();
}

const res1 = isPalindrome(num);
console.log(res1);