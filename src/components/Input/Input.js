import "./Input.css";
import Button from "../Button/Button";
import { useState } from "react";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    props.addTodo(inputValue);
    setInputValue("");

    // const newTask = inputValue;
    //  props.taskName(newTask);
    // console.log("NewTask from Input", newTask);
  };

  return (
    <>
      <form className="add-task-container" onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="What is your task for today?"
          onChange={handleInputValue}
          value={inputValue}
        />
        <Button btnText={props.btnText} />
      </form>
    </>
  );
};

export default Input;
