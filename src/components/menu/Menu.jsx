import React from "react";
import Heading from "../heading/Heading";
import "./Menu.css";
// Images
import menu1 from "../../assets/menu-1.png";
import menu2 from "../../assets/menu-2.png";
import menu3 from "../../assets/menu-3.png";
import menu4 from "../../assets/menu-4.png";
import menu5 from "../../assets/menu-5.png";
import menu6 from "../../assets/menu-6.png";
import MenuItem from "./MenuItem";

const Menu = () => {
  const MenuData = [
    {
      img: menu1,
      alt: "Coffee",
      name: "Love You Coffee",
    },
    {
      img: menu2,
      alt: "Cappuccino",
      name: "Cappuccino",
    },
    {
      img: menu3,
      alt: "Mocha Coffee",
      name: "Mocha Coffee",
    },
    {
      img: menu4,
      alt: "Frappuccino",
      name: "Frappuccino",
    },
    {
      img: menu5,
      alt: "Black Coffee",
      name: "Black Coffee",
    },
    {
      img: menu6,
      alt: "Heart Coffee",
      name: "Love Heart Coffee",
    },
  ];

  return (
    <section name="Menu" className="menu">
      <div className="container">
        <Heading title="Popular Menu" alt="popular menu" />
        <div className="menu_items">
          {MenuData.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
