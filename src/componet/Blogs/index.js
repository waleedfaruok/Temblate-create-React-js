import React from 'react';
import './Style.css'
function Blogs() {
  return(
    <div className='blogs'>
    <div className='container'>
    <div className='our-blogs'>our blogs</div>
    <div className='row-blogs'>
    <div className='blog'>
       <img src='image/ip1.jpg'/>
      <div className='blo'>
          <p>blog title goes here</p>
          <p>blog title goes here lorem blog title goes here blog title goes here</p>
          <button>read more</button>
      </div>
    </div>
    <div className='blog'>
       <img src='image/Home5.jpg'/>
      <div className='blo'>
          <p>blog title goes here</p>
          <p>blog title goes here lorem blog title goes here blog title goes here</p>
          <button>read more</button>
      </div>
    </div>
    <div className='blog'>
       <img src='image/Home7.jpg'/>
      <div className='blo'>
          <p>blog title goes here</p>
          <p>blog title goes here lorem blog title goes here blog title goes here</p>
          <button>read more</button>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
  
}
export default Blogs;
