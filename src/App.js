import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Task from "./components/Task/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTodo = (task, index) => {
    setTasks([
      ...tasks,
      {
        id: index,
        taskName: task,
        isEditing: false,
      },
    ]);
    // console.log("Tasks", tasks);
    // console.log("Task ---", task);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Get Things Done!</h1>
      <Input btnText="Add task" addTodo={addTodo} />
      <Input btnText="Update task" />
      {tasks.map((task, index) => (
        <Task taskName={task.taskName} key={index} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default App;
