import React from 'react'
import { useEffect, useRef } from 'react';
import { useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom'
import NavLogo from '../../public/images/navLogo1.png'
import user1 from '../../public/images/user1.jpg'
import user2 from '../../public/images/user2.jpg'
import react from '../../public/images/react.png'
import angular from '../../public/images/angular.png'
import node from '../../public/images/node.png'
import mongo from '../../public/images/mongoDB.png'
import mysql from '../../public/images/mysql.png'
import todo from '../../public/images/todo.jpg'
import employee from '../../public/images/employee.jpg'
import bookStore from '../../public/images/bookStore.jpg'
import blood from '../../public/images/blood.jpg'
import weather from '../../public/images/weather.png'
import shazam from '../../public/images/shazam.jpg'
import Typewriter from "typewriter-effect";
import resume from '../../public/images/resume.pdf'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from '../Footer/Footer'


const Index = () => {
    let myRef = React.createRef();
    const location = useLocation();
     const ref = useRef(null);
    function showMenu(){
        myRef.current.style.right = "0";
        myRef.current.style.transition = "1s"
    }
    function closeMenu(){
        myRef.current.style.right = "-200px";
        myRef.current.style.transition = "1s"
    }
        const scrollToServices = () => {
          const element = document.getElementById('services');
          if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
            closeMenu()
          }
        }
        const scrollToProjects = () => {
          const element = document.getElementById('projects');
          if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
            closeMenu()
          }
        }

        const options = {
                autoplay: true,
                autoplayTimeout: 3000, // Time until next slide starts (in ms)
                loop: true,
                margin: 30,
                responsiveClass: true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                }
};
useEffect(() => {
    if (location.hash == '#service') {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu()
  }, [location]);

  return (
    <>
    <div>

    <section className="header">
        <nav className="navbar">
            <div className="navLogo">
               <img src={NavLogo} alt="Loading..."/>
            </div>
            <div ref={myRef} className="nav-links" id="nav-links">
                
            <i className="fa fa-times" onClick={()=>closeMenu()}></i>
                <ul className="navlist">
                <li> <Link to={'/portfolio'}>  HOME </Link> </li>
                    <li> <Link to={'/portfolio/about'}> ABOUT </Link> </li>
                    <li> <Link onClick={scrollToServices}> Services </Link> </li>
                    <li> <Link onClick={scrollToProjects}> Projects </Link> </li>
                    <li> <a href={resume} target='_blank' rel="noreferrer">Resume</a> </li>
                    <li> <Link to={'/portfolio/contact'}> CONTACT </Link> </li>
                </ul>
            </div>
            
            
            <div className="burger" onClick={()=>showMenu()}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
        <div className="textBox">
            <h1 className='namePara'>
                Hi, my name is
            </h1>
            <h1 className='bigFont'>
            <Typewriter
                options={{
                strings: ['Zeeshan Haider.', ''],
                autoStart: true,
                loop: true,
        }}
      />
            </h1>

           
            <p className="para">
            I’m a software engineer specializing in MEAN/MERN technologies, I have  a <br/> demonstrated track record of developing robust and scalable web applications <br/> using industry-leading tools such as MongoDB/MySQL, Express, <br/> Angular/React, and Node.js.
            </p>
            <Link to={'/portfolio/about'} className="hero-btn">Visit to know More</Link>
        </div>
    </section> 
   


    
    <section ref={ref} id='services' className="course">
        <h1>
            Services
        </h1>
        <p className="para">
        Building responsive and scalable web applications, developing RESTful APIs, integrating third-party APIs, implementing user authentication and authorization, utilizing MongoDB/MySQL for database management, and using Angular/React for front-end development.
        </p>
        <div className="center">
            {/* <img src={html} alt="html" /> */}
            <img src={react} alt="React" />
            <img src={angular} alt="Angular" />
            <img src={node} alt="Node" />
            <img src={mongo} alt="mongoDB" />
            <img src={mysql} alt="mysql" />
        </div>
        <div className="row">
            <div className="course-column">
                <h3>
                Full Stack Development
                </h3>
                <p className="para">
                Complete Full Stack Development using MEAN and MERN Stacks. Specialized in React, Angular, Node, SQL, NoSQL among other technologies.
                </p>
            </div>
            <div className="course-column">
                <h3>
                Front-End Development
                </h3>
                <p className="para">
                Create beautiful websites using HTML/CSS and Javascript. Proficient in 3rd Party Libraries like Tailwind, Bootstrap and Angular Material.
                </p>
            </div>
            <div className="course-column">
                <h3>
                Back-End Development
                </h3>
                <p className="para">
                Create servers using Node.js and express as the framework. Connection to Database and CRUD operations using REST APIs.
                </p>
            </div>
            </div>
    </section>

    {/* <section className="campus">
        <h1>
            Our Global Campus
        </h1>
        <p className="para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, dolor?
        </p>
        <div className="row">
            <div className="campus-column">
                <img src={imgLondon} alt="Loading..."/>
                <div className="layer">
                    <h3>
                        ISLAMABAD
                    </h3>
                </div>
            </div>
            <div className="campus-column">
                <img src={washingtonImg} alt="Loading..."/>
                <div className="layer">
                    <h3>
                        LAHORE
                    </h3>
                </div>
            </div>
            <div className="campus-column">
                <img src={newyorkImg} alt="Loading..."/>
                <div className="layer">
                    <h3>
                        MULTAN
                    </h3>
                </div>
            </div>
        </div>

    </section> */}




    <section id='projects' className="facilities">
        <h1>
            What I've done?
        </h1>
        <p className="para">
            I've done many projects in React, Angular and html CSS frontend projects. Some projects are full stack (MERN/MEAN).<br/>
            Here are few of them.
        </p>
<OwlCarousel className='owl-theme' {...options} loop margin={10} >
    <div className='item'>
    <div className="facilities-column">
                <img src={bookStore} alt="Library..."/>
                <h3>
                    Online Books Store
                </h3>
                <p className="para">
                The online bookstore website is a responsive and dynamic e-commerce platform built with HTML, CSS, and JavaScript. This includes all the necessary files for front-end design, such as web pages, images, and stylesheets, as well as client-side scripting for interactive features. The site allows customers to browse and purchase books, and view their order history.
                </p>
            </div>
    </div>
    <div className='item'>
    <div className="facilities-column">
                <img src={blood} alt="basketball PG..."/>
                <h3>
                    Blood Bank App
                </h3>
                <p className="para">
                The Blood Bank website built using the MERN stack is a full-stack web application. The website allows users to register as donors or recipients, search for blood banks, and make blood requests or donations. The backend is built using Node.js and Express, with MongoDB as the database, while the frontend is built using React. The website also incorporates authentication ...
                </p>
            </div>
    </div>
    <div className='item'>
    <div className="facilities-column">
                <img src={todo} alt="Library..."/>
                <h3>
                    Todo App
                </h3>
                <p className="para">
                  The ToDo app allows users to create, read, update and delete tasks, and it includes features like user authentication, responsive design, and error handling. The code is well-organized, easy to follow and includes comments, making it easy for developers to understand and modify the code to fit their needs. This website contains the code for a ToDo app website built using the MERN stack. 
                </p>
            </div>
    </div>
    <div className='item'>
    <div className="facilities-column">
                <img src={employee} alt="Library..."/>
                <h3>
                    Employees Management System
                </h3>
                <p className="para">
                    The Employees Management System project in MERN is a web-based application designed to manage the employee data of a company. The system allows users to perform various tasks such as adding new employees, updating their information, deleting employee records. The front-end of the application is built using React, while the back-end is powered by Nodejs ...
                </p>
            </div>
    </div>
    <div className='item'>
    <div className="facilities-column">
                <img src={weather} alt="Library..."/>
                <h3>
                    Weather App
                </h3>
                <p className="para">
                The Weather App project in React is a web application that allows users to get the current weather conditions and forecast for any location. The app uses a weather API to fetch data and display it in a user-friendly format. The React framework allows for a responsive and dynamic user interface, with components that update in real-time as the user interacts with the app.
                </p>
            </div>
    </div>
    <div className='item'>
    <div className="facilities-column">
                <img src={shazam} alt="Library..."/>
                <h3>
                    Shazam App
                </h3>
                <p className="para">
                The Weather App project in React is a web application that allows users to get the current weather conditions and forecast for any location. The app uses a weather API to fetch data and display it in a user-friendly format. The React framework allows for a responsive and dynamic user interface, with components that update in real-time as the user interacts with the app.
                </p>
            </div>
    </div>
</OwlCarousel>
    </section>

<section className="testimonial">
    <h1>
        What my Clients Say?
    </h1>
    <p className='para'>
        Here are few statements that my clients said about my work.
    </p>
    <div className="row">
        <div className="testimonial-column">
            <img src={user1} alt="User1..."/>
            <div>

                <p className="para">
                I was pleasantly surprised by how efficient and knowledgable he is regarding his field. He gets a 4 star from me as a developer.

                </p>
                <h3>
                    Christian Barley
                </h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
               
            </div>
        </div>
        <div className="testimonial-column">
            <img src={user2} alt="User1..."/>
            <div>

                <p className="para">
                Zeeshan is a very talented and hard working guy. He solved my problems in a timely manner and is an excellent communicator.
                </p>
                <h3>
                    Paul Steve 
                </h3>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star-half-alt" ></i>
            </div>
        </div>
       
    </div>
</section>


<section className="cta">
    <h1>
    Thank you for taking the time to review my portfolio.  
    </h1>
    <p className="para">
    If you have any questions or would like to discuss potential collaborations  or job opportunities,<br/> please feel free to contact me using the information provided. <br/>
    </p>
    <Link to={'/portfolio/contact'} className="hero-btn btn-custom">Contact Me</Link>
</section>


<Footer/>

    </div>
</>
  )
}

export default Index
