import {useMutation} from '@apollo/client'
import React, { useState } from 'react';
import { CREATE_TIMEBLOCK, CREATE_DAY } from '../utils/mutations';
import "nes.css/css/nes.css";

export default function TimeBlockForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState("");
  const [createDay] = useMutation(CREATE_DAY);
  const [createTimeblock] = useMutation(CREATE_TIMEBLOCK);

  const onSubmit = async (event) => {
    event.preventDefault();

    const newDay = { date: date, dateId: date };
    const {data: {createDay: day}} = await createDay({variables: newDay});
    const timeblock = {
      belongsTo: day.date_id,
      title: title,
      startTime: startTime,
      endTime: endTime,
      description: description,
    };

    await createTimeblock(timeblock);

    setTitle("");
    setDescription("");
    setStartTime("");
    setEndTime("");
    setDate("");
  };

  return (
    <div className="nes-container is-dark with-title">
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            id="description"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="time"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="nes-field">
          <label htmlFor="endTime">End Time:</label>
          <input
            type="time"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="nes-btn is-success btn">
          Add Time Block
        </button>
      </form>
    </div>
  );
}
