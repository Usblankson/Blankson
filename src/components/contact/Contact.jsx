import React, {useState} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger, FaWhatsapp} from 'react-icons/fa'
// const Result = () => {
//   return(
//     // <div> 
//     //   <p>fdfddds</p>
//     // </div>
//     Swal.fire({
//       icon: 'success',
//       title: 'Message Sent Successfully'
//     })
   
//   );
// };

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gr9n26o', 'template_9oa0eza', e.target, 'WNFxy2UKfBzxJUmgP')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Message sent successfully',
            showConfirmButton: false,
            timer: 1500
          })
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: false,
            timer: 1500
          })
      }
      );
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
          <div className="contact__options">
             <article className="contact__option">
             <MdOutlineEmail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>info@blankson.dev</h5>
             <a href="mailto:uyohoiniblankson@gmail.com">Send a message </a>
             </article>
          
             <article className="contact__option">
              <FaFacebookMessenger className='contact__option-icon'/>
             <h4>Messenger</h4>
             <h5>Uyohoini Blankson</h5>
             <a href="https://m.me/uyohoini.blankson" target="_blank" rel="noreferrer">Send a message </a>
             </article>
        
             <article className="contact__option">
             <FaWhatsapp className='contact__option-icon'/>
             <h4>Whatsapp</h4>
             <h5>+2349025474544</h5>
             <a href="https://wa.me/2349025474544">Send a message </a>
             </article>
          </div>
          <form  onSubmit={sendEmail}>
            <input type="text" name='fullname' placeholder='Full Name'  required/> <br />
            <input type="email" name="email" placeholder='Email' required /> <br />
            <textarea name="message"  rows="7" placeholder='Message' required></textarea><br />
            <button type='submit' className='btn btn-primary'>Send Message</button>
             
             {/* <div className="roe">
               {result ? <Result/> : null}
             </div> */}
          </form>
      </div>
</section>
  )
}

export default Contact