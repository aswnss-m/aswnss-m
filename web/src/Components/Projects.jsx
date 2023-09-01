import React from 'react'
import Card3d from './Card3d'
import "../Assets/styles/Projects.css"

function Projects() {
  return (
    <section className='container center'>
        <h1>Projects</h1>
        <div className="projects">
        <Card3d props = {{
            title: 'Project 1',
            status: 'online',
            tech: 'python'
        }}/>
        <Card3d props = {{
            title: 'Project 1',
            status: 'offline',
            tech: 'react'
        }}/>
        <Card3d props = {{
            title: 'Project 1',
            status: 'online',
            tech: 'figma'
        }}/>
        </div>
    </section>
  )
}

export default Projects