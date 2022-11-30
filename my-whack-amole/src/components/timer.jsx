import React, { useState, useEffect } from "react";
import "../styles/sui.css"

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes]=useState(0);
  const [hours, sethours]=useState(0)
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0)
    sethours(0)
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
   if(seconds===60){
      setMinutes((minuts)=> minuts+1)
      setSeconds(0)
   }
   if(minutes===60){
    sethours((hours)=> hours+1)
    setMinutes(0)
 }
      
    } else if (!isActive && seconds !== 0,!isActive && minutes !== 0,!isActive && hours !== 0) {
      clearInterval(interval);
    }
  
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="seconds">{seconds}s</div>
      <div className="minutes">{minutes}m</div>
      <div className="hours">{hours}h</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;