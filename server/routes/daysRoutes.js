const express = require("express");
const router = express.Router();
const { getAllDays, getDay, createTimeblock, deleteTimeblock, addTimeblockNotes, addjournalentry, editJournal } = require("../controllers/daysController");


router.post("/", createTimeblock);
router.delete('/create/:_id', deleteTimeblock)

router.get("/dashboard/:date_id/:_id", getDay);
router.post('/dashboard/:title/:_id', addTimeblockNotes);
router.post('/dashboard/:_id', addjournalentry)
router.put('/dashboard/:_id', editJournal);
// history
router.get("/logs", getAllDays);

module.exports = router;