import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json());
app.use(cors())


import user from './controllers/UserController.js'
import requestValidator from './middlewares/requestValidator.js';
app.post('/user/register', requestValidator, user.register)
app.post('/user/login', requestValidator, user.login)



app.listen(5000)