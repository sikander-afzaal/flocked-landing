import React from "react";
import "./Landing.css";
import menu from "../../Assets/Menu.svg";
import tri from "../../Assets/tri.png";
import JoinBox from "../../Components/JoinBox";
import Faq from "../Faq/Faq";
function Landing() {
  return (
    <div className="landing-cont">
      <div className="landing">
        <h1 className="main-h1">Flocked</h1>
        <p className="main-desc">
          flocked aims to provide the most efficient and worry free way to
          participate in the chikn ecosystem. chikn presents an incredibly
          rewarding, dynamic, and complex set of assets to optimally manage with
          limited resources. potential barriers of entry exist for new entrants
          in terms of time, defi knowledge, game strategy, and capital outlay.
          flocked strives to eliminate these barriers.
        </p>
        <p className="main-desc">
          🥚Mint NFT, hold in wallet, receive $EGG passively weekly
        </p>
        <p className="main-desc">
          {" "}
          The core team of flocked are early crypto, Avalanche, and chikn
          adopters. Previous ventures include technical operations, traditional
          finance, and guild management.
        </p>
        <p className="main-desc">
          flocked is not affiliated with the chikn.farm team. We would like to
          consider the chikn team dear frens.
        </p>
        <div className="box-landing">
          <div className="top-box">
            <img src={menu} alt="" />
            <h2 className="main-text">MAIN</h2>
          </div>
          <div className="main-box">
            {/* <h2>
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
            </p> */}
            <h2>
              flockshares are ERC-721 non-fungible tokens on the Avalanche
              blockchain. Each flockshare represents a membership share in our
              collective. Mint NFT, hold in wallet, receive egg passively weekly
            </h2>
            <div className="content-box">
              <h1 className="heading-box">Utility</h1>
              <h2>bite sized participation in chicken</h2>
              <h2>passive yield distributed to your wallet weekly in egg</h2>
            </div>
            <div className="content-box">
              <h1 className="heading-box">Cost</h1>
              <h2>
                flockshares will launch at 1 avax (or approximately $30 USD) and
                be limited to 420. This initial allocation will allow us to
                procure an initial wallet comprised of:
              </h2>
              <ul className="list">
                <li>5 chikn ~160kg </li>
                <li>10 roostr apx ~100kg</li>
                <li>1 Farmland (size TBD)</li>
                <li>2500 egg/avax allocated to LP farming. </li>
              </ul>
              <h2>
                You are welcome to purchase multiple flockshare NFTs if you wish
                to secure a larger stake in membership benefits. Please note:
                our initial mint has been sized small to ensure both
                participation and ease in establishing operational procedures,
                it is our intent to offer further mints whenever there is
                demand.
              </h2>
            </div>
            <Faq />
            <div className="tri-layout">
              <div className="left-tri">
                <img src={tri} alt="" />
              </div>
              <div className="right-tri">
                <h2>Example image and text</h2>
                <h2>Your upgradeable chikn NFT, that lays $egg</h2>
                <h2>
                  $egg <br /> The governance and utility token of the chikn
                  ecosystem. Hodl, use, or sell on the open market
                </h2>
                <h2>
                  $feed <br /> Harvested at chikn.farm, eaten by chikn, or sold
                  on the open market{" "}
                </h2>
                <h2>
                  Lay <br /> Roost your chikn and lay $egg. Biggr chikn lay more
                  $egg
                </h2>
                <h2>
                  Farm <br /> Received $egg LP tokens are used to farm $feed at
                  chikn.
                </h2>
                <h2>
                  Size (Kg / KillerGainz) <br /> $feed permanently increases the
                  size of your chikn. It's written straight to the metadata of
                  your NFT
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="join-row">
          <JoinBox name={"Whitepaper"} />
          <JoinBox name={"Discord"} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
