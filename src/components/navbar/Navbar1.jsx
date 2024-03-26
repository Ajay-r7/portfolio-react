import React from 'react'
import './Navbar1.css'

const Navbar1 = () => {
  return (
    <>
    <div className="nav-wrapper">
        <div className="nav-content">
            <h3 className='ms-3'>Port<span style={{color:'blueviolet'}}>folio.</span></h3>
            <ul>
                <li>
                    <a href='#home' className="menu-item">Home</a>
                </li>
                <li>
                    <a href='#skills' className="menu-item">Skills</a>
                </li>
                <li>
                    <a href='#services' className="menu-item">Services</a>
                </li>
                <li>
                    <a href='#project' className="menu-item">Projects</a>
                </li>
                <li>
                    <a href='#contactme' className="menu-item">Contact Me</a>
                </li>

                <button className="contact-btn me-3" onClick={()=>{}}>Hire Me</button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar1