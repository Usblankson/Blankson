import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineBook} from 'react-icons/ai'
import {FcAbout, FcServices, FcContacts } from 'react-icons/fc'
import {GrUserExpert} from 'react-icons/gr'
import {MdWorkOutline} from 'react-icons/md'

import { useState } from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active'  : ''}><AiOutlineHome/></a>
      <a href="#about"  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active'  : ''}><FcAbout/></a>
      <a href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active'  : ''}><GrUserExpert/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active'  : ''}><FcServices/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active'  : ''}><MdWorkOutline/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} id='contact-icon' className={activeNav === '#contact' ? 'active'  : ''} ><FcContacts/></a>
    </nav> 
  )
}

export default Nav