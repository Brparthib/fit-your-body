import React, { useEffect, useState } from "react";
import img from "../../images/rdj.jpg";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { addBreakTime } from "../../utilities/fakeDb";

const SideBar = () => {
  const breakTimes = [10, 20, 30, 50];

  const handleBreakTime = (selectedTime) => {
    addBreakTime(selectedTime);
  }

  return (
    <div className="sideBar">
      <div className="aboutMe">
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
      <div className="bodyInfo my-4 pt-2">
        <div className="b-item p-2 mx-3 text-center">
          <h5>75Kg</h5>
          <p>Weight</p>
        </div>
        <div className="b-item p-2 mx-3 text-center">
          <h5>6.5</h5>
          <p>Height</p>
        </div>
        <div className="b-item p-2 mx-3 text-center">
          <h5>25yr</h5>
          <p>Weight</p>
        </div>
      </div>
      <div className="title my-3">
        <h5>Add A Break</h5>
      </div>
      <div className="add_break">
        {breakTimes.map((time) => (
          <span
            key={breakTimes.indexOf(time)}
            onClick={() => handleBreakTime(time)}
          >
            {time}s
          </span>
        ))}
      </div>
      <div className="title my-3">
        <h5>Exercise Details</h5>
      </div>
      <div className="exerciseDetail">
        <div className="xr-time">
          <div className="row">
            <div className="col-6">Exercise Time</div>
            <div className="col-6 text-end">{newTime} seconds</div>
          </div>
        </div>
        <div className="br-time">
          <div className="row">
            <div className="col-6">Break Time</div>
            <div className="col-6 text-end">15 seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
