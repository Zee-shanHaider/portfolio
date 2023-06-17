import React from 'react'

const Footer = () => {
  return (
    <div>
      <section className="footer">
    <h4>
        Contact Me
    </h4>
    <p className="para footer-para">
    Thank you for visiting! If you have any questions or comments, I would love to hear from you.
     You can find me <br/> on various social media platforms such as Twitter, Facebook, and LinkedIn. Simply click on the icons <br/> located in the footer to connect with me. I look forward to hearing from you!
    </p>
    <div className="icons">
        <a href="https://www.facebook.com/prince.haider.54966834/" target="_blank" rel="noreferrer"> <i className="fa fa-facebook" ></i></a>
        <a href="mailto:zeeshan.hayder@outlook.com" target="_blank" rel="noreferrer"> <i className="fa fa-envelope" ></i></a>
        <a href="https://github.com/Zee-shanHaider" target="_blank" rel="noreferrer"><i className="fa fa-github" ></i></a>
        <a href="https://twitter.com/ImHussaini512" target="_blank" rel="noreferrer"><i className="fa fa-twitter" ></i></a>
        <a href="https://www.linkedin.com/in/zeeshan-hayder/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" ></i></a>
    </div>
    {/* <p className="para">
        Made with <i className="fa fa-heart-o" ></i> 
    </p> */}
</section>
    </div>
  )
}

export default Footer
