const express = require('express')
const server = express()
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoute')
const postRouter = require('./routes/postRoute')
const PORT = 9999
require('dotenv').config()

mongoose
    .connect(process.env.DB_URL)
    .then(()=>{
        console.log('Database connected :)....')
    })
    .catch((e)=>{
        console.log(e)
    })
server.use(express.json())

server.use('/',userRouter)
server.use('/',postRouter)


server.listen(PORT,() => {
    console.log(`Server started and listening on port: ${PORT}`)
})