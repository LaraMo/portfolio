import React from "react";
import Link from "../../atoms/Link/Link";
import Title from "../../atoms/Title/Title";

//css
import "./card.scss";

const Card = (props) => {
  const { topTitle, category, title, desc, url, height, index, more } = props;
  const topTitleIndex =  topTitle ? "" : "-index";
  return (
    <div className="cardContainer">
      <div className={`card-topTitle card-topTitle${topTitleIndex}`}>{topTitle ? topTitle : index + 1}</div>
      <div style={{ height: height }} className="card">
        <div className="card-left">
          <div className="card-category">{category}</div>
          <div className="card-titleDescLink">
            <Title title={title} />
            <div className="card-desc">{desc}</div>
            {more && <Link className="card-link" href={more} text="Learn More"/>}
          </div>
        </div>
        <div className="card-right">
          <img alt="supporting-img" className="card-img" src={url} />
        </div>
      </div>
    </div>
  );
};

export default Card;
