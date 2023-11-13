// https://reqres.in   <--- fake api

const getData = document.getElementById('get-data');
const postData = document.getElementById('post-data');

const dataToPost = {
    "name": "morpheus",
    "job": "leader"
}

const sendHttpRequest = async (method, url, obj) => {
    try {
        let data;
        if (obj) {
            data = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj),
            })
        } else {
            data = await fetch(url, {
                method: method,
            });
        }

        if (!data.ok) {
            console.log('Unable to fetch the data');
            console.log(data.status);
        }

        const json = await data.json();
        console.log(json);

    } catch (err) {
        console.error(err);
    }
}

getData.addEventListener('click', () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users');
})

postData.addEventListener('click', () => {
    sendHttpRequest('POST', 'https://reqres.in/api/users', dataToPost);
})