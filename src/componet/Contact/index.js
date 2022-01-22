import React from 'react';
import './Style.css'

 function Contact() {
  return(
      <div className='contact'>
        <div className='container'>
        <div className='cont'>contact us</div>
        <div className='contact-row'>
          <div className='img-cont'>
           <img src='image/ip2.jpg'/>
          </div>
          <div className='get-in'>
           <input type='text' placeholder='name'/>
           <input type='email' placeholder='email'/>
           <input type='number' placeholder='phone'/>
           <textarea className='text-ari' placeholder='message'/>
           <button className='btn'>send message</button>
          </div>
        </div>
        </div>
      </div>
  );
}
export default Contact;