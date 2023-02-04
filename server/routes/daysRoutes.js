const express = require("express");
const router = express.Router();
const {  getAllDays, getDay, createTimeblock, deleteTimeblock, addTimeblockNotes, addjournalentry, editJournal} = require("../controllers/daysController");

router.get("/:_id/logs", getAllDays);
router.get("/:_id/dashboard/:date_id", getDay);

router.post('/:_id/setup', createTimeblock)
router.delete('/:_id/setup', deleteTimeblock)
router.post('/:_id/dashboard/:title', addTimeblockNotes);
router.post('/:_id/dashboard/journal', addjournalentry)
router.put('/:_id/dashboard/journal', editJournal);


module.exports = router;


