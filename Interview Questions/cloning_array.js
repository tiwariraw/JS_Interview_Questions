const arr = [1, 3, 5, 7, 9];

const copy1 = arr.slice();

const copy2 = [...arr];

const copy3 = [];
for (let i = 0; i < arr.length; i++) {
    copy3[i] = arr[i];
}

const copy4 = JSON.parse(JSON.stringify(arr));

const copy5 = arr.map(el => el);

const copy6 = arr.filter(el => {
    return el;
})

copy6.push('mango');

console.log(arr);
console.log(copy6);

// https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
