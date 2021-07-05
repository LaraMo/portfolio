import React from "react";
import moment from "moment";
import SectionTitle from "../../molecules/SectionTitle/SectionTitle";
import { skills } from "../../../data/skills";

//css
import "./skills.scss";

function Skills() {
  const exp = moment().diff("2018-07-07", "years") + "+";

  return (
    <div className="skillsContainer">
      <SectionTitle title={exp} subTitle="of professional experience" />
      <div className="skills">
        {skills.map((skill, index) => {
          return (
            <div className="skills-skill">
              <div>{skill.name}</div>
              <img
                alt={`skill-${skill.name}`}
                width="30px"
                height="30px"
                src={skill.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
