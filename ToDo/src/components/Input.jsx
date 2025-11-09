import React, { useState } from "react";

function Input() {
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const input = document.getElementById("input").value.trim();
    const new1 = { id: tasks.length, task: input };
    const added = [...tasks, new1];
    setTasks(added);
    // localStorage.setItem("task", JSON.stringify(added));
    document.getElementById("input").value = ""; 
  }

  return (
    <div className="task">
      <h2>Tasks List</h2>
      <label>TASK:</label>
      <input type="text" id="input" placeholder="Task To be Performed" ></input><br></br><br></br>
      <button onClick={addTask}>ADD</button>
      <ul>
        {tasks.map((tsk) => (
          <li key={tsk.id}>{tsk.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Input;
