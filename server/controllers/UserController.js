import User from '../models/user.js'
import '../database-connnection.js'
import bcrypt from 'bcryptjs';
const salt = 10;


const register = async function ({ body: { email, password } }, res) {
    const existUser = await User.findOne({ email });
    const result = { success: !existUser }
    if (!!existUser)
        result.error = `${existUser.email} address already use by another user.`
    else await User.create({ email, password: (await bcrypt.hash(password, salt)) });
    res.json(result);
}

const login = async function ({ body: { email, password } }, res) {
    var user = await User.findOne({ email: email });
    res.json({ success: !!user && (await bcrypt.compare(password, user.password)) });
}

export default {
    register,
    login
}