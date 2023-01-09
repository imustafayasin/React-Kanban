import User from '../models/user.js'
import '../database-connnection.js'
import bcrypt from 'bcryptjs';
const salt = 10;


const responseStatus = {
    "true": "success",
    "false": "error"
}

//Todo: Refactor here
const register = async function ({ body: { email, password } }, res) {
    const response = {};
    const existUser = await User.findOne({ email });

    if (!existUser) {
        await User.create({ email, password: (await bcrypt.hash(password, salt)) });
        response.message = 'Register is successful'
    }
    else
        response.message = `${existUser.email} address already use by another user.`;

    response.status = responseStatus[!existUser];

    res.json(response);
}

const login = async function ({ body: { email, password } }, res) {
    const response = {};
    const user = await User.findOne({ email: email });

    let validCredentials = false;
    if (!user) response.message = 'User Not Found';
    else {
        validCredentials = !!user && (await bcrypt.compare(password, user.password));
        if (!validCredentials) response.message = 'E-mail or password incorrect';
    }

    response.status = responseStatus[validCredentials];


    res.json(response);
}

export default {
    register,
    login
}