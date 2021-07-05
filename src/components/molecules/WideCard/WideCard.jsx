import React from "react";
import { Accordion } from "react-bootstrap";
import Link from "../../atoms/Link/Link";
import Title from "../../atoms/Title/Title";
import ufruit from '../../../assets/ufruit.mp4';
//css
import "./wideCard.scss";
import { ArrowDown } from "react-feather";

const WideCard = (props) => {
  const { title, date, desc, link, url, index } = props;

  const LeftCard = () => {
    return (
      <div className="wideCard-left">
        <Title title={title} />
        <div>{date}</div>
        <div>{desc}</div>
        <Link href={link} text="Learn More" />
      </div>
    );
  };
  const RightCard = () => {
    return (
      <div className="wideCard-right">
        <img
          width="100px"
          height="100px"
          alt="project"
          src={url}
        />
      </div>
    );
  };

  return (
    <>
      <Accordion.Toggle eventKey={index}>
        <div className="wideCard">
          <LeftCard />
          <RightCard />
        </div>
        <ArrowDown/>

      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
      <video width="320" height="240" controls>
        <source src={ufruit} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      </Accordion.Collapse>
    </>
  );
};

export default WideCard;
