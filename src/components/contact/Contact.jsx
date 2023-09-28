import React from 'react'
import './contact.css'
import { useEffect } from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Contact () {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      easing:'ease-in',
      once:false
    });
  }, []);

  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g104fv9', 'template_pp7h0x6', form.current, 'LYe0KG1w11KF7mqqc')
    e.target.reset()
  };
  return (
      <section id='contact'>
      <div className="heading">
      <h4 data-aos="fade-up">Get In Touch</h4>
      <h1 data-aos="fade-up">Contact Me</h1>
      </div>

      <div className="container contact_container">
        <div className="contact_cards" data-aos="fade-up" >
        <article className="contact_options">
          <BsLinkedin className='contact_icon'/>
          <h4>Linkdein</h4>
          <h5>Rashmi Gourh</h5>
          <a href="https://www.linkedin.com/in/rashmi-gourh-3bb46525b" target='blank'>Let's connect</a>
        </article>

        <article className="contact_options">
          <IoLogoWhatsapp className='contact_icon'/>
          <h4>What's App</h4>
          <h5>9013986111</h5>
          <a href="whatsapp://send?text=Hello Rashmi!&phone=+919013986111" target='blank'>send a message</a>
        </article>
        </div>

        <form ref={form} onSubmit={sendEmail} data-aos="fade-up">
          <input type="text" name='name' placeholder='Your Full Name...' required />
          <input type="email" name='email' placeholder='Your Email...' required />
          <textarea name="message" id="" rows="7" placeholder='Enter Your Message...' required></textarea>
          <div className="exp_button">
          <button type='submit'>Send Message</button>
          </div>
        </form>
      </div>
      </section>
  )
}

export default Contact