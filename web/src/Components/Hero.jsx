import React from 'react'
import { Link } from 'react-router-dom'
import "../Assets/styles/Hero.css"
import instagram from "../Assets/icons/instagram.svg"
import x from "../Assets/icons/x.svg"
import linkedin from "../Assets/icons/linkedin.svg"
import whatsapp from "../Assets/icons/whatsapp.svg"
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
      <ul className='socials-list'>
      <li>
          <Link to={'https://www.linkedin.com/in/aswnss'}>
            <img src={linkedin} alt="linkedin account" />
          </Link>
        </li>
        
        <li>
          <Link to={'https://www.x.com/aswnss'}>
            <img src={x} alt="twitter account" />
          </Link>
        </li>
        <li><Link to={'https://www.instagram.com/aswnss'}>
          <img src={instagram} alt="instagram account" />
        </Link></li>
        <li><Link to={'https://wa.me/919446451902?text=Hi,%20I%20got%20this%20from%20your%20website'}>
          <img src={whatsapp} alt="whatsapp account" />
        </Link></li>
        
      </ul>
    </section>
  )
}

export default Hero
