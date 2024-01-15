import React from 'react'
import './skills.css'
import { useEffect } from 'react'
import {DiHtml5} from 'react-icons/di'
import {DiCss3} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {SiTailwindcss} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {TbBrandCpp} from 'react-icons/tb'
import {FaCopyright} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing:'ease-in',
      once:false
    });
  }, []);
  return (
    <section id="skills">
      <div className="heading">
      <h4 data-aos="fade-up">What Skills I Have</h4>
      <h1 data-aos="fade-up">My Skills</h1>
      </div>

      <div className="container skills_container">
        <div className="frontent" data-aos="fade-up">
          <div className="service_head">
          <h3>Frontend Developer</h3>
          </div>
          <div className="experience" >
            <article className="experience_details">
              <div className="icon">
              <DiHtml5 />
              </div>
              <h4 className='text'>HTML5</h4>
            </article>
          </div>

          <div className="experience">
            <article className="experience_details">
            <div className="icon">
              <DiCss3 />
              </div>
              <h4>CSS</h4>
            </article>
          </div>

          <div className="experience">
            <article className="experience_details">
            <div className="icon">
              <DiJavascript />
              </div>
              <h4>Javascript</h4>
            </article>
          </div>

          <div className="experience">
            <article className="experience_details">
            <div className="icon">
              <DiReact />
              </div>
              <h4>Reactjs</h4>
            </article>
          </div>

          <div className="experience">
            <article className="experience_details">
            <div className="icon">
              <SiTailwindcss />
              </div>
              <h4>Tailwind CSS</h4>
            </article>
          </div>

          <div className="experience">
            <article className="experience_details">
            <div className="icon">
              <FaBootstrap />
              </div>
              <h4>Bootstrap</h4>
            </article>
          </div>
        </div>

        <div className="Languages" data-aos="fade-up">
        <div className="languages">
        <div className="service_head">
          <h3>Programming Languages</h3>
          </div>
          <div className="experience">
            <article className="experience_details">
            <div className="icon">
              <FaJava />
              </div>
              <h4>Java</h4>
            </article>
          </div>

          <div className="experience">
            <article className="experience_details">
            <div className="icon">
              <TbBrandCpp />
              </div>
              <h4>CPP</h4>
            </article>
          </div>

          <div className="experience">
            <article className="experience_details">
            <div className="icon">
              <FaCopyright />
              </div>
              <h4>C</h4>
            </article>
          </div>

          </div>
          </div>
          
      </div>
    </section>
  )
}

export default Skills
