// Q3. Valid Anagram
// An anagram is a word or phrase formed by rearranging the letters of a different
// word or phrase, using all the original letters exactly once.

// Inp: str1 = 'listen', str2 = 'silent' => Output: true
// Inp: str1 = 'rat', str2 = 'car' => Output: false

const str1 = 'aacc';
const str2 = 'ccac';

// M1
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    str1 = str1.split('').sort().join();
    str2 = str2.split('').sort().join();

    return str1 === str2;
}

const res = isAnagram(str1, str2);
console.log(res);


// M3 (Optimised)

const isAnagramOptimised = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const obj1 = {};
    const obj2 = {};

    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
}

const res2 = isAnagramOptimised(str1, str2);
console.log(res2);