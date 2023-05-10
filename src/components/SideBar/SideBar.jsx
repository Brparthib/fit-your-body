import React from "react";
import img from "../../images/rdj.jpg";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar bg-success">
      <div className="aboutme">
        <div className="row">
          <div className="col-3">
            <img src={img} alt="" />
          </div>
          <div className="col-9">
            <p>Zahid Hossain</p>
            <span>
              
            </span>
            <span>Chittagong,Bangladesh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
