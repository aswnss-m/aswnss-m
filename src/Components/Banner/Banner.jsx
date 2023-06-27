import React from 'react'
import "./Banner.css"
function Banner({bgColor, rot}) {

  return (
    <div className='bannerContainer semi-bold-font' style={{
        backgroundColor:`var(${bgColor})`,
        rotate:`${rot}`
    }}>
    <ul className='bannerContent'>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
    </ul>
    <ul className='bannerContent' aria-hidden={true}>
    <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
        <li>designer</li>
        <li>developer</li>
    </ul>
    </div>
  )
}

export default Banner
