import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDelete(deletedText) {
    setTasks(tasks.filter((task) => task.text !== deletedText));
  }

  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category == category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <div className="tasks">
        <NewTaskForm
          categories={CATEGORIES.filter((category) => category !== "All")}
          onTaskFormSubmit={handleAddTask}
        />
        <TaskList onDelete={handleDelete} tasks={visibleTasks} />
      </div>
    </div>
  );
}

export default App;
