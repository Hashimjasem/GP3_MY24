import { useState } from "react";
import "nes.css/css/nes.css";

function TimeBlockList() {
  const [currentTimeblockIndex, setCurrentTimeblockIndex] = useState(0);

  const timeblocks = [
    {
      title: "1000,000 pushups",
      startTime: "09:00am",
      endTime: "10:30am",
      desc: "best way to start your day",
      notesText:
        "it was easy peasy",
    },
    {
      title: "Another timeblock",
      startTime: "11:00am",
      endTime: "12:30pm",
      desc: "This is another timeblock",
      notesText:
        "This is some notes for this timeblock",
    },
    {
      title: "Yet another timeblock",
      startTime: "01:00pm",
      endTime: "02:30pm",
      desc: "This is yet another timeblock",
      notesText:
        "This is some notes for yet another timeblock",
    },
    {
      title: "Even more timeblocks",
      startTime: "03:00pm",
      endTime: "04:30pm",
      desc: "This is even more timeblocks",
      notesText:
        "This is some notes for even more timeblocks",
    },
    {
      title: "Timeblock 5",
      startTime: "05:00pm",
      endTime: "06:30pm",
      desc: "This is timeblock 5",
      notesText:
        "This is some notes for timeblock 5",
    },
    {
      title: "Timeblock 6",
      startTime: "07:00pm",
      endTime: "08:30pm",
      desc: "This is timeblock 6",
      notesText:
        "This is some notes for timeblock 6",
    },
    {
      title: "Timeblock 7",
      startTime: "09:00pm",
      endTime: "10:30pm",
      desc: "This is timeblock 7",
      notesText:
        "This is some notes for timeblock 7",
    },
    {
      title: "Timeblock 8",
      startTime: "11:00pm",
      endTime: "12:30am",
      desc: "This is timeblock 8",
      notesText:
        "This is some notes for timeblock 8",
    },
    {
      title: "Timeblock 9",
      startTime: "01:00am",
      endTime: "02:30am",
      desc: "This is timeblock 9",
      notesText:
        "This is some notes for timeblock 9",
    },
  ];

  const currentTimeblock = timeblocks[currentTimeblockIndex];

  const handlePrevButtonClick = () => {
    setCurrentTimeblockIndex(currentTimeblockIndex - 1);
  };

  const handleNextButtonClick = () => {
    setCurrentTimeblockIndex(currentTimeblockIndex + 1);
  };


    const [currentIndex, setCurrentIndex] = useState(0);
    const currentTimeBlock = timeblocks[currentIndex];
  
    return (
      <div className="container">
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          Prev
        </button>
        <div className="timeblock-card nes-container is-dark with-title">
          <div>
            <h2 className="title">{currentTimeBlock.title}</h2>
  
            <p>{currentTimeBlock.startTime}-{currentTimeBlock.endTime}</p>
            <p>{currentTimeBlock.desc}</p>
          </div>
          <h2>---------------------</h2>
          <div>
            <p>Notes</p>
            <p>{currentTimeBlock.notesText}</p>
          </div>
        </div>
        <button
          disabled={currentIndex === timeblocks.length - 1}
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          Next
        </button>
      </div>
    );
  }
  export default TimeBlockList;

