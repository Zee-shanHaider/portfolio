import React, { useEffect } from 'react'
import imgLogo from '../../public/images/logo.png'
import { Link } from 'react-router-dom';
import navLogo from '../../public/images/navLogo1.png'
import resume from '../../public/images/resume.pdf'
import { animated, useSpring } from '@react-spring/web'
  
 

const Navbar = ({header}) => {
    const styles = useSpring({
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      })
    let myRef = React.createRef();
    // let navLinks =document.getElementById("nav-links");
    function showMenu(){
        myRef.current.style.right = "0";
        myRef.current.style.transition = "1s"
    }
    function closeMenu(){
        myRef.current.style.right = "-200px";
        myRef.current.style.transition = "1s"
    }
    function downloadDocument() {
        const link = document.createElement('a');
        link.href = '../../public/images/resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
  return (
    <>
         <div>
       <section class="sub-header">
        <nav class="navbar">
            <div class="navLogo">
               <img src={navLogo} alt="Loading..."/>
            </div>
            <div ref={myRef} class="nav-links" id="nav-links">
                
                <i class="fa fa-times" onClick={()=>closeMenu()}></i>
                <ul class="navlist">
                    <li> <Link to={'/'}>  HOME </Link> </li>
                    <li> <Link to={'/about'}> ABOUT </Link> </li>
                    <li> <Link to={'/#service'}> Services </Link> </li>
                    <li> <a href={resume} target='_blank' rel="noreferrer">Resume</a> </li>
                    <li> <Link to={'/contact'}> CONTACT </Link> </li>
                </ul>
            </div>
            
            <div class="burger" onClick={()=>showMenu()}>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </nav>
        
        <h1>
            {header}
        </h1>
    </section> 
    <animated.div style={styles} />
    </div>
    </>
   
  )
}

export default Navbar
