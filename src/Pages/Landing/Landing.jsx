import React from "react";
import "./Landing.css";
import menu from "../../Assets/Menu.svg";
import nft1 from "../../Assets/nft1.png";
import nft2 from "../../Assets/nft2.png";
import JoinBox from "../../Components/JoinBox";
function Landing() {
  return (
    <div className="landing-cont">
      <div className="landing">
        <h1 className="main-h1">Flocked</h1>
        <p className="main-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="box-landing">
          <div className="top-box">
            <img src={menu} alt="" />
            <h2 className="main-text">MAIN</h2>
          </div>
          <div className="main-box">
            <h2>
              Choose 1 of 9 colors by clicking <br /> any block on the Board, be
              creative! <br /> <br /> some example:
            </h2>
            <div className="nft-div">
              <img src={nft1} alt="" className="nft" />
              <img src={nft2} alt="" className="nft" />
              <h2>
                Create something <br className="sndbr" /> and retweet:
              </h2>
            </div>
            <p className="main-box-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="join-row">
          <JoinBox />
          <JoinBox />
        </div>
      </div>
    </div>
  );
}

export default Landing;
