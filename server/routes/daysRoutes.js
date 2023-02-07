const express = require("express");
const router = express.Router();
const {  getAllDays, getDay, createTimeblock, deleteTimeblock, addTimeblockNotes, addjournalentry, editJournal} = require("../controllers/daysController");
const { protect } = require("../middleware/authMiddleware");

router.post('/create/:_id',protect, createTimeblock)
router.delete('/create/:_id',protect, deleteTimeblock)

router.get("/dashboard/:date_id/:_id",protect, getDay);
router.post('/dashboard/:title/:_id',protect, addTimeblockNotes);
router.post('/dashboard/:_id',protect, addjournalentry)
router.put('/dashboard/:_id',protect, editJournal);
// history
router.get("/logs",protect, getAllDays);

module.exports = router;