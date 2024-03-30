import React from "react";
import "./Tasks.css";
import Task from "./components/Task";
import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      taskStatus: "Open Tasks",
      taskNumber: 223,
      id: Math.random(),
      color: "#f8710f",
    },
    {
      taskStatus: "Pending Tasks",
      taskNumber: 57,
      id: Math.random(),
      color: "#968ff8",
    },
    {
      taskStatus: "Completed Tasks",
      taskNumber: 1425,
      id: Math.random(),
      color: "#2ecc71",
    },
  ]);

  return (
    <div className="tasks">
      <p>My Tasks Stats</p>
      <div className="tasksInner">
        {tasks.map((task) => (
          <Task
            key={task.id}
            taskStatus={task.taskStatus}
            taskNumber={task.taskNumber}
            color={task.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
