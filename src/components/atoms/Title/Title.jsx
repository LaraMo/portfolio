import React from "react";
import "./title.scss";

const Title = (props) => {
  const { title, type, color } = props;

  return (
    <div sytle={{ color: color }} className={`title-${type}`}>
      {title}
    </div>
  );
};

Title.defaultProps = {
  type: "reg",
};

export default Title;
