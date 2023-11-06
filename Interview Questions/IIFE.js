// IIFE

(function (x) {
    return (function (y) {
        console.log(x);
    })(2)
})(1);

// Expl: x is printed because of closure


/*** Interesting ***/

// 1.

function goodbye() {
    console.log('Tata khatam bye bye');
}

// the goodbye function is attached as a method on global object i.e. window
goodbye();


// this IIFE greet is not attached tow indow object, hence it avoids pollution global namespace
(function greet() {
    console.log('Hola gola');
})();

// OR

(function () {
    console.log('Hola gola');
})();

// OR

(() => {
    console.log('Hola gola');
})();


// 2.

// Problem: We'll get an error (TypeError: (intermediate value)(...) is not a function) and this error is due to ASI (yaha pe at line 47, JS Engine automatically semicolon nahi insert karega jabki aage parse
// karne ki koshish karega jisase error aayega)
(function () {
    console.log('Hello World');
})()

    (function () {
        console.log('Goodbye World');
    })()

    // Sol: use a semicolon at the end of IIFE invocation

    (function () {
        console.log('Hello World');
    })();

(function () {
    console.log('Goodbye World');
})();
