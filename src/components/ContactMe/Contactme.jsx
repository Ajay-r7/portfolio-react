import React from 'react'
import './Contactme.css'
import { Contactcard } from './contactcard/Contactcard'
import Contactform from './contactform/Contactform'


const Contactme = () => {
  return (
    <section className='contact-container' id='contactme'>
        <h3 className='head1 text-center'style={{marginTop:'80px'}}>Contact <span style={{color:'blueviolet',marginTop:'50px'}}>Me</span></h3>
        <h5 className='text-center' style={{fontWeight:'100',fontSize:'15px',marginBottom:'-30px'}}>Get in touch</h5>
        
        <div className="contact-content">
            <div style={{flex: 1 }}>
              <a href="" style={{color:'white'}}>
                <Contactcard
                iconUrl="https://cdn-icons-png.flaticon.com/512/4926/4926637.png"
                text="ajayravichandran77@gmail.com"
                />
                </a>
                <a href="https://github.com/" style={{color:'white'}}>
                <Contactcard
                iconUrl="https://www.shareicon.net/data/2016/06/20/606964_github_4096x4096.png"
                text="Github Profile"
                />
                </a>
            </div>
            <div style={{flex: 1 }}>
                <Contactform
                
                />
            </div>
        </div>
    </section>
  )
}

export default Contactme