import { useState } from "react";
// import {useDispatch } from "react-redux";
// import {createTimeblock} from "../features/timeblocks/timeblockSlice"

const TimeBlockForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ title, description, startTime, endTime, date });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="time"
          id="startTime"
          value={startTime}
          onChange={e => setStartTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endTime">End Time:</label>
        <input
          type="time"
          id="endTime"
          value={endTime}
          onChange={e => setEndTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Time Block</button>
    </form>
  );
};

export default TimeBlockForm;
