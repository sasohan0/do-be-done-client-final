import React from "react";
import { Card } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="w-100">
      <Card className="bg-dark text-white">
        <Card.Img src="notFound.jpg" alt="Card image" />
        <Card.ImgOverlay className="text-center mt-5 h3">
          <Card.Title className="display-3 fw-bolder">
            {" "}
            404 Not Found
          </Card.Title>
          <Card.Text>
            The page you are searching for is not available . Please check
            spelling.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default NotFound;
