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
        <Card3d props = {{
          title: 'Paithrika Homes',
          status: 'online',
          tech: 'figma',
          link : 'https://www.figma.com/proto/e16RYgLCQ0aL0iqoAfQh6y/Works?type=design&node-id=346-931&t=HZja74mALKdltpTj-1&scaling=min-zoom&page-id=345%3A694&starting-point-node-id=346%3A931&show-proto-sidebar=1&mode=design'
        }}/>
        <Card3d props = {{
          title: 'IEEE SCT SB Redesign',
          status: 'online',
          tech: 'figma',
          link : "https://www.figma.com/proto/e16RYgLCQ0aL0iqoAfQh6y/Works?type=design&node-id=346-1870&t=xJkeS5mW6OFq1zhF-0&scaling=min-zoom&page-id=345%3A694&starting-point-node-id=346%3A1870&show-proto-sidebar=1"
        }}/>
        </div>
    </section>
  )
}

export default Projects