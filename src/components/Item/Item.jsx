import React from "react";
import "./Item.css";
import gym from "../../images/gym3.webp";

const Item = (props) => {
  const { handleAddToList, item } = props;
  const { name, age, time, about } = item;

  return (
    <div className="item col-4">
      <div className="card">
        <img src={gym} className="card-img-top" alt="img" />
        <div className="card-body">
          <h4>{name}</h4>
          <p>{about}</p>
          <span>For Age: {age}</span>
          <span>Time required: {time}s</span>
          <button
            type="button"
            onClick={() => handleAddToList(time)}
            className="btn add-btn mt-3"
          >
            Add To List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
