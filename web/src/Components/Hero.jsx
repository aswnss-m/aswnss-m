import React from 'react'
import { Link } from 'react-router-dom'
import "../Assets/styles/Hero.css"
function Hero() {
  return (
    <section
    className='container bg center hero-section-container'>
      <div className="hero-content">
      <h1>Hello I'm, <span className='name'>Aswin</span></h1>
      <p>A full stack developer and an engineer based in India</p>
      </div>
      <ul className='list hero-list'>
        <li>
          <button className='glass-button'>
            Say Hi
          </button>
        </li>
        <li>
          <button className='glass-button'>
            <Link to={'https://drive.google.com/file/d/14j2mrIipDxHmJNN_xBs0lK64z6ofgZeB/view?usp=sharing'}>
              View Resume
            </Link>
          </button>
        </li>
      </ul>
    </section>
  )
}

export default Hero