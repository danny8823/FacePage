const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../model/UserModel')

const usersController = {
    register: asyncHandler(async(req,res) => {
        const { username, email, password} = req.body;
        
        if(!username || !email || !password) {
            throw new Error("Please all fields are required.")
        }

        const userExists = await User.findOne({email})
        if(userExists) {
            throw new Error('This email is already registered.')
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password,salt)

        const userCreated = await User.create({
            email,
            username,
            password: hashedPass
        })

        res.json({
            message: {
                username,
                status: 'registered'
            }
        })
    }),
    login: asyncHandler(async(req,res) => {
        const {email,password} = req.body

        const user = await User.findOne({email})

        if(!user) {
            throw new Error('Invalid login credentials')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            throw new Error('Invalid login credentials')
        }

        const token = jwt.sign({
            id: user._id
        },process.env.JWT_SECRET,{
            expiresIn: "30d"
        })
    })
}

module.exports = usersController