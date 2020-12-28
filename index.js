import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

//import User from './models/User.js'
import User from './models/User.js'

const app = express()


//db connection 
const mongoUrl = "mongodb://localhost/tryagain"

mongoose.connect(mongoUrl, {
    useCreateIndex: true, 
    useNewUrlParser: true, 
    useFindAndModify: false
}).then(()=>console.log('Db connected'))


app.use(bodyParser.json())

app.post('/register', async (req, res) => {

    const newUser = new User(req.body)

    await newUser.save(()=>console.log("Data added"))

    res.send(newUser)
    

})


app.listen(5000, ()=>console.log('Server is ON'))