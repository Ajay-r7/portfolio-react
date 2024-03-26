import React from 'react'
import { Link } from 'react-scroll'

const Data = () => {
  return (
    <div className="home-data">
        <h1 className="home-title">Ajay <span style={{color:'blueviolet'}}>Ravichandran</span></h1>
        <h3 className="home-subtitle">Frontend Developer</h3>
        <p className="description">Passionated Frontend Developer|Transforming Ideas into Seamless and Visually Web Solution</p>

        <Link to="contactme" spy={true} smooth={true} offset={50} duration={500} className="btn" >Say Hello<i class="fa-regular fa-paper-plane ms-2"></i></Link>
    </div>
  )
}

export default Data