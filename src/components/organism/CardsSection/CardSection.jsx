import React from "react";
import Card from "../../molecules/Card/Card";
import SectionTitle from "../../molecules/SectionTitle/SectionTitle";
import Zoom from 'react-reveal/Zoom';

//css
import "./cardsSection.scss";

function CardsSection(props) {
  const { title, subTitle, data, height} = props;
  return (
    <Zoom top cascade>
    <div className="cardsSectionContainer">
      <SectionTitle title={title} subTitle={subTitle} />
      <div className="cardsSection">
        {data.map((card, index) => {
          return (
            <Card
              index={index}
              height={height}
              {...card}
            />
          );
        })}
      </div>
    </div>
        </Zoom>
  );
}

export default CardsSection;
