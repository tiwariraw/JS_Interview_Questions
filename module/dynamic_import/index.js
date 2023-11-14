// Dynamic import gives us access to import a module conditionally which isn't
// possible using static import

// import() is a function which returns a promise

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    const { sayNamaste, sayHola } = await import('./module1.js');
    sayNamaste();
    sayHola();
}

// How to handle multiple imports using Promise APIs

const p1 = Promise.all(
    [
        await import('./module1.js'),
        await import('./module2.js')
    ]
);

p1.then(vals => {
    vals.forEach(val => {
        console.log(val);
    })
})