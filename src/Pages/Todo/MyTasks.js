import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import { Table } from "react-bootstrap";
import useTasks from "../../Hooks/useTasks";
import Task from "./Task";

const MyTasks = () => {
  const [tasks] = useTasks();

  return (
    <div className="container mt-5 ">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="responsive">Status</th>

            <th className="responsive">Task Name & Details</th>
            <th className="responsive">user </th>

            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task._id} task={task}></Task>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyTasks;
