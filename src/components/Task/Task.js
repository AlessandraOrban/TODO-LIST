import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Task = (props) => {
  console.log("PROPS", props);
  return (
    <div className="task-container">
      {props.taskName}
      <div className="icons">
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => props.deleteTask(props.id)}
        />
      </div>
    </div>
  );
};

export default Task;
