import React from "react";
import menu from "../Assets/Menu.svg";
import "./Join.css";
function JoinBox() {
  return (
    <div className="join-box">
      <div className="top-box">
        <img src={menu} alt="" />
        <h2 className="main-text">Join</h2>
      </div>
      <div className="main-join">
        <h2>Join Our Discord</h2>
      </div>
    </div>
  );
}

export default JoinBox;
