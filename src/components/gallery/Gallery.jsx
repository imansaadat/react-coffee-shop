import React from "react";
import Heading from "../heading/Heading";
import Gallery1 from "../../assets/gallery-1.webp";
import Gallery2 from "../../assets/gallery-2.webp";
import Gallery3 from "../../assets/gallery-3.webp";
import Gallery4 from "../../assets/gallery-4.webp";
import Gallery5 from "../../assets/gallery-5.webp";
import Gallery6 from "../../assets/gallery-6.webp";
import ImageItem from "./ImageItem";
import "./Gallery.css";
const Gallery = () => {
  const ImgGallery = [
    {
      img: Gallery1,
      alt: "I love coffee",
    },
    {
      img: Gallery2,
      alt: "I love coffee",
    },
    {
      img: Gallery3,
      alt: "I love coffee",
    },
    {
      img: Gallery4,
      alt: "I love coffee",
    },
    {
      img: Gallery5,
      alt: "I love coffee",
    },
    {
      img: Gallery6,
      alt: "I love coffee",
    },
  ];
  return (
    <section name="Gallery" className="gallery">
      <div className="container">
        <Heading title="Our Gallery" alt="Gallery" />
          <div className="gallery_cols">
            {ImgGallery.map((item,index) => (
              <ImageItem item={item} key={index}/>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Gallery;
