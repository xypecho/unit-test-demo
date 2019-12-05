import axios from 'axios';

export const runCallback = (callback) => {
    callback();
}

export const fetchData = () => {
    return axios.get('http://106.53.78.195:8081/upload/files/updateApp.json').then(res => res.data);
}