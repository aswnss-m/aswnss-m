import React from 'react'
import Card3d from './Card3d'
import "../Assets/styles/Projects.css"

function Projects() {
  return (
    <section className='container center'>
        <h1>Projects</h1>
        <div className="projects">
        <Card3d props = {{
            title: 'College Website Optimization',
            status: 'online',
            tech: 'react',
            link:'https://college-website-two.vercel.app/'
        }}/>
        <Card3d props = {{
            title: 'Cult A Way 2023 Website',
            status: 'online',
            tech: 'react',
            link:'https://www.cultaway.in'

        }}/>
        <Card3d props = {{
            title: '2nd Books | Ecom Website',
            status: 'offline',
            tech: 'github',
            link:'https://github.com/aswnss-m/secondBooks'

        }}/>
        </div>
    </section>
  )
}

export default Projects