import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Messi.css";
import { AuthContext } from "../context/authcontext";

export const Header = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="header">
      <div className="howwork">ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
      {currentUser ? (
        <>
          <Link to="/history/:page/:limit">
            <button className="buttonlogin">Түүх</button>
          </Link>
          <p>{currentUser.email}</p>
        </>
      ) : (
        <Link to="/login">
          <button className="buttonlogin">НЭВТРЭХ</button>
        </Link>
      )}
    </div>
  );
};
export default Header;
