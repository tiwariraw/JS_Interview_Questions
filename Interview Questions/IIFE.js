// IIFE

(function (x) {
    return (function (y) {
        console.log(x);
    })(2)
})(1);

// Expl: x is printed because of closure