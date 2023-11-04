// map, filter, reduce - o/p based questions

const students = [
    { 'name': 'Ashish', rollNumber: 15, marks: 55 },
    { 'name': 'Atul', rollNumber: 17, marks: 35 },
    { 'name': 'Sachin', rollNumber: 91, marks: 85 },
    { 'name': 'Dubey', rollNumber: 13, marks: 65 },
];

// Q1. Return only name of students in uppercase

const names = students.map((obj) => {
    return obj.name.toUpperCase();
})

console.log(names);

// Q2. Return only the details of those students who scored more than 60

const gt60 = students.filter((obj) => {
    return obj.marks > 60;
})

console.log(gt60);

// Q3. Return only the details of those students who scored more than 60 marks
// and has rollNumber greater than 17

const gt60Roll17 = students.filter((obj) => {
    return obj.marks > 60 && obj.rollNumber > 17;
});

console.log(gt60Roll17);

// Q4. Calculate sum of marks of all the student
const sum = students.reduce((acc, curr) => {
    acc = acc + curr.marks;
    return acc;
}, 0);
console.log(sum);

// Q5. Return only the names of students who score more than 60
const res5 = students.filter((obj) => {
    return obj.marks > 60;
}).map((obj) => {
    return obj.name;
});
console.log(res5);

// Q6. Return total marks for students with marks greater than 60
// after 20 marks have been added to those who scored less than 60

const res6 = students
    .map((obj) => {
        if (obj.marks < 60) {
            obj.marks = obj.marks + 20;
        }

        return obj;
    })
    .filter((obj) => obj.marks > 60)
    .reduce((acc, curr) => acc + curr.marks, 0);

console.log(res6);