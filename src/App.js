import React from "react";
import Welcome from "./components/organism/Welcome/Welcome";
import CardsSection from "./components/organism/CardsSection/CardSection";
import Skills from "./components/organism/Skills/Skills";
import { getGreetings } from "./helper/helper";
import Navbar from './components/organism/Navbar/Navbar';
//data
import { about } from "./data/about";
import { work } from "./data/work";
import { school } from "./data/school";

//css
import "./home.scss";
import "./styles/global.scss";
import WideCardSection from "./components/organism/WideCardsSection/WideCardsSection";


function App() {
  return (
    <>
    <Navbar/>
    <div className="home global">
      <Welcome />
      <CardsSection
        title={getGreetings()}
        subTitle="Some little notes about me"
        data={about}
      />
      <Skills/>
      <CardsSection
        height="405px"
        title="Experience"
        subTitle="where I worked from 2017-present"
        data={work}
      />
      <WideCardSection/>
      <CardsSection
        title="School"
        subTitle="Where I got my knowledge from"
        data={school}
      />
    </div>
    </>
  );
}

export default App;
