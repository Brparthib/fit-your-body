import "./App.css";
import ExerciseItems from "./components/ExerciseItems/ExerciseItems";
import SideBar from "./components/SideBar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { addExerciseTime } from "./utilities/fakeDb";
import { useState } from "react";

function App() {
  let clickedTime = localStorage.getItem("exercise-time");
  const [exerciseTime, setExerciseTime] = useState(0);
  const handleAddToList = (selectedTime) => {
    addExerciseTime(selectedTime);
    if (!clickedTime) {
      clickedTime = selectedTime;
    } else {
      clickedTime = parseInt(clickedTime) + selectedTime;
    }
    setExerciseTime(clickedTime);
  };

  return (
    <>
      <div className="mainContainer">
        <div className="row w-100">
          <div className="col-9">
            <ExerciseItems handleAddToList={handleAddToList}></ExerciseItems>
          </div>
          <div className="col-3">
            <SideBar clickedTime={exerciseTime}></SideBar>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
