import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json());

app.use(cors())

app.post('/login', function (req, res) {
    console.log(req.body);
    res.send("selam");
})

app.post('/register', function (req, res) {
    console.log(req.body);
    res.send("selam");
})


app.listen(5000)