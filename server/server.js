const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')

const userRoutes = require('./routes/userRoutes')
const daysRoutes = require('./routes/daysRoutes')

//settup express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
// app.use('/api/timeblocks', timeBlockRoutes)

app.use('/api/users', userRoutes)
app.use('/api/users', daysRoutes)

//connect to db
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        //listen for requests
        app.listen(port, () => 
        console.log(`Connected to db, Server listening at http://localhost:${port}`))
    })
    .catch((error) => {
        console.log(error)
    })

