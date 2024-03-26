import React from 'react'
import './Navbar1.css'
import { Link } from 'react-scroll'

const Navbar1 = () => {
  return (
    <>
    <div className="nav-wrapper">
        <div className="nav-content">
            <h3 className='ms-3'>Port<span style={{color:'blueviolet'}}>folio.</span></h3>
            <ul>
                <li>
                    <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="menu-item">Home</Link>
                </li>
                <li>
                    <Link to="skills" spy={true} smooth={true} offset={50} duration={500} className="menu-item">Skills</Link>
                </li>
                <li>
                    <Link to="services" spy={true} smooth={true} offset={50} duration={500} className="menu-item">Services</Link>
                </li>
                <li>
                    <Link to="project" spy={true} smooth={true} offset={50} duration={500} className="menu-item">Projects</Link>
                </li>
                <li>
                    <Link to="contactme" spy={true} smooth={true} offset={50} duration={500} className="menu-item">Contact Me</Link>
                </li>

                <button className="contact-btn me-3" onClick={()=>{}}>Hire Me</button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar1