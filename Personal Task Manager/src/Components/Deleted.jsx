import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Deleted() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const deleted = tasks.filter((t) => t.deleted);

    return (
        <>
            <Navbar />
            <div className="sidebar"><Sidebar /></div>
            <div className="delpage">
                <h2>Deleted Tasks</h2>
                <ul>
                    {deleted.length > 0 ? (
                        deleted.map((t) =>
                            <div className='del' key={t.id}>
                                {t.name}
                            </div>)
                    ) : (
                        <p>No deleted tasks</p>
                    )}
                </ul>
                <Link to="/TaskPage">Back</Link>
            </div>
        </>
    );
}

export default Deleted;
