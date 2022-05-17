import React from "react";
import "./Header.css";
import menu from "../../Assets/Menu.svg";
import window from "../../Assets/Windows.svg";
import { Link } from "react-router-dom";
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
          <Link to={"/"} className="nav-links">
            Mint
          </Link>
          <Link to={"/"} className="nav-links">
            Stake
          </Link>
          <Link to={"/"} className="nav-links">
            Connect Wallet
          </Link>
          <Link to={"/faq"} className="nav-links">
            FAQs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
