import React from 'react'
import Card3d from './Card3d'
import "../Assets/styles/Projects.css"

function Projects() {
  return (
    <section className='container center'>
        <h1>Projects</h1>
        <div className="projects">
        <Card3d />
        <Card3d />
        <Card3d />
        </div>
    </section>
  )
}

export default Projects