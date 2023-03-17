import React from "react";
// Icons
import { ImPhone } from "react-icons/im";
import {
  HiOutlineMail,
  HiOutlineClock,
  HiLocationMarker,
} from "react-icons/hi";
// Css
import "./Footer.css";
import FooterItem from "./FooterItem";
const Footer = () => {
  const FooterData = [
    {
      img: <HiOutlineMail />,
      title: "Our Email",
      desc: "Shaikhanas@Gmail.Com",
    },
    {
      img: <HiOutlineClock />,
      title: "Opening Hours",
      desc: "07:00am To 09:00pm",
    },
    {
      img: <HiLocationMarker />,
      title: "Shop Location",
      desc: "Mumbai, India - 400104",
    },
    {
      img: <ImPhone />,
      title: "Our Number",
      desc: "+123-456-7890",
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_cols">
          {FooterData.map((item, index) => (
            <FooterItem key={index} item={item} />
          ))}
        </div>
        <div className="copy_right">
          <p>
            © copyright @ 2022 by <span>mr. web designer</span> | all rights
            reserved!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
