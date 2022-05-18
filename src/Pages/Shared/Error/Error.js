import React from "react";
import { Card } from "react-bootstrap";

const Error = ({ error }) => {
  console.log(error.message.slice(":"));
  return (
    <div className="w-100">
      <Card
        bg="danger"
        key="danger"
        text="dark"
        style={{ width: "18rem" }}
        className="mb-2 w-100"
      >
        <Card.Body>
          <Card.Title>{error.message}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Error;
