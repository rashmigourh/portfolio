import React from 'react'
import './services.css'
import {BsCheck2All} from 'react-icons/bs'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      easing:'ease-in',
      once:false
    });
  }, []);

  return (
    <div>
      <section id='services'>
        <div className="heading">
          <h4 data-aos="fade-up">What I offer</h4>
          <h1 data-aos="fade-up">Services</h1>
        </div>

        <div className="container services_container">
          {/* web designer */}
          <article className="service" data-aos="fade-up">
            <div className="service_head">
              <h3>web Designer</h3>
            </div>
            <ul className="service_list">
              <li>
                <div className="tick_icon">
                <BsCheck2All />
                </div>
                <p>Creating an appealing and user-friendly user interface by using various technologies 
                  like HTML, CSS, and JavaScript to design the layout, typography, color schemes, and interactive elements.</p>
              </li>
              <li>
                <div className="tick_icon">
                <BsCheck2All />
                </div>
                <p>Focusing on creating a positive user experience by optimizing the website's usability, navigation, and accessibility. 
                  This involves wireframing and prototyping to plan the site's structure and interactions.</p>
              </li>
              <li>
                <div className="tick_icon">
                <BsCheck2All />
                </div>
                <p>Incorporating text, images, videos, and other multimedia elements into the website's design.</p>
              </li>
              <li>
                <div className="tick_icon">
                <BsCheck2All />
                </div>
                <p>Optimizing the website's structure and content to improve its visibility in search engine results pages. This includes keyword research, meta tag optimization, and more.</p>
              </li>
              <li>
                <div className="tick_icon">
                <BsCheck2All />
                </div>
                <p> Creating custom graphics, icons, logos, and other visual elements to enhance the website's branding and visual appeal.</p>
              </li>
            </ul>
          </article>

          {/* web devlopment card */}
          <article className="service" data-aos="fade-up">
          <div className="service_head">
              <h3>web Developer</h3>
            </div>
            <ul className="service_list">
            <li>
              <div className="tick_icon">
                <BsCheck2All />
                </div>
                <p>Skilled in creating websites from scratch by using various programming languages, libraries, framework and more to build the website's structure, layout, and functionality.</p>
              </li>
              <li>
              <div className="tick_icon">
                <BsCheck2All/>
                </div>
                <p>Ensuring that the website or web application looks and functions well on various devices and screen sizes, such as desktops, tablets, and mobile phones.</p>
              </li>
              <li>
                <div className="tick_icon">
                <BsCheck2All />
                </div>
                <p>Testing and ensuring that the website works consistently across different web browsers </p>
              </li>
              <li>
                <div className="tick_icon">
                <BsCheck2All />
                </div>
                <p> Implementing animations and transitions to make the website more engaging and user-friendly.</p>
              </li>
              <li>
                <div className="tick_icon">
                <BsCheck2All />
                </div>
                <p>Optimizing frontend code and assets to improve page load times and overall website performance by creating resuable components, image compression, code minification, and leveraging content delivery networks.</p>
              </li>
              <li>
                <div className="tick_icon">
                <BsCheck2All />
                </div>
                <p>Implementing security measures to protect the website from potential threats, such as malware, hacking, and data breaches.</p>
              </li>
            </ul>
          </article>
        
        </div>
      </section>
    </div>
  )
}

export default Services
