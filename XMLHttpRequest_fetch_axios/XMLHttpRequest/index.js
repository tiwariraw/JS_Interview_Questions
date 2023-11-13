/* How an XMLHttpRequest is send */

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/tiwariraw');
// xhr.onreadystatechange = function () {
//     console.log(xhr.readyState);
//     if (this.readyState === 4 && this.status == 200) {
//         const data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// }
// xhr.send();

// https://reqres.in   <--- fake api

const getData = document.getElementById('get-data');
const postData = document.getElementById('post-data');

const dataToPost = {
    "name": "morpheus",
    "job": "leader"
}

const sendHttpRequest = async (method, url, obj) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        if (obj) {
            // if you want to post the data, setting request header is mandatory, otherwise you'll get an error
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        // xhr.responseType = 'json'; // if we use this, then there is no need to parse the received data as JSON. It will be already parsed and we'll get the json data.
        // but then, read the response as xhr.response and not as xhr.responseText 

        xhr.onload = function () {
            if (xhr.status >= 400) {
                reject(xhr.responseText);
            } else {
                resolve(xhr.responseText);
            }
        }

        xhr.onerror = function () {
            reject(new Error('unable to fetch the data'))
        }

        xhr.send(JSON.stringify(obj));
    });
}

getData.addEventListener('click', () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users')
        .then(val => {
            const responseJSON = JSON.parse(val);
            console.log(responseJSON);
        })
})

postData.addEventListener('click', () => {
    sendHttpRequest('POST', 'https://reqres.in/api/users', dataToPost)
        .then(val => console.log(val))
        .catch(err => console.error(err))
})