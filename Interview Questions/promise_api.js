// doing parallel multiple API calls using Promise.allSettled

const urls = ['https://api.github.com/users/tiwariraw', 'https://dummyjson.com/products'];

const responses = urls.map(url => fetch(url).then(res => res.json()));

console.log(responses);

Promise.allSettled(responses)
    .then(val => {
        val.forEach(el => {
            console.log(el);
        })
    })
    .catch(err => console.error(err.message));