import axios from 'axios';

export const fetchData = () => {
   return axios.get('http://106.53.78.195:8081/upload/files/updateApp.json');
}

export const getNumber = () => {
   return 123;
}