import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "../Assets/styles/Contact.css"

function Contact() {
  const form = useRef();
  const [sending, setSending] = React.useState(false);
  const sendMail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm('contact_me_service', 'contact_me', form.current, 'maX4aeWu7ChfrwgvE')
    .then((result) => {
      console.log(result.text);
      form.current.reset();
      setSending(false);
  }, (error) => {
      console.log(error.text);
  });
  }
  return (
    <section className='container center'>
        <h1>Say Hi</h1>
        <form ref={form} className={`contact-form ${sending?'sending':''}`} onSubmit={sendMail}>
            <input type="text" placeholder="Name" name='from_name' required/>
            <input type="email" placeholder="Email" name='from_mail' required/>
            <textarea placeholder="Message" name={'message'} required></textarea>
            <button type="submit" className='glass-button button-large' >Send </button>
        </form>
    </section>
  )
}

export default Contact