// 1.
var x = 10;

const f1 = function () {
    console.log(x); // undefined (due to hoisting)
    var x = 100;
}

f1();

//2.
// const f1 = (a, ...nums, x, y) => {
//     console.log(x, y);
// }

f1(1, 2, 3, 4);

// o/p: Uncaught SyntaxError: Rest parameter must be last formal parameter 