import React from 'react'
import './MyProject.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyProject = () => {
  return (
    <div className='myproject'>
        <div className="myproject-title">
            <h1>My Latest Projects</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="myproject-container">
            {mywork_data.map((project, index) => {
                return (
                    <div className="myproject-item" key={index}>
                        <img src={project.w_img} alt='' />
                        <div className="project-name">{project.w_name}</div>
                    </div>
                )
            })}
        </div>
        <div className="myproject-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt=''/>
        </div>
    </div>
  )
}

export default MyProject
