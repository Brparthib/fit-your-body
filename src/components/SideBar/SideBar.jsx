import React from "react";
import img from "../../images/rdj.jpg";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="sideBar bg-success">
      <div className="aboutme">
        <div className="row">
          <div className="col-2">
            <img src={img} alt="" />
          </div>
          <div className="col-10 ps-4">
            <h6>Zahid Hossain</h6>
            <span>
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              Chittagong,Bangladesh
            </span>
          </div>
        </div>
      </div>
      <div className="bodyInfo mt-5">
        <div className="card">
          <div className="card-body">
            <div className="row text-center ju">
              <div className="col-4">
                <h5>75Kg</h5>
                <p>Weight</p>
              </div>
              <div className="col-4">
                <h5>6.5</h5>
                <p>Height</p>
              </div>
              <div className="col-4">
                <h5>25Yr</h5>
                <p>Weight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
