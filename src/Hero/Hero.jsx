import React from 'react'
import "./Hero.css"
import Banner from '../Components/Banner/Banner'

function Hero() {
  return (
    <div className='heroSection'>
      <h1 className='black-font'>@Aswnss</h1>
        <div className="bannerHolder">
            <Banner bgColor={"--accent-color"} rot = "-9deg"/>
            <Banner bgColor={"--accent-color-2"} rot= "3deg"/>
        </div>
    </div>
  )
}

export default Hero
