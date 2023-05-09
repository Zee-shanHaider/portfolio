import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Index from '../components/Index/Index';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Blog from '../components/Blog/Blog';
import Error from '../components/404Error/404Error';


const Navigation = () => {
  return (
    <div>
       <Router>
        <Routes>
            <Route index path="/portfolio" element={<Index />} />
            <Route path='/portfolio/about' element={<About/>} />
            <Route path='/portfolio/contact' element={<Contact/>} />
            <Route path='/portfolio/blog' element={<Blog/>} />
            <Route path='*' element={<Error/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default Navigation
