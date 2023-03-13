import React from "react";

const MenuItem = ({item:{img,alt,name}}) => {
  return (
    <div className="item">
      <img src={img} alt={alt}/>
      <h3>{name}</h3>
    </div>
  );
};

export default MenuItem;
