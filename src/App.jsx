import './App.css'
import ExerciseItems from './components/ExerciseItems/ExerciseItems'
import SideBar from './components/SideBar/SideBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className='mainContainer'>
        <ExerciseItems></ExerciseItems>
        <SideBar></SideBar>
      </div>
    </>
  )
}

export default App
