import React from "react";
import "./Item.css";
import gym from "../../images/gym.jpg"

const Item = (props) => {
  const { img, name, age, time, about } = props.item;
  return (
    <div className="item col-4">
      <div className="card">
        <img src={gym} className="card-img-top" alt="img" />
        <div className="card-body">
          <h4>{name}</h4>
          <p>{about}</p>
          <span>For Age: {age}</span>
          <span>Time required: {time}s</span>
          <button type="button" className="btn btn-info mt-3">Small button</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
