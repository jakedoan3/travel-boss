import React, {useRef} from 'react'
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_09tsoka', 'travel-boss-template', form.current, 'nMnrLLdsoNIyQquxC')
        .then((result) => {
            console.log(result.text);
            navigate('/')
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className='form-field' type="text" name="user_name" />
        <label>Email</label>
        <input className='form-field' type="email" name="user_email" />
        <label>Message</label>
        <textarea className='form-field' name="message" />
        <input className='form-button' type="submit" value="Send" />
      </form>
    );
  };

export default ContactForm