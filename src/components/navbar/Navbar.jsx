import React, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [bg, setBg] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  window.addEventListener('scroll', () => {
    if (window.scrollY) {
      setBg(true)
    } else {
      setBg(false)
    }
  })

  return (
    <header className={bg ? 'header active' : 'header'}>
      <div className="container">
        <div className="header_content">
          <Link to="Home" smooth={true} duration={500} className="logo"><img src={Logo} alt="coffee logo" /></Link>
          <nav className={nav ? 'navbar showMenu' : 'navbar'}>
            <ul className="nav_list">
              <li className="nav_item">
                <Link to="Home" className="nav_link" onClick={handleNav} smooth={true} duration={500}>Home</Link>
              </li>
              <li className="nav_item">
                <Link to="About" className="nav_link" onClick={handleNav} smooth={true} duration={500}>About </Link>
              </li>
              <li className="nav_item">
                <Link to="Menu" className="nav_link" onClick={handleNav} smooth={true} duration={500}>Menu</Link>
              </li>
              <li className="nav_item">
                <Link to="Gallery" className="nav_link" onClick={handleNav} smooth={true} duration={500}>Gallery </Link>
              </li>
              <li className="nav_item">
                <Link to="Team" className="nav_link" onClick={handleNav} smooth={true} duration={500}>Team</Link>
              </li>
              <li className="nav_item">
                <Link to="Contact" className="nav_link" onClick={handleNav} smooth={true} duration={500}>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="burger" onClick={handleNav}>
            {nav ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar