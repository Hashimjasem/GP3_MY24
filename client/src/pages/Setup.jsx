import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TimeBlockForm from "../components/timeblockForm";

function Setup() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
  <>
  <section className="content">
    <p>Plan Your Day</p>
    
    
  </section>
  <TimeBlockForm/>
  </>
  )
}

export default Setup;