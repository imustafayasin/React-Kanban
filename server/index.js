import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json());

import user from './controllers/UserController.js'

app.use(cors())

app.post('/user/register', user.register)
app.post('/user/login', user.login)



app.listen(5000)