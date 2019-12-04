import axios from 'axios';

export const fetchData = (fn) => {
    axios.get('http://106.53.78.195:8081/upload/files/updateApp.json').then(res => {
        fn(res.data)
    })
}

// 如果是promise
export const fetchPromise = () => {
    return axios.get('http://106.53.78.195:8081/upload/files/updateApp.json');
}