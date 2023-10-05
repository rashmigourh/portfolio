import React from 'react'
import './experience.css'
import { useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdVerified } from 'react-icons/md'
import IMG1 from '../../assests/CodSoft.pdf'
import IMG2 from '../../assests/IBM.pdf'
import IMG3 from '../../assests/sheHacks.pdf'
import IMG4 from '../../assests/CodSoft-Certificate.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      easing: 'ease-in',
      once: false
    });
  }, []);

  return (
    <div>
      <section id='experience'>
        <div className="heading">
          <h4 data-aos="fade-up">What I have Learn</h4>
          <h1 data-aos="fade-up">My Experience</h1>
        </div>

        <div className="container experience_container">
          <VerticalTimeline lineColor='#8e54c5' layout={'1-column-left'} cursor={"default"} >
            {/* codSoft */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#8e54c5', color: '#fff', cursor: 'default', borderBottom: '2px solid #fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #8e54c5', cursor: 'default' }}
              date={"Duration: 25 August 2023 - 25 September 2023"}
              iconStyle={{ background: '#8e54c5', color: '#fff', cursor: 'default' }}
              position={"right"}
              icon={<MdVerified />}
            >
              <h3 className="vertical-timeline-element-title">CodSoft Internship</h3>
              <p >This internship was an educational opportunity for me to develope new skills and
                gaining hands-on knowledge. During this internship I have deep-dived into new technologies,
                explored innovative solutions, gained industrial experience, tackled challenges head-on with an open mind and a strong work ethic.</p>
              <div className="button">
                <a href={IMG1} target="new" className='exp_button'>Offer Letter</a>
                <a href={IMG4} target="new" className='exp_button'>Certificate</a>
              </div>
            </VerticalTimelineElement>

            {/* hackathon */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#8e54c5', color: '#fff', cursor: 'default', borderBottom: '2px solid #fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #8e54c5', cursor: 'default' }}
              date={"Duration: 05 May 2023 - 07 May 2023"}
              iconStyle={{ background: '#8e54c5', color: '#fff', cursor: 'default' }}
              position={"right"}
              icon={<MdVerified />}
            >
              <h3 className="vertical-timeline-element-title"> SheHacks hackathon</h3>
              <p >Took part in SheHacks hackathon on women and children's safety, where we
                created a website for emergency alerts. Also got selected in the top 8
                teams.</p>
              <p className='extra'>Team Size: 3</p>
              <div className="button">
                <a href="https://help-x-alert-app.vercel.app/" target="new" className='exp_button'>Project Link</a>
                <a href={IMG3} target="new" className='exp_button'>Certificate</a>
              </div>
            </VerticalTimelineElement>

            {/* VP */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#8e54c5', color: '#fff', cursor: 'default', borderBottom: '2px solid #fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #8e54c5', cursor: 'default' }}
              date={"Duration: 22 August 2022 - 22 August 2023"}
              iconStyle={{ background: '#8e54c5', color: '#fff', cursor: 'default' }}
              position={"right"}
              icon={<MdVerified />}
            >
              <h3 className="vertical-timeline-element-title">Ex-Vice President Of Avant Garde</h3>
              <p>As vice president of Avant Garde-ADGITM, led a society of 70+ dedicated members, managing and overseeing all the department workings, events,
                and initiatives, and ensuring the successful execution of various events, workshops and art walks. This experience made me realise that leadership
                is not about wielding power, but about serving others and fostering an environment where everyone can thrive and contribute their best.
                This process led to the enhancement of my, leadership, management and team-building qualities.</p>
            </VerticalTimelineElement>

            {/* Content head */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#8e54c5', color: '#fff', cursor: 'default', borderBottom: '2px solid #fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #8e54c5', cursor: 'default' }}
              date={"Duration: 29 August 2021 - 24 August 2022"}
              iconStyle={{ background: '#8e54c5', color: '#fff', cursor: 'default' }}
              position={"right"}
              icon={<MdVerified />}
            >
              <h3 className="vertical-timeline-element-title">Ex-Content department Head </h3>
              <p>As the leader of the content team, I had the privilege of guiding a talented group of people in my society under my leadership skills.
                Through effective communication and strategic planning, we consistently delivered high-quality content for our society posts, for any events
                or competitions that engaged our target audience and increased our society reach. Navigating challenges such as tight deadlines and evolving trends,
                I fostered a collaborative environment that encouraged innovation and allowed each team member's strengths to shine.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#8e54c5', color: '#fff', cursor: 'default', borderBottom: '2px solid #fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #8e54c5', cursor: 'default' }}
              date={"Duration: 02 August 2022 - 10 September 2022"}
              iconStyle={{ background: '#8e54c5', color: '#fff', cursor: 'default' }}
              position={"right"}
              icon={<MdVerified />}
            >
              <h3 className="vertical-timeline-element-title">IBM Summer Training On Data Science and Machine Learning </h3>
              <p>Completed my IBM training for 90+ hours on data science and machine learning. During this training, I gained
                knowledge of Python learned various concepts of Machine Learning and deep-dived into various algorithms.
                During this training, I have also created a project on heart stroke prediction.</p>
              <p className='extra'>Team Size: 4</p>
              <div className="button">
                <a href={IMG2} target="new" className='exp_button'>IBM Certificate</a>
              </div>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </section>
    </div>
  )
}

export default Experience
