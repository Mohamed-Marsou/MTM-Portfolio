import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import "../scss/Contact.scss";
import svg from "../assets/images/example-animate.svg";

const Contact = () => {
  const form = useRef(null);
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
          'service_lm4juau',
          'template_fs4uyqf',
          form.current,
          'koPF8_4VC7XT9wEw5'
        ).then(
          (result) => {
            console.log('SUCCESS!', result.text);
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
      
        // Clear form fields after submission (optional)
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
  };
  return (
    <div id="contact-container">
      <h3>Reach out</h3>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Full name"
            name="user_name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">SEND</button>
        </form>
        <p>{formMessage}</p>
        <div className="svg-container">
          <img src={svg} alt="svg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
