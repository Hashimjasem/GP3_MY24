import React from "react";
import TimeBlockList from "../components/TimeblockList";
import JournalDisplay from "../components/journalDisplay";

function Dashboard() {
  return (
    <div className="dashboard nes-container is-dark with-title ">
      <h2 className="title">Dashboard</h2>


      <div className="dash-component">
        <h2>Todays Timeblocks</h2>
        <TimeBlockList />
      </div>


      <div className="dash-component">
        <JournalDisplay />
      </div>


    </div>
  );
}

export default Dashboard;
