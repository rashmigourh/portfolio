import React from 'react'
import Resume from '../../assests/resume.pdf'
import './about.css'

function Describe() {
  return (
    <div className="describe">
        <a href={Resume} className='btn' target="new">Resume</a>
        <a href="#contact" className='btn-primary'>Let's Talk</a>
    </div>
 )
}

export default Describe
