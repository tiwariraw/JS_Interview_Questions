// Q1. Use the countriesAPI and find out the 10 largest countries

const countriesAPI = 'https://restcountries.com/v2/all';

const nLargestCountries = async (n) => {
    const data = await fetch(countriesAPI);
    const json = await data.json();
    json.sort((obj1, obj2) => {
        return obj2.area - obj1.area;
    });

    return json.slice(0, n);
}

nLargestCountries(10)
    .then(arr => {
        console.log(arr);
        arr.forEach(e => {
            console.log(e);
        })
    })

// Q2. Use the countries api and count total number of languages in the world used as officials.

fetch(countriesAPI)
    .then(data => data.json())
    .then(json => {
        console.log(json);
        const totalLanguages = json?.reduce((acc, curr) => {
            acc = acc + curr.languages.length;
            return acc;
        }, 0);
        console.log(totalLanguages);
    });