import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
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
    
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> <br />
      <input type="text" name="from_name" /><br />
      <label>Email</label><br />
      <input type="email" name="from_email" /><br />
      <label>Phone</label><br />
      <input type="phone" name="from_phone" /><br />
      <label>Message</label><br />
      <textarea name="message" /><br />
      <p>Feel free to reach out to us with any questions,
         comments, or feedback. We'll get back to you as soon as possible!</p>
      <input type="submit" value="Send" /><br />
    </form>
  );
};

