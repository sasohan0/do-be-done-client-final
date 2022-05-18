import React from "react";
import ManageItemsLink from "../../Shared/ManageItemsLink/ManageItemsLink";

const Home = (props) => {
  const parent = "home";
  return (
    <div>
      <div className="container">
        <ManageItemsLink></ManageItemsLink>
      </div>
    </div>
  );
};

export default Home;
