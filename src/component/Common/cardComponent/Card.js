import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import menuIcon from "assets/LiveStreamIcons/menuIcon.svg";
import VolumeDownIcon from "assets/LiveStreamIcons/VolumeDownIcon.svg";
import HeartIcon from "assets/LiveStreamIcons/HeartIcon.svg";
import LogoutIcon from "assets/LiveStreamIcons/LogoutIcon.svg";
import ChatIcon from "assets/LiveStreamIcons/ChatIcon.svg";
import PlusIcon from "assets/LiveStreamIcons/PlusIcon.svg";
import monsterImg from "assets/pagePng/monsterImg.png";
import monsterimg2 from "assets/pagePng/monsterimg2.png";

import "./index.scss";

function Card({ backgroundImg }) {
  const [symbolData, setSymbolData] = useState([
    { id: 0, imgUrl: HeartIcon, count: 0 },
    { id: 1, imgUrl: ChatIcon, count: "200" },
    { id: 0, imgUrl: LogoutIcon, count: "" },
  ]);

  const LikePage = (index) => {
    if (index === 0) {
      let data = [...symbolData];
      data[0].count += 1;
      setSymbolData(data);
    }
  };
  return (
    <div
      className="card-el"
      style={{ backgroundImage: `URL(${backgroundImg})` }}
    >
      <div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div
              className="img-icon"
              style={{ backgroundImage: `URL(${backgroundImg})` }}
            ></div>
            <p className="cake-text">Cakes & Cheese</p>
            <Button className="fallow-button">Fallow</Button>
          </div>
          <div className="d-flex align-self-start padding-right">
            <img src={menuIcon} alt={menuIcon} className="mx-4" />
            <img src={VolumeDownIcon} alt={VolumeDownIcon} />
          </div>
        </div>
        <p className="card-text">Get your fresh birthday cake today</p>
      </div>
      <div className="d-flex flex-column">
        <div className="align-self-end padding-right">
          {symbolData.map((item, parentIndex) => {
            return (
              <div className="frame-container" key={parentIndex}>
                <div
                  className="heart-frame "
                  onClick={() => {
                    LikePage(parentIndex);
                  }}
                >
                  <img src={item.imgUrl} alt={item.imgUrl} />
                </div>
                {item.count !== "" ? (
                  <p className="heart-text">{item.count}</p>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className="d-flex overflow-hidden py-4">
          <div className="monster-card">
            <div
              className="monster-right"
              style={{
                backgroundImage: `URL(${monsterImg})`,
              }}
            ></div>
            <div className="card-left">
              <p className="monster-heading">Monster Energy</p>
              <p className="monster-weight">500 gm</p>
              <div className="d-flex py-2">
                <p className="crossPrize">Rs 1599</p>
                <p className="greenPrize ">Rs 1299</p>
                <img src={PlusIcon} alt={PlusIcon} />
              </div>
            </div>
          </div>
          <div className="monster-card margin-left">
            <div
              className="monster-right"
              style={{
                backgroundImage: `URL(${monsterimg2})`,
              }}
            ></div>
            <div className="card-left">
              <p className="monster-heading">Monster Energy</p>
              <p className="monster-weight">500 gm</p>
              <div className="d-flex py-2">
                <p className="crossPrize">Rs 1599</p>
                <p className="greenPrize ">Rs 1299</p>
                <img src={PlusIcon} alt={PlusIcon} />
              </div>
            </div>
          </div>
        </div>

        <div className="duration-container">
          <p className="green-color"></p>
          <p className="whiteColor"></p>
          <p className="duration">10 : 05 min</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
