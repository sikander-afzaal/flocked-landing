import React from "react";
import "./Header.css";
import menu from "../../Assets/Menu.svg";
import window from "../../Assets/Windows.svg";
function Header() {
  return (
    <div className="head-cont">
      <div className="header">
        <div className="top-header">
          <img src={menu} alt="" className="menu" />
          <div className="pattern"></div>
          <img src={window} alt="" className="window" />
        </div>
        <div className="bottom-header">
          <h2 className="nav-links">Mint</h2>
          <h2 className="nav-links">Stake</h2>
          <h2 className="nav-links">Connect Wallet</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
