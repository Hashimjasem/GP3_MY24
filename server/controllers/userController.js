const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

getUser = async (req, res) => {
  User.findOne({ email: req.body.email }, function (err, userInfo) {
    if (err) {
      next(err);
    } else {
      if (bcrypt.compareSync(req.body.password, userInfo.password)) {
        const token = jwt.sign({ id: userInfo._id }, req.app.get("secretKey"), {
          expiresIn: "1h",
        });
        res.json({
          status: "success",
          message: "user found!!!",
          data: { user: userInfo, token: token },
        });
      } else {
        res.json({
          status: "error",
          message: "Invalid email/password!!!",
          data: null,
        });
      }
    }
  });
};

createUser = async (req, res, next) => {
  const user = User.create(
    {
      username: req.body.username,
      fname: req.body.fname,
      sname: req.body.sname,
      email: req.body.email,
      password: req.body.password,
    },
    function (err, result) {
      if (err) next(err);
      else
        res.json({
          status: "success",
          message: "User added successfully!!!",
          data: null,
        });
    }
  );
};

getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    }).exec();
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params._id).exec();
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
