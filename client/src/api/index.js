import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

const request = async (method, path, data) => {

    try {
        const result = await axios({
            method,
            url: BASE_URL + path,
            data,
            headers: { 'Content-Type': 'application/json' }
        });
        const { status, message } = result.data;

        if (!!message)
            toastMessage(status, message);
        // return result.data;
    }
    catch (ex) {
        console.log(ex)
    };
}

function toastMessage(status, title) {
    console.log({ status, title })
    window?.toast({
        description: title,
        status: status,
        duration: 9000,
        isClosable: true
    })
}


export const login = async (userObj) => {
    return await request('POST', '/user/login', userObj)
}

export const register = async (userObj) => {
    return await request('POST', '/user/register', userObj)
}


