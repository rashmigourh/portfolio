import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
import {IoLogoWhatsapp} from 'react-icons/io'
import IMG from '../../assests/logo.png'
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="logo">
      <img src={IMG} alt="R" />
      <a href="#" className='footer_logo'>Rashmi Gourh</a>
      </div>
      <div className='footer_socials'>
      <a href="https://www.linkedin.com/in/rashmi-gourh-3bb46525b" target='blank'><BsLinkedin /></a>
      <a href="https://github.com/rashmigourh" target='blank'><BsGithub /></a>
      <a href="tel:+91-9013986111" target='blank'><BsFillTelephoneFill /></a>
      <a href="mailto:rashmigourh17@gmail.com"><BiLogoGmail /></a>
      <a href="whatsapp://send?text=Hello Rashmi!&phone=+9190139861111"><IoLogoWhatsapp /></a>
    </div>

    <div className="copywrite">
      <small>&copy; Rashmi Gourh. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer
