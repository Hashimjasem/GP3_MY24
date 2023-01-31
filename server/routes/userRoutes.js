const express = require("express");
const {User, Date, Timeblock} = require("../models/index.js");

const router = express.Router();

//what do i need to do

//a way to sign up and create a user
//post request
router.post("/signup", async (req, res) => {
  try {
    const createUser = await User.create({
      username: req.body.username,
      fname: req.body.fname,
      sname: req.body.sname,
      email: req.body.email,
      password: req.body.password
    });
    console.log(req.body.username)
    return res.status(200).json('user successfully created')
  } catch (err) {
    return console.log(err)
  }
});

//a way for a user to sign in and set the routes for that specific user
//get request
router.get("/:username");

// a way to retrieve the data for that user





// a way to create data specific for that user
router.post('/createlog/:username', async (req,res) => {
    try {
        const createlog = await Date.create({
            owner: req.params.username,
            when: req.body.date,
            journal: req.body.journal,
        }) 
        const addtoLogs = await User.findByIdAndUpdate(req.params.id, {
            logs: createlog
        });
        console.log(req.params.username)
        return res.status(200).json('log created successfully')
    } catch (err) {
        return console.log(err)
    }
})

module.exports = router;
