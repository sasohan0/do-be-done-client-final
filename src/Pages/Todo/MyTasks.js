import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import useTasks from "../../Hooks/useTasks";
import Task from "./Task";

const MyTasks = () => {
  const [tasks] = useTasks();

  return (
    <div>
      <h1>Your Tasks</h1>

      <div className=" row g-5">
        {tasks.map((task) => (
          <Task key={task._id} task={task}></Task>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
