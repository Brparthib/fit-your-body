import React, { useEffect, useState } from "react";
import "./ExerciseItems.css";
import Item from "../Item/Item";

const ExerciseItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("itemData.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="exerciseItems">
      <div className="row">
          {items.map((item) => (
            <Item key={item.index} item={item}></Item>
          ))}
      </div>
    </div>
  );
};

export default ExerciseItems;
