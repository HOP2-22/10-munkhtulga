import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"

export const Home=()=>{
return(
    <div className="con">
        <div className="team">team</div>
        <div className="Navbar">
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>    
        <Link to="/contact">Contact</Link>
        <Link to="/login">Log in</Link>
        <div className="buttonone">Get Access</div></div>
    </div>
)
    

}
export default Home;