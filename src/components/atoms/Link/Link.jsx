import React from "react";

//css
import "./link.scss";

const Link = (props) => {
  const { text, link, className } = props;

  return (
    <a className={`link ${className}`} href={link}>
      {text}
    </a>
  );
};

export default Link;