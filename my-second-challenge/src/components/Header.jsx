import React, { useEffect, useState } from "react";
import "../styles/Home.css"
import {Link} from "react-router-dom"

export const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(()=> {
    const onScroll = () => setOffset(window.pageYOffset);

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  console.log(offset);

  return (
    <div className="con" style={{ position: "fixed" }}>
      <div className="Navbar" style={{ backgroundColor: offset === 0 ? "transparent" : "white" }}>
      <div className="team" style={{ color: offset === 0 ? "transparent" : "#0BBEF2" }}>team
      <div className="bluebox" style={{ backgroundColor: offset === 0 ? "transparent" : "#0BBEF2" }}></div></div>
      <div className="linkheaders">
      <Link  className="linkheader" to="/products" style={{ color: offset === 0 ? "transparent" : "#0BBEF2" }}>Products</Link>
      <Link className="linkheader"  to="/services" style={{ color: offset === 0 ? "transparent" : "#0BBEF2" }}>Services</Link>
      <Link  className="linkheader" to="/contact" style={{ color: offset === 0 ? "transparent" : "#0BBEF2" }}>Contacts</Link>
      <Link  className="linkheader" to="/login"  style={{ color: offset === 0 ? "transparent" : "#0BBEF2" }}>Login</Link>
      <div className="buttontwo" style={{ color: offset === 0 ? "transparent" : "gray" }}>Get Access</div></div>
      



      </div>
     
      
      
    </div>
  )
}