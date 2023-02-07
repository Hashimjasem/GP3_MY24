import React from 'react';

const TimeBlock = ({ title, description, startTime, endTime }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>Start Time: {startTime}</p>
    <p>End Time: {endTime}</p>
  </div>
);

const TimeBlockList = ({ timeBlocks }) => (
  <div>
    {timeBlocks.map((timeBlock, index) => (
      <TimeBlock
        key={index}
        title={timeBlock.title}
        description={timeBlock.description}
        startTime={timeBlock.startTime}
        endTime={timeBlock.endTime}
      />
    ))}
  </div>
);

export default TimeBlockList;

