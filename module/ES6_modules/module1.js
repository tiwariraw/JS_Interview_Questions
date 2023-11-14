export const nums = [1, 3, 5, 7, 9];

export function add(...args) {
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    return sum;
}

function defaultFn() {
    console.log('I am a default exported function');
}

export default defaultFn;