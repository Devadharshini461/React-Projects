import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function TaskPage() {
  
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (!taskName.trim()) return alert("Enter task name");
    const newTask = {
      id: Date.now(),
      name: taskName,
      priority,
      dueDate,
      completed: false,
      deleted: false,
    };
    setTasks([...tasks, newTask]);
    setTaskName("");
  }

  function markDone(id) {
    const updated = tasks.map((t) => (t.id === id ? { ...t, completed: true } : t));
    setTasks(updated);
  }

  function deleteTask(id) {
    const updated = tasks.map((t) => (t.id === id ? { ...t, deleted: true } : t));
    setTasks(updated);
  }

  function editTask(id) {
    const newName = prompt("Edit task name:");
    if (newName) {
      const updated = tasks.map((t) => (t.id === id ? { ...t, name: newName } : t));
      setTasks(updated);
    }
  }

  const today = new Date().toLocaleDateString();

  return (
    <div>
      <Navbar/>
      <div className="TaskPage-container">
      <div className="sidebar"><Sidebar/></div>
      <div className="main-content">
      <h2>Tasks ({today})</h2>
      <label>Task:</label>
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <br></br>
      <label>Priority:</label>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Normal</option>
        <option>High</option>
      </select>
      <br></br>
      <label>Due Date:</label>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <br></br>
      <button onClick={addTask}>+</button>

      <ul>
        {tasks.filter((t) => !t.completed && !t.deleted)
          .map((task) => (
            <div key={task.id} className="task-item">
              <b>Task:</b>{task.name} <br></br>
              <b>Priority:</b>{task.priority} <br></br>
              <b>Due Date:</b>{task.dueDate} <br></br>
              <button onClick={() => editTask(task.id)}>Edit</button>
              <button onClick={() => markDone(task.id)}>Done</button>
              <button onClick={() => deleteTask(task.id)}>Deleted</button>
            </div>
          ))}
      </ul>
      </div>
      </div>
      {/* <div>
        <Link to="/completed">Completed</Link> |{" "}
        <Link to="/deleted">Deleted</Link> |{" "}
        <Link to="/history">History</Link>
      </div> */}
    </div>
  );
}

export default TaskPage;
