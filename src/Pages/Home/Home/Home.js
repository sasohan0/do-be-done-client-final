import React from "react";

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
