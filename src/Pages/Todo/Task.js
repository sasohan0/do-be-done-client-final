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
    <div className="col col-12 col-lg-4 col-md-6 mx-auto">
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <p>{user} </p>
          <button
            className="btn btn-link"
            onClick={() => handleTaskRemove(_id)}
          >
            <img
              style={{ width: "32px", height: "32px" }}
              src={Remove}
              alt=""
            />
          </button>
        </Card.Header>
        <Card.Body>
          <Card.Title className={checked ? "text-decoration-line-through" : ""}>
            {taskName}
          </Card.Title>
          <Card.Text className={checked ? "text-decoration-line-through" : ""}>
            {taskDescription}
          </Card.Text>
          <Button
            className={checked ? "btn-success" : "btn-danger"}
            onClick={handleChecked}
          >
            {" "}
            Completed
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Task;
