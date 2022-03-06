import React from 'react'
import './experience.css'
import {FaHtml5, FaCss3Alt, FaServer,FaBootstrap, FaReact, FaNodeJs, FaPython} from 'react-icons/fa'
import {SiJavascript, SiBlockchaindotcom, SiMongodb, SiPhp, SiLaravel, SiFlask, SiMysql, SiFlutter, SiSolidity, SiDart ,SiWeb3Dotjs} from 'react-icons/si'
import {GiDrop} from 'react-icons/gi'
import {AiFillCode, AiOutlineMobile} from 'react-icons/ai'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have?</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
            <AiFillCode className='skill__icon'/>
            <h3>Frontend Development</h3>
            <div className="experience__content">
                  <article className='experience__details'>
                      <FaHtml5/>
                      <div>
                        <h4>HTML</h4>
                      <small className="text-light">Experienced</small>
                      </div> 
                      
                  </article>
                  <article className='experience__details'>
                      <FaCss3Alt/>
                      <div>
                      <h4>CSS</h4>
                      <small className="text-light">Experienced</small>
                      </div>  
                  </article>
                  <article className='experience__details'>
                      <SiJavascript/> 
                      <div>
                        <h4>JavaScript</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                      
                  </article>
                  <article className='experience__details'>
                      <FaBootstrap/> 
                      <div>
                         <h4>Bootstrap</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                     
                  </article>
                  <article className='experience__details'>
                      <FaReact/> 
                      <div>
                        <h4>React</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                      
                  </article>
              </div>
        </div>
        <div className="experience__backend">
          <FaServer className='skill__icon'/>
            <h3>Backend Development</h3>
              <div className="experience__content">   
              <article className='experience__details'>
                      <FaNodeJs/> 
                      <div>
                        <h4>Node Js</h4>
                      <small className="text-light">Intermediate</small>
                      </div>
                      
                  </article>
                  <article className='experience__details'>
                      <SiMongodb/>
                      <div>
                        <h4>MongoDB</h4>
                       <small className="text-light">Intermediate</small>
                      </div> 
                      
                  </article>
                  <article className='experience__details'>
                      <SiPhp/> 
                      <div>
                        <h4>PHP</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                      
                  </article>
                  <article className='experience__details'>
                      <SiLaravel/> 
                      <div>
                        <h4>Laravel</h4>
                      <small className="text-light">Intermediate</small>
                      </div>
                      
                  </article>
                  <article className='experience__details'>
                      <GiDrop/> 
                      <div>
                        <h4>FuelPHP</h4>
                      <small className="text-light">Intermediate</small>
                      </div>
                      
                  </article>
                  <article className='experience__details'>
                      <SiFlask/>
                      <div>
                        <h4>Flask</h4>
                      <small className="text-light">Intermediate</small>
                      </div> 
                      
                  </article>
                  <article className='experience__details'>
                      <SiMysql/>
                      <div>
                        <h4>MySQL</h4>
                       <small className="text-light">Intermediate</small>
                      </div> 
                      
                  </article>
                  <article className='experience__details'>
                      <FaPython/>
                      <div>
                        <h4>Python</h4>
                        <small className="text-light">Intermediate</small>
                      </div> 
                      
                  </article>
              </div>
        </div>
        <div className="experience__mobile">
        <AiOutlineMobile className='skill__icon'/>
            <h3>Mobile Development</h3>
            <div className="experience__content">
                  <article className='experience__details'>
                  
                      <SiFlutter/>
                      <div>
                          <h4>Flutter</h4>
                         <small className="text-light">Experienced</small>
                      </div> 
                      
                  </article>
                  <article className='experience__details'>
                      <SiDart/> 
                      <div>
                        <h4>Dart</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                      
                  </article>
            </div>
        </div>
        <div className="experience__blockchain">
        <SiBlockchaindotcom className='skill__icon'/>
            <h3>Blockchain Development</h3>
            <div className="experience__content">
                  <article className='experience__details'>
                      <SiWeb3Dotjs/> 
                       <div>
                         <h4>Web3 JS</h4>
                         <small className="text-light">Experienced</small>
                       </div>
                      
                  </article>
                  <article className='experience__details'>
                      <SiSolidity/> 
                      <div>
                        <h4>Solidity</h4>
                         <small className="text-light">Beginner</small>
                      </div>
                      
                  </article>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Experience