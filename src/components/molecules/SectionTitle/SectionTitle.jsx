import React from "react";
import Title from "../../atoms/Title/Title";

//css
import "./sectionTitle.scss";

const SectionTitle = (props) => {
  const { title, subTitle } = props;

  return (
    <div className="sectionTitle">
      <Title type="large" title={title} />
      <div>{subTitle}</div>
    </div>
  );
};

export default SectionTitle;
