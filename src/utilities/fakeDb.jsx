//use local storage to manage list data
const getStoredList = (str) => {
    let getTime = 0;
  //get the time from local storage
  const storedTime = localStorage.getItem(str);
  if (storedTime) {
    getTime = JSON.parse(storedTime);
  }

  return getTime;
};

const addExerciseTime = (time) => {
  let storedTime = getStoredList('exercise-time');

  if (!storedTime) {
    storedTime = time;
  } else {
    storedTime = storedTime + time;
  }
  localStorage.setItem("exercise-time", JSON.stringify(storedTime));
};

const addBreakTime = (time) => {
  localStorage.setItem("break-time", JSON.stringify(time));
};

export { getStoredList, addExerciseTime, addBreakTime };
