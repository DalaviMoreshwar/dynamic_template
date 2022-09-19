import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="navbar container-fluid ">
      <div>Tempates</div>
      <div className="d-flex">
        <Link to="/create-template" className="d-flex">
          <button type="button" className="btn btn-primary">
            Create
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
