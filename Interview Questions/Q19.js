// Q1. Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

function convertArrayToObject(students) {
    const output = [];

    for (const student of students) {
        const [name, skills, scores] = student;
        output.push({ name: name, skills: skills, scores: scores })
    }

    return output;
}

console.log(convertArrayToObject(students));

console.log('-----------------');

