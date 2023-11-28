function solveQuad(a, b, c) {
    let disc = b * b - 4 * a * c;
    let r1, r2;

    if (disc > 0) {
        console.log('Real and different roots');
        r1 = (-b + Math.sqrt(disc)) / (2 * a);
        r2 = (-b - Math.sqrt(disc)) / (2 * a);
    } else if (disc === 0) {
        console.log('Real and equal roots');
        r1 = r2 = -b / (2 * a);
    } else if (disc < 0) {
        console.log('Imaginary roots');
        const re = ((-b) / (2 * a)).toFixed(2);
        const img = (Math.sqrt(-disc) / (2 * a)).toFixed(2);

        r1 = `${re} + ${img}i`;
        r2 = `${re} - ${img}i`;
    }

    console.log('root r1: ', r1);
    console.log('root r2: ', r2);
}

solveQuad(1, -1, 2);