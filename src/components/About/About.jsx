import React from 'react'
import Navbar from '../Navbar/Navbar'
import zeeshan from '../../public/images/zeeshan.jpg'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
const About = () => {
  return (
    <div>
      <Navbar header="About me"/>
      <section className="about-us">
        <div className="row">
            <div className="about-column">
            <div className="scrolling-words-container">
            <span >Creative</span>
            <div className="scrolling-words-box">
              <ul>
                <li>Designer</li>
                <li >Freelancer</li>
                <li >Developer</li>
              </ul>
            </div>
</div>
                <p className="para about-para">
                As a Mean/Mern developer, I am passionate about creating innovative web applications that push the boundaries of what's possible. With expertise in the entire web development stack - from the front-end to the back-end - I have a deep understanding <br/> of what it takes to build robust and scalable web applications.

I thrive in dynamic and collaborative environments where creativity and problem-solving are valued. Whether it's working on a new project from scratch or improving an existing one, I am always eager to take on new challenges and learn new technologies.
<br/>

In addition to my technical skills, I am a strong communicator and team player. I believe that effective communication is key to success in any project, and I always strive to maintain open lines of communication with all stakeholders.
<br/>

Overall, I am committed to delivering high-quality solutions that meet the needs of my clients and users. If you're looking for a Mean/Mern developer who is passionate, collaborative, and results-driven, then I'm the right person for the job.
                </p>
                <Link to={'/portfolio/contact'} className="hero-btn red-btn">CONTACT NOW</Link>
            </div>
            <div className="about-column ">
                <img src={zeeshan} alt=""/>

            </div>
        </div>
    </section>
    
   <Footer/>
    </div>
  )
}

export default About
