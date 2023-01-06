import React from "react";
import "../styles/Messi.css"
import Footer from "../assets/Footer"
import Header from "../assets/HeaderwithName"
import InputLink from "../assets/InputLink";
import Logo from "../assets/Logo";
export const HomeLoggedin=()=>{
return(
<div className="Home">
<Header/>
<Logo/>
<InputLink/>
<Footer/>
</div>
)
}
export default HomeLoggedin;