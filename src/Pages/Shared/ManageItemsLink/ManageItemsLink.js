import React from "react";
import { useNavigate } from "react-router-dom";

const ManageItemsLink = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center mt-3 mb-5">
      <button
        onClick={() => navigate("/inventory")}
        className="btn btn-link text-danger text-decoration-none fs-5"
      >
        Manage Items --&gt;
      </button>
    </div>
  );
};

export default ManageItemsLink;
