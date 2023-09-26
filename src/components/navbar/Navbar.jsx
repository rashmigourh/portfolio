import React, { useState }  from 'react'
import './navbar.css'
import { AiOutlineUser } from "react-icons/ai";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { MdOutlineLaptopMac } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import {TbStarsFilled} from "react-icons/tb";

const Navbar =()=> {
  const [activeLink, setActiveLink]=useState("#about");
  return (
   <nav>
    <a href="#about" onClick={()=> setActiveLink('#about')} className={activeLink === '#about'?'active':''}><AiOutlineUser /></a>
    <a href="#skills" onClick={()=> setActiveLink('#skills')} className={activeLink === '#skills'?'active':''}><FaScrewdriverWrench /></a>
    <a href="#education" onClick={()=> setActiveLink('#education')} className={activeLink === '#education'?'active':''}><FaGraduationCap /></a>
    <a href="#services" onClick={()=> setActiveLink('#services')} className={activeLink === '#services'?'active':''}>< RiServiceFill/></a>
    <a href="#projects" onClick={()=> setActiveLink('#projects')} className={activeLink === '#projects'?'active':''}><MdOutlineLaptopMac /></a>
    <a href="#experience" onClick={()=> setActiveLink('#experience')} className={activeLink === '#experience'?'active':''}><TbStarsFilled /></a>
    <a href="#contact" onClick={()=> setActiveLink('#contact')} className={activeLink === '#contact'?'active':''}><IoMdContact /></a>
   </nav>
  )
}

export default Navbar
