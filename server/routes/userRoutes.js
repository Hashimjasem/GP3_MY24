const express = require("express");
const router = express.Router();
const {createUser, getAllUsers, getUser, updateUser, deleteUser} = require("../controllers/userController");

router.get("/authenticate", getUser);
router.post("/register", createUser);

router.get("/", getAllUsers);
router.put("/:_id", updateUser);
router.delete("/:_id", deleteUser);

module.exports = router;

