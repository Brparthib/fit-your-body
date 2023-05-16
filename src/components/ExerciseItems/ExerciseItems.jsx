import React, { useEffect, useState } from "react";
import "./ExerciseItems.css";
import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const ExerciseItems = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("itemData.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="exerciseItems">
      <div className="logo">
        <span>
          <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
        </span>
        <span>Fit-Your-Body</span>
      </div>
      <div className="row">
        {items.map((item) => (
          <Item
            key={item.index}
            item={item}
            handleAddToList={props.handleAddToList}
          ></Item>
        ))}
      </div>
    </div>
  );
};

export default ExerciseItems;
