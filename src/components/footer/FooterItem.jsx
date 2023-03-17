import React from 'react'

const FooterItem = ({item:{img,title,desc}}) => {
  return (
    <div className="col">
    <div className="icon">{img}</div>
    <h4>{title}</h4>
    <p>{desc}</p>
  </div>
  )
}

export default FooterItem
