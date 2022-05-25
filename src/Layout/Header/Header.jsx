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
          {/* <div className="pattern"></div> */}
          <img src={window} alt="" className="window" />
        </div>
        <div className="bottom-header">
          <div className="left-bottom-header">
            <a href={"#"} className="nav-links">
              Mint
            </a>
            <a href={"#"} className="nav-links">
              Stake
            </a>
            <a href={"#"} className="nav-links">
              Connect Wallet
            </a>
          </div>
          <div className="right-bottom-header">
            <h1>$AVAX: 33.75</h1>
            <h1>$EGG: .439</h1>
            <h1>$FERT: .061</h1>
            <h1>GAS: 31</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
