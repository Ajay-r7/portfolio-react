import React from 'react'

const Backend = () => {
  return (
    <div className="skills-content">
        <h3 className="skill-title mb-5"><span><img src="https://cdn-icons-png.flaticon.com/512/807/807262.png" style={{width:'20px',marginLeft:'-40px'}} alt="" /></span> Tools</h3>
        <div className="skill-box">
            <div className="skill-group">
                <div className="skill-data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skill-name">Git & Github</h3>
                        <span className="skill-level">Intermediate</span>
                    </div>
                </div>
                
                <div className="skill-data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skill-name">Visual Studio Codes</h3>
                        <span className="skill-level">Intermediate</span>
                    </div>
                </div>
                <div className="skill-data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skill-name">Creative Design</h3>
                        <span className="skill-level">Intermediate</span>
                    </div>
                </div>
                <div className="skill-data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skill-name">Responsive Design</h3>
                        <span className="skill-level">Basics</span>
                    </div>
                </div>
                <div className="skill-data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skill-name">Webpack</h3>
                        <span className="skill-level">Basics</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Backend