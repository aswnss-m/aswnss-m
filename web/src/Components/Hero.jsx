import React from 'react'
import "../Assets/styles/Hero.css"
function Hero() {
  return (
    <section
    className='container center hero-section-container'>
      <h1>Hello</h1>
      <h2>I'm <span>Aswin</span></h2>
      <p>A full stack developer and an engineer based in India</p>
      <ul className='list hero-list'>
        <li>
          <button className='glass-button'>
            Say Hi
          </button>
        </li>
        <li>
          <button className='glass-button'>
            View Resume
          </button>
        </li>
      </ul>
    </section>
  )
}

export default Hero