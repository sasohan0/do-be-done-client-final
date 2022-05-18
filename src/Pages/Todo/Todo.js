import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Todo = () => {
  const [user, loading] = useAuthState(auth);
  const handleAddTask = async (e) => {
    e.preventDefault();
    const user = e.target.email?.value;
    const taskName = e.target.name.value;
    const taskDescription = e.target.description.value;

    const addedTask = {
      user: user,
      taskName: taskName,
      taskDescription: taskDescription,
    };
    fetch("https://fierce-sands-92783.herokuapp.com/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("successfully added");
      });
    const [userField, ...rest] = Array.from(document.querySelectorAll("input"));
    rest.forEach((input) => (input.value = ""));
    this?.setState({
      itemvalues: [{}],
    });
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Add Tasks</h1>
      <Form onSubmit={(e) => handleAddTask(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User</Form.Label>
          <Form.Control
            type="email"
            name="email"
            disabled
            value={user?.email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter task title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            type="text"
            placeholder="task details"
          />
        </Form.Group>

        <Button className="w-100 btn-danger" variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
    </div>
  );
};

export default Todo;
