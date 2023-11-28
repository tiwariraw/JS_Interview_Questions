//Q Find the median age(one middle item or two middle items divided by two)

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 78];
const ages = [1, 2, 3, 4, 5, 6];
ages.sort((a, b) => a - b);

console.log(ages);

let median = 0;
if (ages.length % 2 == 0) {
    median = (ages[ages.length / 2] + ages[(ages.length / 2) - 1]) / 2;
} else {
    median = ages[Math.floor(ages.length / 2)]
}

console.log(median);