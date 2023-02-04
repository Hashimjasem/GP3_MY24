const express = require("express");
const router = express.Router();
const {createUser, getAllUsers, getUser, updateUser, deleteUser} = require("../controllers/userController");

router.get("/:_id", getUser);
router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:_id", updateUser);
router.delete("/:_id", deleteUser);

module.exports = router;

