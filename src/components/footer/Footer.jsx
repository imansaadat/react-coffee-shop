import React from 'react'
import './Footer.css'
const Footer = ({ data }) => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <div className="footer_cols">
          {
            data.map((info, index) => {
              return (
                <div className="col" key={index}>
                  <div className='icon'>{info.img}</div>
                  <h4>{info.title}</h4>
                  <p>{info.desc}</p>
                </div>
              )
            })
          }
        </div>
        <div className="copy_right">
          <p> © copyright @ 2022 by <span>mr. web designer</span> | all rights reserved! </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer