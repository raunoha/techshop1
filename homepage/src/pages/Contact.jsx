import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css"


export const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c4n34er', 'template_8wbpnrq', form.current, 'j0D-xKh_GN6qAR8DY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
    <form ref={form} onSubmit={sendEmail} className="centered-form"> <br />
      <label className="big-label">Name</label><br />
      <input type="text" name="from_name" className="big-input" /> <br />
      <label className="big-label">Email</label><br />
      <input type="email" name="from_email" className="big-input"  /><br />
      <label className="big-label">Message</label><br />
      <textarea name="message" className="big-textarea" rows="6"/><br /><br />
      <input type="submit" value="Send"className="big-input"  /><br />
    </form>
    <br />
    Küsimuste korral julged ühendust võtta. 
    
    </div>
  );
};