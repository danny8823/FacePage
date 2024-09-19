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

        res.json({
            message: "Login success",
            token,
            user
        })
    }),
    profile: asyncHandler(async(req,res) => {
        const user = await User.findById("66e9bc1707c435f57a57d492")

        if(!user) {
            throw new Error('User not found')
        }

        res.json({
            username: user.username,
            email: user.email,
            user
        })
    }),
    changePassword: asyncHandler(async (req,res) => {
        const {newPassword} = req.body;

        const user = await User.findById('')

        if(!user) {
            throw new Error('User not found')
        }

        const salt = bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(newPassword, salt)

        user.password = hashedPass

        await user.save({
            validateBeforeSave: false,
        })

        res.json({
            message: 'Password change success'
        })
    }),
    updateProfile: asyncHandler(async (req,res) => {
        const {email,username} = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.user,
            {
                username,
                email
            },
            {
                new: true
            }
        )
        res.json({
            message: 'Profile update success'
        })
    }),
    deleteAccount: asyncHandler(async(req,res) => {
        const {id} = req.body;
        const userProfile = await User.findByIdAndDelete(id)

        if(!id) {
            throw new Error('Please provide more information')
        }

        res.send(
            userProfile
        )


    }),
    listAll: asyncHandler(async(req,res) => {
        const allUsers = await User.find()
        res.send(allUsers)
    })
}

module.exports = usersController