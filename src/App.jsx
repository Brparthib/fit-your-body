import "./App.css";
import ExerciseItems from "./components/ExerciseItems/ExerciseItems";
import SideBar from "./components/SideBar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { addExerciseTime } from "./utilities/fakeDb";

function App() {
  let clickedTime = localStorage.getItem('exercise-time');
  const handleAddToList = (selectedTime) => {
    addExerciseTime(selectedTime);
    clickedTime = clickedTime + selectedTime;
  };

  return (
    <>
      <div className="mainContainer">
        <div className="row w-100">
          <div className="col-9">
            <ExerciseItems handleAddToList={handleAddToList}></ExerciseItems>
          </div>
          <div className="col-3">
            <SideBar clickedTime={clickedTime}></SideBar>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
