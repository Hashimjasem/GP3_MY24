const express = require("express");
const router = express.Router();
const {  getAllDays, getDay, createTimeblock, deleteTimeblock, addTimeblockNotes, addjournalentry, editJournal} = require("../controllers/daysController");
const { protect } = require("../middleware/authMiddleware");


router.route("/setup").post(protect, createTimeblock)
router.route("/dashboard").post(protect, addTimeblockNotes, addjournalentry, editJournal).delete(protect, deleteTimeblock).get(protect, getDay)
router.get("/history", protect, getAllDays);

module.exports = router;


