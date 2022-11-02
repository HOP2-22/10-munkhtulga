import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@600;800&display=swap');
</style>

export const Home = () => {
    return (
  
<div className="container">
<div className="page1">
<div className="text1">Instant collaborations for remote teams</div>        
<div className="text2">All in one for your remote team chats,  collaboration and team projects</div>            
<input className="input1"type="email" placeholder="Email"/>  
<button className="button1">Get early access</button></div>
<div className="page2">
<div className="text3">Your Hub for teamwork</div>
<div className="text4">Give everyone you work with--inside and outside your company--a more
     productive way to stay in sync. Respond faster with emoji, keep conversations 
     focused in channels, and simplify all your communication into one place.</div>    
     <Link className="link1"> Learn more</Link>
     <img className="img1" ></img>
</div>
<div className="page3">
     <img className="img2"  ></img>
<div className="text5">Simple task management</div>
<div className="text6">Give everyone you work with--inside and outside your company--a more
     productive way to stay in sync. Respond faster with emoji, keep conversations 
     focused in channels, and simplify all your communication into one place.</div>
     <Link className="link2">Learn more</Link>
</div>
<div className="page4">
     <img className="img3" ></img>
<div className="text7">Scheduling that actually works</div>
<div className="text8">Give everyone you work with--inside and outside your company--a more
     productive way to stay in sync. Respond faster with emoji, keep conversations 
     focused in channels, and simplify all your communication into one place.</div>
<Link className="link3">Learn more</Link>
</div>
<div className="page5">
<div className="text9">What people say about us</div>
<div className="boxes">
<div className="box1"><div className="boxtext">Give everyone you work with--inside and outside your company--a more
     productive way to stay in sync. Respond faster with emoji, keep conversations 
     focused in channels, and simplify all your communication into one place.</div></div>
<div className="box2"><div className="boxtext">Give everyone you work with--inside and outside your company--a more
     productive way to stay in sync. Respond faster with emoji, keep conversations 
     focused in channels, and simplify all your communication into one place.</div></div>
<div className="box3"><div className="boxtext">Give everyone you work with--inside and outside your company--a more
     productive way to stay in sync. Respond faster with emoji, keep conversations 
     focused in channels, and simplify all your communication into one place.</div></div></div> 
     <div className="names"><div className="name1">Amy Klassen</div>
     <div className="name2">Jane Cooper</div>
     <div className="name3">Eleanor Pesa</div></div>
    </div>
    </div>
      )  
}
export default Home