import React from 'react'
import { useState, useEffect } from 'react'
import './about.css'
import ME from '../../assests/rashmi.jpeg'
import Describe from './Describe'

function About() {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["web developer", "web Designer","Software Developer", "Programmer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
  }, [text])

  // to mock our text one by one
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(preDelta => preDelta / 2)
    }

    //to restart our text loop again
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  return (
    <header>
      <div className="container about_container" id='about'>
        <div className="about_me">
          <div className="about_image">
            <img src={ME} alt="Rashmi" />
          </div>
        </div>

        <div className="about_content">
          <div className="content">
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1 className='intro'>Hi I'm Rashmi Gourh</h1>
            <div className="mover">
              <h2 className='wrap'>{text}</h2>
            </div>
            <p>As a Web Developer (more precisely frontend web developer), I specialize in bringing design concepts to life, crafting seamless user interfaces, 
              and ensuring exceptional user interactions. With a deep-rooted love for both aesthetics and functionality, 
              I've embarked on a journey to turn ideas into captivating digital realities. <br />
              Whether you're a fellow developer seeking inspiration, a potential client in search of a creative collaborator, 
              or simply someone curious about the art of web development, I invite you to explore my work.
            </p>
          </div>
          <Describe />
        </div>
      </div>
    </header>
  )
}

export default About
