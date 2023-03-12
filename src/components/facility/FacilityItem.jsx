import React from "react";

const FacilityItem = ({ item: { img, alt, title, desc } }) => {
  return (
    <div className="facility__card">
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default FacilityItem;
