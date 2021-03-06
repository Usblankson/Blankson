import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward, FaUsers, FaProjectDiagram} from 'react-icons/fa'

function About() {
  return (
    <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About" />
            </div>
          </div>
          <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>3+ Years </small>
                </article>
                <article className="about__card">
                    <FaUsers className='about__icon'/>
                    <h5>Clients</h5>
                    <small>10+ Clients </small>
                </article>
                <article className="about__card">
                    <FaProjectDiagram className='about__icon'/>
                    <h5>Projects</h5>
                    <small>15+ Completed </small>
                </article>
              </div>

              <p>A full-stack developer.
                 Specializing in building exceptional and trending web and mobile applications. &nbsp; Feel free to take a look at my latest projects. &nbsp; Remotely available.
                 <br /> <br /> projects@blankson.dev &nbsp;  Tel: +2349025474544</p>


                 <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
      )
}

export default About