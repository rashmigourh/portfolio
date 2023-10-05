import React from 'react'
import './project.css'
import { useEffect } from 'react'
import IMG1 from '../../assests/medical.png'
import IMG2 from '../../assests/food.png'
import IMG3 from '../../assests/travel.png'
import IMG4 from '../../assests/calculator.png'
import IMG5 from '../../assests/textUtils.png'
import IMG6 from '../../assests/Gym.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "FindLife",
    para: 'FindLife is a healthcare-responsive website which empowers individuals by providing them with knowledge about various diseases through cards and informing them about their health by predicting various illnesses and diseases (mainly done for heart stroke) using our prediction model.',
    tech: "TechStack: HTML, CSS, Javascript, Machine Learning, Phython, Flask",
    github: 'https://github.com/rashmigourh/findLife',
    demo: 'https://rashmigourh.github.io/findLife/'
  },
  {
    id: 2,
    image: IMG2,
    title: "BlissBite",
    para: 'BlissBite is a food delivery responsive website which enables our customer to choose their favourite dishes out of a variety of options. This website contains various food cards, with add-to-cart functionality, sending feedback with popup up, signup and log-in pages.',
    tech: "TechStack: HTML, CSS, Javascript",
    github: 'https://github.com/rashmigourh/BlissBite',
    demo: 'https://rashmigourh.github.io/BlissBite/'
  },
  {
    id: 3,
    image: IMG3,
    title: "VoyageVista",
    para: 'VoyageVista is a travelling responsive website which enables our users to log in and see various destinations through customised cards and also provides various services and reviews from different customers. ',
    tech: "TechStack: HTML5, CSS, Javascript",
    github: 'https://github.com/rashmigourh/VoyageVista',
    demo: 'https://rashmigourh.github.io/VoyageVista/'
  },
  {
    id: 4,
    image: IMG4,
    title: "Calculator",
    para: 'Inbuild responsive calculator with a beautiful background theme which performs various basic arithmetic operations along with some advanced calculations like factorial, log values, angles in radian and degrees along with trigonometric functions like sin, cos and tan. ',
    tech: "TechStack: HTML5, CSS, Javascript",
    github: 'https://github.com/rashmigourh/Calculator',
    demo: 'https://rashmigourh.github.io/Calculator/'
  },
  {
    id: 5,
    image: IMG5,
    title: "TextUtils",
    para: 'TextUtils is a responsive web counter and character counting utility which can be used to manipulate your text in the way you want. It contains various functionalitieslike removing extra spaces, lower to uppercase and vice versa, converting text tospeech and many more along with dark and light modes.',
    tech: "TechStack: React, Bootstrap, Javascript, CSS",
    github: 'https://github.com/rashmigourh/TextUtils',
    demo: 'https://rashmigourh.github.io/TextUtils/'
  },
  {
    id: 6,
    image: IMG6,
    title: "GymOn",
    para: "GymOn is a responsive gym website which enables it's customers make membership plans by providing Details of various membership options, including pricing, benefits, and contract terms.Provide a schedule for group fitness classes and instructors. Mentions nutrition counseling or meal planning services and many more.",
    tech: "TechStack: HTML5, CSS, Javascript",
    github: 'https://github.com/rashmigourh/GymWebsite/blob/main/README.md',
    demo: 'https://github.com/rashmigourh/GymWebsite/blob/main/README.md'
  }
]

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      easing:'ease-in',
      once:false
    });
  }, []);

  return (
      <section id='projects'>
        <div className="heading">
          <h4 data-aos="fade-up">My Recent Work</h4>
          <h1 data-aos="fade-up">My Projects</h1>
        </div>

        <div className="container project_container">
          {
          data.map(({ id, image, title, para,tech, github, demo }) => {
            return (
              <article key = { id } className = "project_item" data-aos="fade-up">
              <><div className="item-image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{para}</p>
                    <p>{tech}</p>
                    <div className="project_button">
                      <a href={github} className='btn' target='blank'>Github</a>
                      <a href={demo} className='btn btn-primary' target='blank'>Live demo</a>
                    </div>
                  </div></>
            </article>
        )
        })
      }
    </div>
      </section >
  )
}

export default Project
