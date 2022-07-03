import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const taskList = tasks.map((todoItem) => (
    <Task
      key={todoItem["text"]}
      text={todoItem["text"]}
      category={todoItem["category"]}
      onDelete={onDelete}
    />
  ));

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
