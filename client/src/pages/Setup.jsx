import "nes.css/css/nes.css";
import TimeBlockForm from "../components/timeblockFrom";
import TimeBlockList from "../components/TimeblockList";
function Setup() {


  return (
<div className="dashboard nes-container is-dark with-title">
      <h2 className="title">Plan a Day</h2>
      <div className="dash-component">
        <TimeBlockList />
      </div>
      <div className="dash-component form-group">
        <TimeBlockForm />
      </div>
    </div>
  );
};

export default Setup