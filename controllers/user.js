import User from '../models/User.js'

export const signup = async (req, res) => {

    const newUser = new User(req.body)

    await newUser.save()

    res.send(newUser)
}




