import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Remove from "../../icons/remove.png";

const Task = ({ task }) => {
  const { _id, taskDescription, taskName, user } = task;
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    if (!checked) {
      toast("Good job ! Task completed.");
    }
  };

  const handleTaskRemove = (id) => {
    const confirmed = window.confirm("sure to remove?");
    if (confirmed) {
      fetch(`https://fierce-sands-92783.herokuapp.com/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <tr className="">
      <td>
        <Button
          onClick={handleChecked}
          className={checked ? "btn-success" : "btn-danger"}
        >
          {checked ? "Completed" : "Incomplete"}
        </Button>
      </td>

      <td
        className={`responsive ${
          checked ? "text-decoration-line-through" : ""
        }`}
      >
        <span className="fw-bolder text-uppercase">{taskName} </span>
        <br /> <span>{taskDescription}</span>
      </td>
      <td className="responsive">{user}</td>

      <td>
        <button onClick={() => handleTaskRemove(_id)} className="btn btn-dark">
          <img style={{ width: "32px", height: "32px" }} src={Remove} alt="" />
        </button>
      </td>
    </tr>
  );
};

export default Task;
