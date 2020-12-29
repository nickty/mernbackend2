import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

//import User from './models/User.js'
import useRouter from './routes/user.js'

const app = express()


//db connection 
const mongoUrl = "mongodb://localhost/tryagain"

mongoose.connect(mongoUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => console.log('Db connected'))

//middeware
app.use(bodyParser.json())

app.use('/api', useRouter)


app.listen(5000, () => console.log('Server is ON'))