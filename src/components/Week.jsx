import React from "react";
import {getWeekTasks} from "../helpers/getWeekTask";

// eslint-disable-next-line react/prop-types
const Week = ({tasks}) => {
  const weekTasks = getWeekTasks(tasks);
  // console.log("from comp. week", weekTasks);
  return (
    <section className="p-4">
      {weekTasks.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <div
          key={item.id}
          className="border border-black rounded bg-gray04 p-2 text-left mb-2 flex justify-between gap-2">
          <div className="bg-gray05 p-1 rounded min-w-[78px] text-center h-fit">
            <span>{item.day}</span>
            <div className="flex justify-center items-center">
              <span className="text-4xl">{item.numDay}</span>
              <span
                style={{writingMode: "vertical-lr"}}
                className="text-xs font-medium">
                {item.month}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 justify-end">
            {item.tasks.map((task) => (
              // eslint-disable-next-line react/jsx-key
              <span
                key={task.id}
                className="border border-black px-2 rounded bg-gray03 inline-block h-fit">
                {task.tasks}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Week;
