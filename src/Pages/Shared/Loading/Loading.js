import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <span className="h4">please wait</span>

      <div className="d-flex justify-content-center">
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
    </div>
  );
};

export default Loading;
