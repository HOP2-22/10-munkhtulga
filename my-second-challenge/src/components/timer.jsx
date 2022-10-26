import react, {useState,useEffect, useDebugValue} from "react";

export const timer=()=>{
     const [seconds,setseconds] = useState(00)
     const [minutes, setminutes] =useState(00)
     const [hours, sethours] =useState(00)
     const [active, setactive] =useState(false)
      useEffect(()=>{
          setInterval(() => {
              setseconds((seconds)=> seconds+1)
          }, 1000);
          setInterval(() => {
              setminutes((minutes)=> minutes +1)
          }, 60000);
          setInterval(() => {
              sethours((hours)=> hours+1)
          }, 360000);
      })







     return(
         <div className="container">
             <div className="hours"></div>
             <div className="minutes"></div>
             <div className="seconds"></div>
             <div className="start"></div>
             <div className="stop"></div>
             <div className="resume"></div>
             <div className="reset"></div>
         </div>
     )
}