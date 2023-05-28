import React from "react";
import Image from "../Images/JahonTalim.png";
import AboutHeader from "./components/AboutHeader";
import "../Styles/About.css";
import AboutMiddlePart from "./components/AboutMiddlePart";
import AbouFooter from "./components/AbouFooter";

function AboutUs() {
  return (
    <>
      <div className="About_container">
        <div className="flex_wrap">
          <div className="wrap">
            <h1 className="capital_word">Biz haqimizda</h1>
            <h3 className="description">Biz haqimizda malumot ! </h3>
          </div>
          <div className="wrap2">
            <img src={Image} width={400} height={400} alt="" />
          </div>
        </div>
        <AboutHeader />
        <AboutMiddlePart />
      </div>
      <AbouFooter/>
    </>
  );
}

export default AboutUs;
