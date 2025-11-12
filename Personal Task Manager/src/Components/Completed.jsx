import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Completed() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const completed = tasks.filter((t) => t.completed);

  return (
    <>
    <Navbar/>
    <div className="sidebar"><Sidebar/></div>
    <div  className="completed-container">
      <h2>Completed Tasks</h2>
      <ul>
        {completed.length > 0 ? 
        (
          completed.map((t) => (
            <div key={t.id} className="completed-task">
              <s>{t.name}</s>
              <span className="completed-date">({t.dueDate})</span>
            </div>
          ))
        ) : (
          <p>No completed tasks</p>
        )}
      </ul>
      <Link to="/TaskPage" className="back-link">Back</Link>
    </div>
    </>
  );
}

export default Completed;
