import User from '../models/user.js'
import '../database-connnection.js'


const register = async function (req, res) {
    res.json(await User.create(req.body));
}

const login = async function ({ body: { email, password } }, res) {
    var user = await User.findOne({ email: email, password: password });
    res.json(user);
}

export default {
    register,
    login
}