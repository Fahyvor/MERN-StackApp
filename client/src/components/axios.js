import axios from 'axios'

const instance = axios.create({
    baseURL: "https://mern-stack-app-delta.vercel.app/",
    withCredentials: false,
    params: {
        access_token: SECRET_TOKEN
    },
});

export default instance;