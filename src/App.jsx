import "./App.css";
import ExerciseItems from "./components/ExerciseItems/ExerciseItems";
import SideBar from "./components/SideBar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="row w-100">
          <div className="col-9">
            <ExerciseItems></ExerciseItems>
          </div>
          <div className="col-3">
            <SideBar></SideBar>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
