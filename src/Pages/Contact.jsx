import React from 'react'
import ContactForm from '../Components/ContactForm'

const Contact = () => {
  return (
    <div className='contact'>
      <img className="contact-img" src="/Images/travel6.jpeg" alt='contact' />
      <div>
        <h3 className='contact-title'>Contact me</h3>
        <p className='contact-body'>Let's find your new favorite place together.</p>
        <ContactForm />
      </div>
      
      
    </div>
  )
}

export default Contact