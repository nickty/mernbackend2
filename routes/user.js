import express from 'express'
//import router from express.Router()
const router = express.Router(); 

import {signup} from '../controllers/user.js' 

router.post('/register', signup)

export default router; 


