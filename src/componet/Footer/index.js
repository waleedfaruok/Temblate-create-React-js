import React from 'react';
import './Style.css'

function Footr() {
  return (
    <div className='footr'>
    <div className='container'>
     <ul className='list-fotr'>
      <a href='/'>Home</a>
      <a href='/abput'>Abut</a>
      <a href='/services'>Services</a>
      <a href='/projects'>Projects</a>
      <a href='/pricecing'>Pricecing</a>
      <a href='/contact'>Contact</a>
      <a href='/blogs'>Blogs</a>
     </ul>
     <div className='links'>
      <a href='/'>created by<span>my web developer and designer</span>|all rights</a>
     </div>
    </div>
    </div>
  );
}
export default Footr;