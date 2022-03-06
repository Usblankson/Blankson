import React from 'react'
import './portfolio.css'
import P1 from '../../assets/yumexz.jpg'
import P2 from '../../assets/zigatext_mobile.jpg'
import P3 from '../../assets/cryptoknowhow.png'
import P4 from '../../assets/cryptoknowhow.png'

const data = [
  {
    id: 1,
    image: P1,
    title: 'Yumexz Autotrading',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elitEa rerum velit dicta laboriosam quos eaque! Eligendi?',
    demo: 'http://cryptoknowhow.com.ng'
  },
  {
    id: 2,
    image: P2,
    title: 'Zigatext',
    desc: 'A unified enterprise messaging and communication system designed to cater for single/bulk SMS, phonebook contact sync services, Free SMS, SMS Newsletter, Autopilot Birthday Messaging, and lots of other exciting functionalities.',
    demo: 'https://zigatext.com'
  },
  {
    id: 3,
    image: P3,
    title: 'Yumexz Autotrading',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elitEa rerum velit dicta laboriosam quos eaque! Eligendi?',
    demo: 'http://cryptoknowhow.com.ng'
  },
  {
    id: 4,
    image: P4,
    title: 'Yumexz Autotrading',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elitEa rerum velit dicta laboriosam quos eaque! Eligendi?',
    demo: 'http://cryptoknowhow.com.ng'
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {
            data.map(({id, image, title, desc, demo}) => {
              return( 
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <div className="portfolio__item-cta">
                    <a href={demo} className='btn-p btn-portfolio' target='_blank' rel='noreferrer'>Live link</a>
                  </div>
                </article>
              )
            })
          }
            {/* <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={P1} alt="yumexz " />
                </div>
                <h3>Yumexz Autotrading</h3>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ea rerum velit dicta laboriosam quos eaque! Eligendi?
                 </p>
                 <div className="portfolio__item-cta">
                   <a href="http://cryptoknowhow.com.ng" className='btn-p btn-portfolio' target='_blank' rel='noreferrer'>Live link</a>
                 </div>
            </article> */}
        </div>
    </section>
  )
}

export default Portfolio