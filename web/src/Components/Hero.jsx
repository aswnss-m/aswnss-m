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
          <button className='glass-button'  onClick={()=>{
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          }}>
            Say Hi
          </button>
        </li>
        <li>
          <button className='glass-button'>
            <Link to={'https://docs.google.com/document/d/e/2PACX-1vTnnNKJCeuhTvCjiiX15KnwfQ3jmfvpCngM1y3ZCrccIf01Y-OUJUZ6eLt6fYssMZWwQDbG2i_dEYpc/pub'}>
              View Resume
            </Link>
          </button>
        </li>
      </ul>
    </section>
  )
}

export default Hero
