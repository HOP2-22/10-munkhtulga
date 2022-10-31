import React, { useEffect, useState } from "react";
import "../styles/Home.css"

export const Header=()=>{

    const [offsetY, setoffsetY] = useState(0);
    const down = () => setoffsetY(window.scrollY);
    
    useEffect(()=>{
        window.addEventListener(("scroll", down))

        return ()=> window.removeEventListener("scroll")

    }, [])

  return(
        <div className="container" style={{position:"fixed"}}>
            <div className="team" style={{color: offsetY === 0 ? "transparent" : "white"}}>team</div>
            <div className="Navbar"></div> 
            <div className="buttonone">Get Access</div></div>
  )  
}