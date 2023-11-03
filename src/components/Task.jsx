import React from "react";
import Options from "./Options";
import {taskDone} from "../helpers/tasksDone";

// eslint-disable-next-line react/prop-types
const Task = ({item, tasks, setTasks}) => {
  const handleDone = () => {
    setTasks(taskDone(item.id, tasks));
  };

  return (
    <div className="flex justify-normal gap-4 items-center my-4">
      <span className="cursor-pointer flex items-center">
        <input
          className="checkbox"
          type="checkbox"
          onClick={(e) => handleDone(e)}
          defaultChecked={item.done}
        />
      </span>
      <p className="grow text-left">{item.tasks}</p>
      <span className=" cursor-pointer">
        <Options idTask={item.id} tasks={tasks} setTasks={setTasks} />
      </span>
    </div>
  );
};

export default Task;
