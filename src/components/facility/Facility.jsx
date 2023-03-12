import React from "react";
import Heading from "../heading/Heading";
import "./Facility.css";
import FacilityItem from "./FacilityItem";
// Images
import Varieties from "../../assets/Varieties.png";
import Beans from "../../assets/Beans.png";
import Breakfast from "../../assets/Breakfast.png";
import Coffee from "../../assets/coffee.png";
const Facility = () => {
  const FacilityData = [
    {
      img: Varieties,
      alt: "Varieties",
      title: "Varieties Of Coffees",
      desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe, Adipisci!",
    },
    {
      img: Beans,
      alt: "Coffee Beans",
      title: "Coffee Beans",
      desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe, Adipisci!",
    },
    {
      img: Breakfast,
      alt: "Breakfast And Sweets",
      title: "Breakfast And Sweets",
      desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe, Adipisci!",
    },
    {
      img: Coffee,
      alt: "Read To Go Coffee",
      title: "Read To Go Coffee",
      desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe, Adipisci!",
    },
  ];
  return (
    <section className="facility">
      <div className="container">
        <Heading title="Our Facility" alt="Facility" />
        <div className="facility__cards">
          {FacilityData.map((item, index) => (
            <FacilityItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;
