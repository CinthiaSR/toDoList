import Task from "./Task";
import React from "react";
import { getTaskDay } from "../helpers/getTaskDay";
// eslint-disable-next-line react/prop-types
const ListTask = ({ dateM, tasks, setTasks }) => {
  const currentTasks = getTaskDay(dateM, tasks)

  return (
    <section className="max-w-[450px] m-auto pb-7 pt-1 px-4">
      {
        currentTasks.map(item => (
          <Task
            key={item.id}
            item={item}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))
      }
    </section>
  )
}

export default ListTask;
