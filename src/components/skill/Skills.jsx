import React from 'react'
import './Skills.css'
import Frontend from './Frontend'
import Backend from './Backend'


const Skills = () => {
  return (
    <>
    <section className="skills section mt-5 mb-5" id='skills'>
        <h3 className='head text-center'>My <span style={{color:'blueviolet',marginTop:'50px'}}>Skills</span></h3>
        <h5 className='text-center' style={{fontWeight:'100',fontSize:'15px'}}>My Technical Level</h5>
        <div className="skills-container container grid">
            <Frontend/>
            <Backend/>
        </div>
    </section>
    </>
  )
}

export default Skills