// https://reqres.in   <--- fake api

const getBtn = document.getElementById('get-data');
const postBtn = document.getElementById('post-data');

const dataToPost = {
    "name": "morpheus",
    "job": "leader",
}

const getData = () => {
    axios.get('https://reqres.in/api/users')
        .then(response => {
            console.log(response);
            // the 'data' object inside the 'response' object is already parse. We don't need to parse it again like we do with fetch web api
            console.log(response.data);
        })
        .catch(err => console.error(err))
}

const sendData = () => {
    axios.post('https://reqres.in/api/users', dataToPost, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            console.log(response);
            console.log(response.data);
        })
        .catch(err => console.error(err, err.response))
}

getBtn.addEventListener('click', () => {
    getData();
})

postBtn.addEventListener('click', () => {
    sendData();
})