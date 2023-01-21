import SigninEl from "component/SignIn/SigninEl";
import React, { useState } from "react";
import airplan from "assets/LoginpageIcon/airplan.svg";
import sky1 from "assets/LoginpageIcon/sky1.svg";
import skyright4 from "assets/LoginpageIcon/skyright4.svg";
import sky3 from "assets/LoginpageIcon/sky3.svg";
import Carousel from "react-bootstrap/Carousel";
import firstcloum from "assets/LoginpageIcon/firstcloum.svg";
import secondcloumn from "assets/LoginpageIcon/secondcloumn.svg";
import bigSky from "assets/LoginpageIcon/bigSky.svg";

import "./index.scss";

function LoginPage() {
  return (
    <div className="login-container ">
      <div className="login-sign">
        <div className="login-left">
          <img src={airplan} alt={airplan} className="airplan-img" />
          <img className="skyimg-1" src={sky1} alt={sky1} />
          <img className="skyimg-2" src={sky3} alt={sky3} />
          <img className="skyimg-3" src={sky3} alt={sky3} />
          <img className="skyimg-4" src={skyright4} alt={skyright4} />
          <img className="skyimg-5" src={skyright4} alt={skyright4} />
          <img className="skyimg-6" src={skyright4} alt={skyright4} />
          <img className="big-1" src={bigSky} alt={bigSky} />
          <img className="big-2" src={bigSky} alt={bigSky} />
          <Carousel className="Carousel">
            <Carousel.Item>
              <div className="slider-text">
                “ <br />
                We have been using this service to book flights and can’t
                imagine working without it.“
              </div>
              <p className="slider-text1">Olivia </p>
              <p className="slider-text1">Brand Manager, Yatra</p>
            </Carousel.Item>
            <Carousel.Item>
              <div className="slider-text">
                <span> “</span> <br />
                We have been using this service to book flights and can’t
                imagine working without it.“
              </div>
              <p className="slider-text1">Olivia </p>
              <p className="slider-text1">Brand Manager, Yatra</p>
            </Carousel.Item>
            <Carousel.Item>
              <div className="slider-text">
                <span> “</span> <br />
                We have been using this service to book flights and can’t
                imagine working without it.“
              </div>
              <p className="slider-text1">Olivia </p>
              <p className="slider-text1">Brand Manager, Yatra</p>
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <SigninEl />
        </div>
      </div>
      <div className="footer-section">
        <p className="footer-text">corefares @ 2023</p>
        <p className="footer-text">About Us</p>
        <p className="footer-text">Privacy Policy</p>
        <p className="footer-text">Terms & Conditions</p>
      </div>
    </div>
  );
}

export default LoginPage;
