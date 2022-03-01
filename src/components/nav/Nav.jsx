import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineBook} from 'react-icons/ai'
import {FcAbout, FcServices} from 'react-icons/fc'
import {GrContact} from 'react-icons/gr'

import { useState } from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active'  : ''}><AiOutlineHome/></a>
      <a href="#about"  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active'  : ''}><FcAbout/></a>
      <a href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active'  : ''}><AiOutlineBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active'  : ''}><FcServices/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} id='contact-icon' className={activeNav === '#contact' ? 'active'  : ''} ><GrContact/></a>
    </nav> 
  )
}

export default Nav