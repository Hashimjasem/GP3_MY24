const User = require("../models/userModel");
const Day = require("../models/dayModel");
const Timeblock = require("../models/timeblockModel");

getAllDays = async (req, res) => {
  try {
    const days = await Day.find({ owner: req.params._id }).populate(
      "timeblocks"
    );
    res.status(200).json({ days });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

getDay = async (req, res) => {
  try {
    const day = await Day.findOne({
      date_id: req.params.date_id,
    }).populate("timeblocks");
    res.status(200).json({ day });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

addjournalentry = async (req, res) => {
  try {
    const day = await Day.findOne({
      date: req.body.date,
      owner: req.params._id,
    });
    if (!day) {
      const newDay = new Day({
        owner: req.params._id,
        date: req.body.date,
        journal: req.body.journal,
        day: req.body.day,
      });
      await newDay.save();
      const user = await User.findById(req.user._id);
      user.days.push(newDay._id);
      await user.save();
      res.status(201).json({ message: "Journal created successfully." });
    } else {
      day.journal = req.body.journal;
      await day.save();
      res.status(200).json({ message: "Journal updated successfully." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

editJournal = async (req, res) => {
  try {
    const day = await Day.findOne({
      date: req.body.date,
      owner: req.params._id,
    });
    day.journal = req.body.journal;
    await day.save();
    res.status(200).json({ message: "Journal updated successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// createTimeblock Controller
createTimeblock = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params._id });
    if (!user) return res.status(404).json({ message: "User not found" });

    let day = await Day.findOne({ owner: req.params._id, date: req.body.date });
    if (!day) {
      const newDay = new Day({
        owner: req.params._id,
        date: req.body.date,
        date_id: req.body.date_id,
        journal: "",
        timeblocks: [],
      });
      await newDay.save();
      day = newDay;

      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params._id },
        { $push: { days: day._id } },
        { new: true }
      );
    }

    const timeblock = new Timeblock({
      //   belongsTo: day,
      title: req.body.title,
      description: req.body.description,
      timeS: req.body.timeS,
      timeE: req.body.timeE,
      notes: "",
    });
    await timeblock.save();
    day.timeblocks.push(timeblock._id);
    await day.save();

    res.status(201).json({ message: "Timeblock created", timeblock });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// addTimeblockNotes Controller
addTimeblockNotes = async (req, res) => {
  try {
    const timeblock = await Timeblock.findOne({ title: req.params.title });
    if (!timeblock)
      return res.status(404).json({ message: "Timeblock not found" });

    timeblock.notes = req.body.notes;
    await timeblock.save();

    res.status(200).json({ message: "Timeblock notes updated", timeblock });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// deleteTimeblock Controller
deleteTimeblock = async (req, res) => {
  try {
    const timeblock = await Timeblock.findOne({ title: req.params.title });
    if (!timeblock)
      return res.status(404).json({ message: "Timeblock not found" });

    await timeblock.remove();

    res.status(200).json({ message: "Timeblock deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllDays,
  getDay,
  createTimeblock,
  deleteTimeblock,
  addTimeblockNotes,
  addjournalentry,
  editJournal,
};
