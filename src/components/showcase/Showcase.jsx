import React from 'react'
import { Link } from 'react-scroll';
import './Showcase.css'

const Showcase = () => {
  return (
    <section name="Home" className="showcase">
    <div className="showcase_container container">
      <div className="showcase_content">
        <h1 className="showcase_title">Coffee Heaven</h1>
        <p className="showcase_description">
          Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ut
          Officia, Accusantium Mollitia Laudantium Dolorum Dolore.
        </p>
        <Link to="About" className="btn" smooth={true} duration={500}>About Us</Link>
      </div>
    </div>
  </section>
  )
}

export default Showcase