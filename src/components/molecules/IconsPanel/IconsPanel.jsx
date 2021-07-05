import React from "react";
import { icons } from "../../../data/icons";

//css
import "./iconsPanel.scss";

const IconsPanel = (props) => {
  return (
    <div className="iconsPanel">
      {icons.map((icon, index) => {
        return (
          <a href={icon.url}>
            <img alt={icon.alt} width="30px" height="30px" src={icon.src} />
          </a>
        );
      })}
    </div>
  );
};

export default IconsPanel;
