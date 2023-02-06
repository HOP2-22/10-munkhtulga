import React from "react";
import "../styles/Messi.css";

export const HeaderName = () => {
  return (
    <div className="headerwithname">
      <div className="howwork">ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
      <button className="namehere">
        Tulgaa
        <img className="icondown" src="/img/icon-down.png" />
      </button>
    </div>
  );
};
export default HeaderName;
