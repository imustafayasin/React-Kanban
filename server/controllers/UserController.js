import User from '../models/user.js'
import '../database-connnection.js'


const register = async function (req, res) {
    const existUser = await User.findOne({ email: req.body.email });
    const result = { success: !existUser }
    if (!!existUser)
        result.message = `${existUser.email} address already use by another user.`
    else await User.create(req.body);
    res.json(result);
}

const login = async function ({ body: { email, password } }, res) {
    var user = await User.findOne({ email: email, password: password });
    res.json({ success: !!user, message: 'User not found' });
}

export default {
    register,
    login
}