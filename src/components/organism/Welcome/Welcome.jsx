import React from "react";
import MainTitle from "../../molecules/MainTitle/MainTitle";
import IconsPanel from "../../molecules/IconsPanel/IconsPanel";
import superwoman from "../../../assets/superwoman.svg";

//css
import "./welcome.scss";


function Welcome() {

  return (
    <div className="welcome">
      <img className="welcome-img" src={superwoman} alt="superwoman" />
      <div className="welcome-name">
        <MainTitle type="large"/>
        <IconsPanel />
      </div>
    </div>
  );
}

export default Welcome;
