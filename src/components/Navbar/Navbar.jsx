import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import navLogo from '../../public/images/navLogo1.png'
import resume from '../../public/images/resume.pdf'
import { animated, useSpring } from '@react-spring/web'
  
 

const Navbar = ({header, navStyle}) => {
    const styles = useSpring({
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      })
    let myRef = React.createRef();
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
      useEffect(()=>{
        closeMenu()
      },[])
  return (
    <>
         <div>
       <section className="sub-header">
        <nav className="navbar">
            <div className="navLogo">
               <img src={navLogo} alt="Loading..."/>
            </div>
            <div ref={myRef}  className="nav-links" id="nav-links">
                
                <i className="fa fa-times" onClick={()=>closeMenu()}></i>
                <ul className="navlist">
                    <li> <Link to={'/portfolio'}>  HOME </Link> </li>
                    <li> <Link to={'/portfolio/about'}> ABOUT </Link> </li>
                    <li> <Link to={'/portfolio/#service'}> Services </Link> </li>
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
