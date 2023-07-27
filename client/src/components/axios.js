import axios from 'axios'

const instance = axios.create({
    // baseURL: "http://localhost:9000"
    baseURL: "https://mern-stack-app-delta.vercel.app/",
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    credentials: 'same-origin'
});

export default instance;