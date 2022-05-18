import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div
      className="w-100 bg-dark d-flex justify-content-center align-items-center"
      style={{ height: "400px", marginTop: "20%" }}
    >
      <small className="text-white ">@reserved{date}</small>
    </div>
  );
};

export default Footer;
