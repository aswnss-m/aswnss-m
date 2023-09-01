import React from 'react'
import "../Assets/styles/Contact.css"

function Contact() {
  return (
    <section className='container center'>
        <h1>Say Hi</h1>
        <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
        <div className="socials"></div>
    </section>
  )
}

export default Contact