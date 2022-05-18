import React from "react";
import { Button } from "react-bootstrap";
import ManageItemsLink from "../../Shared/ManageItemsLink/ManageItemsLink";
import MyTasks from "../../Todo/MyTasks";
import Todo from "../../Todo/Todo";

const Home = (props) => {
  const parent = "home";
  return (
    <div>
      <div className="container">
        <Todo></Todo>
        <MyTasks></MyTasks>
      </div>
    </div>
  );
};

export default Home;
