import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function History() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const completed = tasks.filter((t) => t.completed);
    const deleted = tasks.filter((t) => t.deleted);

    return (
        <>
            <Navbar />
            <div className="sidebar"><Sidebar /></div>
            <div className="hispage">
                <h2>Task History</h2>

                <h3>Completed</h3>
                <ul>
                    {completed.map((t) => (
                        <div className='his' key={t.id}>
                            <s>{t.name}</s> ({t.dueDate})
                        </div>
                    ))}
                </ul>

                <h3>Deleted</h3>
                <ul>
                    {deleted.map((t) => (
                        <div className="hispage" key={t.id}>{t.name}</div>
                    ))}
                </ul>

                <Link to="/TaskPage"  className="back-link" >Back</Link>
            </div>
        </>
    );
}

export default History;
