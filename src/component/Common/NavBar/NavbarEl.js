import React from "react";
import Battery from "assets/LiveStreamIcons/BatteryIcon.svg";
import CellularConnection from "assets/LiveStreamIcons/CellularConnectionIcon.svg";
import Wifi from "assets/LiveStreamIcons/WifiIcon.svg";
import "./index.scss";

function NavbarEl() {
  return (
    <div className="navbar-container">
      <div className="container-fluid navbar-el ">
        <div className="row">
          <div className="col-9 time-text">9:41</div>
          <div className="col-3 ">
            <img src={CellularConnection} alt={CellularConnection} />
            <img src={Wifi} alt={Wifi} className="mx-2" />
            <img src={Battery} alt={Battery} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarEl;
