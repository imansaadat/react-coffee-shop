import React from "react";
// Images
import Heading from "../heading/Heading";
import Team1 from "../../assets/our-team-1.jpg";
import Team2 from "../../assets/our-team-2.jpg";
import Team3 from "../../assets/our-team-3.jpg";
import Team4 from "../../assets/our-team-4.jpg";
import Team5 from "../../assets/our-team-5.jpg";
import Team6 from "../../assets/our-team-6.jpg";
import TeamItem from "./TeamItem";
// css
import "./Team.css";
const Team = () => {
 const TeamData = [
    {
      img: Team1,
      name: "William",
      alt: "William",
    },
    {
      img: Team2,
      name: "James",
      alt: "James",
    },
    {
      img: Team3,
      name: "Emma",
      alt: "Emma",
    },
    {
      img: Team4,
      name: "John Deo",
      alt: "John Deo",
    },
    {
      img: Team5,
      name: "Jennifer",
      alt: "Jennifer",
    },
    {
      img: Team6,
      name: "Robert",
      alt: "Robert",
    },
  ];
  return (
    <section name="Team" className="team">
      <div className="container">
        <div className="team_content">
          <Heading title="Our Team" alt="Our Team" />
          <div className="team_cols">
            {
                TeamData.map((item,index)=>(
                    <TeamItem key={index} item={item}/>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
