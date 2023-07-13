import axios from 'axios'
// /movie/343611?api_key=ac77efd44d78f5eceb2373f0992a48f8
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

export default instance;