import React from "react";
import "../Tasks.css";

const Task = ({ taskStatus, taskNumber, color }) => {
  return (
    <div className="task" style={{ background: color }}>
      <p>{taskStatus}</p>
      <p>{taskNumber}</p>
    </div>
  );
};

export default Task;
