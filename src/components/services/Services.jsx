import React from 'react'
import './services.css'
import {BiCheck} from  'react-icons/bi'
import {AiFillCode, AiOutlineMobile} from  'react-icons/ai'
import {SiBlockchaindotcom} from  'react-icons/si'
function Services() {
  return (
    <section id='services'>
        <h5>What I offer?</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="services">
             <div className="service__head">
             <AiFillCode className='services__icon'/>
                <h3>Web Development</h3>
             </div>
             <ul className="service__list">
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Responsive Web Development and Design.</p>
               </li>
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Content Development.</p>
               </li>
               <li>
               <BiCheck className='service__list-icon'/>
               <p>eCommerce Development.</p>
               </li>
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Laravel Development.</p>
               </li>
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Development, Integration & Platform Engineering.</p>
               </li>
             </ul>
          </article>

          {/* =============================   End of web dev =====================  */}

          <article className="services">
             <div className="service__head">
             <AiOutlineMobile className='services__icon'/>
                <h3>Mobile Development</h3>
             </div>
             <ul className="service__list">
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Responsive App Development and Design.</p>
               </li>
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Cross and native platform iOS and Android apps development.</p>
               </li>
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Custom iOS and Android app development.</p>
               </li>
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Maintenance support.</p>
               </li>
             </ul>
          </article>

          {/* ================================= End of mobile dev ===========================  */}

          <article className="services">
             <div className="service__head">
             <SiBlockchaindotcom className='services__icon'/>
                <h3>Blockchain Development</h3>
             </div>
             <ul className="service__list">
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Ethereum Blockchain Development.</p>
               </li>
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Credits Application Development.</p>
               </li>
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Smart Contract Development.</p>
               </li>
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Solana Blockchain Development.</p>
               </li>
               <li>
               <BiCheck className='service__list-icon'/>
               <p>Integration & Platform Engineering.</p>
               </li>
             </ul>
          </article>
        
      {/* =========================================  end of Blockchain =======================  */}


        </div>
    </section>
  )
}

export default Services