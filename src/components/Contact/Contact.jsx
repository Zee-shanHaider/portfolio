import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Formik, Form, Field, useFormikContext } from 'formik';
import { send } from 'emailjs-com';
import * as Yup from 'yup';
import { useState } from 'react'
import { Audio } from 'react-loader-spinner'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  subject: Yup.string()
    .min(2, 'Too Short!')
    .max(300, 'Too Long!')
    .required('Required'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
const Contact = () => {
  
  const [toSend, setToSend] = useState({
name: '',
subject: '',
message: '',
email: '',
});
const handleChange = (e)=>{
  setToSend({ ...toSend, [e.target.name]: e.target.value });
  console.log(toSend)
}
  return (
    <div>
      <Navbar header='Contact me'/>
      <section className="contact-us">
       <div className="row">
           <div className="contact-column">
                 <div>
                     <i className="fa fa-home" ></i>
                    <span>
                    <h5>
                        Ali Town Lahore
                    </h5>
                    <p className="para">
                        Lahore, Punjab, Pakistan
                    </p>
                    </span>
                    <br/>
            
                </div>
            <div>
                <i className="fa fa-phone" ></i>
                <span>
                    <h5>
                        +923047759104
                    </h5>
                    <p className="para">
                        Feel free to contact me anytime 
                    </p>
                </span>
                <br/>

            </div>
            <div>
                <i className="fa fa-envelope-o" ></i>
                <span>
                    <h5>
                        zeeshan.hayder@outlook.com
                    </h5>
                    <p className="para">
                        Email me 
                    </p>
                </span>
                <br/>

            </div>
        
           </div>
           <div className="contact-column">
                    <Formik
                initialValues={
                  { name: '', email: '', subject: '', message: '' }
                }
                validationSchema={SignupSchema}
                onSubmit={(values, {resetForm}) => {
                  console.log(values)
                  // same shape as initial values
                  send(
                    'service_1qppybs',
                    'template_eyq8n29',
                    {
                      from_name: values.name,
                      from_email: values.email,
                      subject: values.subject,
                      message: values.message,
                    },
                    'F2_cuF2uz6h62qKbh'
                  )
                    .then((response) => {
                      resetForm()
                    })
                    .catch((err) => {
                      console.log('FAILED...', err);
                    });
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field name="name" placeholder="Enter Your Name"/>
                    {errors.name && touched.name ? (
                      <div className='error'>{errors.name}</div>
                    ) : null}
                    <Field name="email" type="email" placeholder="Enter Your email address" />
                    {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
                    <Field name="subject" placeholder="Enter Your Subject" />
                    {errors.subject && touched.subject ? (
                      <div className='error'>{errors.subject}</div>
                    ) : null}
                    <Field as="textarea" rows="8" name="message" placeholder="Message"/>
                    {errors.message && touched.message ? (
                      <div className='error'>{errors.message}</div>
                    ) : null}
                    <button className="red-btn hero-btn" type="submit">Send Message</button>
                  </Form>
                )}
              </Formik>

            </div>
               
       </div>
    
   </section>
   <Footer/>
    </div>
  )
}

export default Contact
