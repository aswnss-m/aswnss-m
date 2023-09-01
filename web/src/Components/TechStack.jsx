import React from 'react'
import mongo from '../Assets/icons/mongodb.svg'
import express from '../Assets/icons/Express.svg'
import react from '../Assets/icons/React.svg'
import node from '../Assets/icons/Node.svg'
import python from '../Assets/icons/Python.svg'
import flask from '../Assets/icons/Flask.svg'
import figma from '../Assets/icons/Figma.svg'
import photoshop from '../Assets/icons/Photoshop.svg'
import illustrator from '../Assets/icons/Illustrator.svg'
import "../Assets/styles/TechStack.css"
function TechStack() {
  return (
    <div className='container center'>
        <h1>Tech Stack</h1>
        <ul className='tech-stack-list list'>
            <li className='list-item'>
                <img src={mongo} alt="Mongo DB" />
                <p className="item-description">Mongo DB</p>
            </li>
            <li className='list-item'>
                <img src={express} alt="Express" />
                <p className="item-description">Express</p>
            </li>
            <li className='list-item'>
                <img src={react} alt="React" />
                <p className="item-description">React</p>
            </li>
            <li className='list-item'>
                <img src={node} alt="Node JS" />
                <p className="item-description">Node JS</p>
            </li>
            <li className='list-item'>
                <img src={python} alt="Python" />
                <p className="item-description">Python</p>
            </li>
            <li className='list-item'>
                <img src={flask} alt="Flask" />
                <p className="item-description">Flask</p>
            </li>
            <li className='list-item'>
                <img src={figma} alt="Figma" />
                <p className="item-description">Figma</p>
            </li>
            <li className='list-item'>
                <img src={photoshop} alt="Photoshop" />
                <p className="item-description">Photoshop</p>
            </li>
            <li className='list-item'>
                <img src={illustrator} alt="Illustrator" />
                <p className="item-description">Illustrator</p>
            </li>
        </ul>
    </div>
  )
}

export default TechStack