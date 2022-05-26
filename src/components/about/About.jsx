import React from 'react'
import { Link } from 'react-scroll';
import './About.css'
import AboutImg from '../../assets/about-img.svg'

const About = () => {
  return (
    <section name="About" className="about">
        <div className="about_container container">
          <div className="about_content">
            <div className="about_image">
              <img src={AboutImg} alt="coffee shop" />
            </div>
            <div className="about_data">
              <h2 className="about_title">A Cup Of Coffee Can Complete Your Day</h2>
              <p className="about_description">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam Suscipit Sunt Repellendus, Dolorum Recusandae Placeat Quae. Iste Eaque Aspernatur, Animi Deleniti Voluptas, Sunt Molestias Eveniet Sint Consectetur Facere A Ex.</p>
              <Link to="Menu"  className="btn" smooth={true} duration={500}>Our Menu</Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About