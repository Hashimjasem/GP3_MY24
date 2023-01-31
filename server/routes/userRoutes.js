const express = require('express')
const User = require('../models/userModel')

const router = express.Router()

//gets all timeblocks
router.get('/', (req, res) => {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));

    // res.json({mssg: 'GET all time blocks'})
})

//gets one timeblock
router.get('/:id', (req, res) => {
    // res.json({mssg: 'GET one time block'})
})


//create a user
router.post('/', (req, res) => {
    
    res.json({mssg: 'post new user'})
})



//DELETE one timeblock
router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete timeblock'})
})

//UPDATE one timeblock
router.delete('/:id', (req, res) => {
    res.json({mssg: 'update timeblock'})
})





module.exports = router