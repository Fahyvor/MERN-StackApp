import axios from 'axios'

const instance = axios.create({
    baseURL: "https://mern-stack-app-delta.vercel.app/",
    withCredentials: true
});

export default instance;