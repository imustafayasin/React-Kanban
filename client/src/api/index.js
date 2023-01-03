import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { 'Content-Type': 'application/json' }
});

export const login = async (userObj) => {
    return await request.post('/user/login', userObj);
}

export const register = async (userObj) => {
    return await request.post('/user/register', userObj);
}


