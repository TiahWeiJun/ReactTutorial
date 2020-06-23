import React from 'react'
import ProjectSummary from './ProjectSummary.js'

const ProjectList = (props) =>{
    return (
        <div className = "project-list section">
            {props.projects && props.projects.map(data => {
                return <ProjectSummary key={data.id} title = {data.title} content = {data.content}/>
            })}
        </div>
    )
}

export default ProjectList