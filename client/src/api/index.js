import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

const request = async (method, path, data) => {
    try {
        const result = await axios({
            method,
            url: BASE_URL + path,
            data,
            headers: { 'Content-Type': 'application/json' },
        });
        const { success, error } = result.data;
        if (!success && !!error) {
            throw new Error(error);
        }
        return result.data;
    }
    catch (ex) {
        alert(ex)
    };
}


export const login = async (userObj) => {
    return await request('POST', '/user/login', userObj)
}

export const register = async (userObj) => {
    return await request('POST', '/user/register', userObj)
}


