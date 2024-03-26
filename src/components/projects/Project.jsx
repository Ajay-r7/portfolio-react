import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <section id='project'>
        <h3 className='head1 text-center'>My <span style={{color:'blueviolet',marginTop:'90px'}}>Projects</span></h3>
        <h5 className='text-center' style={{fontWeight:'100',fontSize:'15px'}}>Most recent works</h5>
        
        <div className="container project-container">
            <div className="project-item">
                <div className="project-item-img">
                    <img src="https://wallpaperaccess.com/full/4635743.jpg" alt="" />
                </div>
                <h3>
                    Simple Website
                </h3>
                <a href="https://github.com/Ajay-r7/musicweb" className='btn2' target='_blank'>Github</a>
                <a href="https://ajay-r7.github.io/web-task/"className='btn btn-primary p-1 ms-3' target='_blank'>Live Demo</a>
            </div>
            <div className="project-item">
                <div className="project-item-img">
                    <img src="https://www.shutterstock.com/image-vector/programming-web-banner-best-languages-600nw-1487177651.jpg" alt="" />
                </div>
                <h3>Portfolio</h3>
                <a href="https://github.com/Ajay-r7/portfolio-demo" className='btn2' target='_blank'>Github</a>
                <a href="https://ajay-r7.github.io/portfolio-demo/#"className='btn btn-primary p-1 ms-3' target='_blank'>Live Demo</a>
            </div>
            <div className="project-item">
                <div className="project-item-img">
                    <img src="https://jbsoftware.ca/wp-content/uploads/web-design.jpg" alt="" />
                </div>
                <h3>Headphone Website</h3>
                <a href="https://github.com/Ajay-r7/headphone" className='btn2' target='_blank'>Github</a>
                <a href="https://ajay-r7.github.io/headphone/"className='btn btn-primary p-1 ms-3' target='_blank'>Live Demo</a>
            </div>
            <div className="project-item">
                <div className="project-item-img">
                    <img src="https://www.xavor.com/wp-content/uploads/2023/02/Top-7-Cross-Platform-App-Development-Frameworks-in-2023-.jpg" alt="" />
                </div>
                <h3>Restuarant Website</h3>
                <a href="https://github.com/Ajay-r7/foodspot" className='btn2' target='_blank'>Github</a>
                <a href="https://ajay-r7.github.io/foodspot/"className='btn btn-primary p-1 ms-3' target='_blank'>Live Demo</a>
            </div>
            <div className="project-item">
                <div className="project-item-img">
                    <img src="https://discordhome.com/user_upload/backgrounds/26018background.jpg" alt="" />
                </div>
                <h3>Travel Website</h3>
                <a href="https://github.com/Ajay-r7/travel" className='btn2' target='_blank'>Github</a>
                <a href="https://ajay-r7.github.io/travel/"className='btn btn-primary p-1 ms-3' target='_blank'>Live Demo</a>
            </div>
            <div className="project-item">
                <div className="project-item-img">
                    <img src="https://hashnode.com/utility/r?url=https:%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1643275137941%2FJlr9hdBEt.jpeg%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng" alt="" />
                </div>
                <h3 className='mt-4'>Clone Website</h3>
                <a href="https://github.com/Ajay-r7/linked-in" className='btn2' target='_blank'>Github</a>
                <a href="https://ajay-r7.github.io/linked-in/?"className='btn btn-primary p-1 ms-3' target='_blank'>Live Demo</a>
            </div>
        </div>
    </section>
  )
}

export default Project