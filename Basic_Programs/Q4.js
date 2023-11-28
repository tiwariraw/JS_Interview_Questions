// Q9. WAP to find the factorial of a given number.
// 5! = 5*4*3*2*1

function factorial(n) {
    let fact = 1;

    for (let i = 2; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

console.log(factorial(5));

console.log('---------------');

function factorialRecursion(n) {
    if (n === 1) return 1;
    return n * factorialRecursion(--n);
}

console.log(factorialRecursion(5));

console.log('---------------');