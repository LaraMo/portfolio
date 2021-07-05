import React from "react";
import { Accordion } from "react-bootstrap";
import { projects } from "../../../data/projects";
import SectionTitle from "../../molecules/SectionTitle/SectionTitle";
import WideCard from "../../molecules/WideCard/WideCard";

//css
import "./wideCardsSection.scss";

const WideCardSection = (props) => {
  return (
    <>
    <SectionTitle title="Projects" subTitle="that keep me busy" />
    <Accordion>
      {projects.map((project, index) => {
        return <WideCard index={index} {...project} />;
      })}
    </Accordion>
    </>
  );
};

export default WideCardSection;
