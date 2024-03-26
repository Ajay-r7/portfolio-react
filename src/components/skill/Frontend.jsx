import React from 'react'

const Frontend = () => {
  return (
    <div className="skills-content">
        <h3 className="skill-title mb-5"><span><img src="https://cdn-icons-png.flaticon.com/512/3368/3368896.png" style={{width:'20px'}} alt="" /></span> Frontend developer</h3>
        <div className="skill-box ">
            <div className="skill-group">
                <div className="skill-data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skill-name">HTML</h3>
                        <span className="skill-level">Advance</span>
                    </div>
                </div>
                
                <div className="skill-data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skill-name">CSS</h3>
                        <span className="skill-level">Advance</span>
                    </div>
                </div>
                <div className="skill-data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skill-name">Javascript</h3>
                        <span className="skill-level">Intermediate</span>
                    </div>
                </div>
                <div className="skill-data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skill-name">Bootstrap</h3>
                        <span className="skill-level">Intermediate</span>
                    </div>
                </div>
                <div className="skill-data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skill-name">React</h3>
                        <span className="skill-level">Intermediate</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Frontend