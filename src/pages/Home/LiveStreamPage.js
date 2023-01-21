import React, { useState } from "react";
import "./index.scss";
import NavbarEl from "component/Common/NavBar/NavbarEl";
import Card from "component/Common/cardComponent/Card";

import img1 from "../../assets/pagePng/img1.jpg";
import img2 from "../../assets/pagePng/img2.jpg";
import img3 from "../../assets/pagePng/img-3.jpg";
import img4 from "../../assets/pagePng/img-4.jpg";

const cardData = [
  { id: 0, backgroundImg: img1 },
  { id: 1, backgroundImg: img2 },
  { id: 2, backgroundImg: img3 },
  { id: 2, backgroundImg: img4 },
  { id: 3, backgroundImg: img1 },
  { id: 4, backgroundImg: img2 },
  { id: 5, backgroundImg: img3 },
  { id: 6, backgroundImg: img4 },
];

function HomePage() {
  return (
    <div className="home-container">
      <NavbarEl />
      {cardData.map((item, index) => {
        return <Card key={index} backgroundImg={item.backgroundImg} />;
      })}
    </div>
  );
}

export default HomePage;
