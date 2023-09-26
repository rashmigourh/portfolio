import React from 'react'
import './education.css'
import { useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {PiGraduationCapFill } from 'react-icons/pi'
import AOS from 'aos';
import 'aos/dist/aos.css';

const data =[
  {
    id: 1,
    date:"2020 - 2024",
    title: "Dr. Akhilesh Das Gupta Institute of Technology & Management",
    subtitle: 'B.Tech. - Computer Science & Engineering ',
    marks: 'Percentage: 94.89 / 100.00'
  },
  {
    id: 2,
    date:"2020",
    title: "St Mary senior secondary school, New Delhi",
    subtitle: '12th CBSE: Physics, Chemistry, Biology, Maths, English',
    marks: 'Percentage: 89.00 / 100.00'
  },
  {
    id: 3,
    date:"2018",
    title: "St Mary senior secondary school, New Delhi",
    subtitle: '10th CBSE: Science, Maths, Hindi, English, Social Science',
    marks: 'Percentage: 90.20 / 100.00'
  }
]

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100});
  }, []);

  return (
    <div>
      <section id='education'>
        <div className="heading">
          <h4 data-aos="fade-up">My Qualifications</h4>
          <h1 data-aos="fade-up">Education</h1>
        </div>

        <div className="container education_container">
         {
          data.map(({id, date, title, subtitle, marks})=>{
            return (
              <VerticalTimeline lineColor='#8e54c5' layout={ '1-column-left' } key={id}>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#8e54c5', color: '#fff', borderBottom:'2px solid #fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #8e54c5' }}
                date={date}
                iconStyle={{ background: '#8e54c5', color: '#fff'}}
                position={ "right" }
              icon={<PiGraduationCapFill />}
              >
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
                <h5 className='marks'>{marks}</h5>
              </VerticalTimelineElement>
            </VerticalTimeline>
            )
          })
         }
        </div>
      </section>
    </div>
  )
}

export default Education
