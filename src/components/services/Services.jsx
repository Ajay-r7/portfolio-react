import React, { useState } from 'react'
import './Services.css'

const Services = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id='services'>
        <h3 className='head1 text-center'>My <span style={{color:'blueviolet',marginTop:'50px'}}>Services</span></h3>
        <h5 className='text-center' style={{fontWeight:'100',fontSize:'15px',marginBottom:'-30px'}}>What i offer</h5>

        <div className="services-container container grid">
            <div className="services-content">
                <div>
                    <i className="bx bx-layout services-icon"></i>
                    <h3 className="services-title">Product <br /> Designer</h3>
                </div>

                <span className="services-button" onClick={()=> toggleTab(1)}>
                    View More
                 <i class='bx bx-right-arrow-alt services-button-icon'></i></span>

                <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                    <i onClick={()=> toggleTab(0)} class="fa-solid fa-xmark services-modal-close"></i>

                    <h3 className="services-modal-title">Product Designer</h3>
                    <p className="services-modal-description">I can provide quality work to clients and companies with my creative thinking.</p>
                    <ul className="services-modal-services grid">
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">I develop the user interface.</p>
                        </li>
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">Web page development.</p>
                        </li>
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">I create ux element interactions.</p>
                        </li>
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">I position your company brand.</p>
                        </li>
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">Design and mockups of products for companies.</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="services-content">
                <div>
                    <i className="bx bx-code services-icon"></i>
                    <h3 className="services-title">Ui/Ux <br /> 
                    Designer</h3>
                </div>

                <span className="services-button" onClick={()=> toggleTab(2)}>
                    View More
                    <i  class='bx bx-right-arrow-alt services-button-icon'></i></span>

                <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                    <i onClick={()=> toggleTab(0)} class='fa-solid fa-xmark services-modal-close'></i>

                    <h3 className="services-modal-title">Ui/Ux Designer</h3>
                    <p className="services-modal-description">I can provide quality work to clients and companies with my creative thinking.</p>
                    <ul className="services-modal-services grid">
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">I develop the user interface.</p>
                        </li>
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">Web page development.</p>
                        </li>
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">I create ux element interactions.</p>
                        </li>
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">I position your company brand.</p>
                        </li>
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">Design and mockups of products for companies.</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="services-content">
                <div>
                    <i className="bx bx-edit services-icon"></i>
                    <h3 className="services-title">Visual <br /> Designer</h3>
                </div>

                <span className="services-button" onClick={()=> toggleTab(3)}>
                    View More
                <i class='bx bx-right-arrow-alt services-button-icon'></i></span>

                <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                    <i  onClick={()=> toggleTab(0)}  class='fa-solid fa-xmark services-modal-close'></i>

                    <h3 className="services-modal-title">Visual Designer</h3>
                    <p className="services-modal-description">I can provide quality work to clients and companies with my creative thinking.</p>
                    <ul className="services-modal-services grid">
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">I develop the user interface.</p>
                        </li>
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">Web page development.</p>
                        </li>
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">I create ux element interactions.</p>
                        </li>
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">I position your company brand.</p>
                        </li>
                        <li className="services-modal-service">
                        <i class='bx bx-check-circle services-modal-icon'></i>
                        <p className="services-modal-info">Design and mockups of products for companies.</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services