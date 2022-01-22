
import React, { Component } from 'react';
import './Style.css'
class Navbar extends Component {
  render() {
    return(
        <div className='header'>
        <div className='container'>
           <div className='pirint'>
             <div className='title'>
               <h1>we<span>bulid</span></h1>
             </div>
             <ul className='list'>
              <a href='/'>Home</a>
              <a href='/'>About</a>
              <a href='/'>Services</a>
              <a href='/'>Projects</a>
              <a href='/'>Pricecing</a>
              <a href='/'>Contact</a>
              <a href='/'>Blogs</a>
             </ul>
             <div className='icons'>
             <i className="icon1 fas fa-adjust"></i>
             <i className="icon2 fas fa-search"></i>
             <i onClick={this.props.addtoglelist} className="icon3 fas fa-user-alt"></i>
             </div>
           </div>
           <ul className='list1'>
              <a href='/'>Home</a>
              <a href='/'>About</a>
              <a href='/'>Services</a>
              <a href='/'>Projects</a>
              <a href='/'>Pricecing</a>
              <a href='/'>Contact</a>
              <a href='/'>Blogs</a>
             </ul>
        </div>
     </div>
    );
  }
}
export default Navbar;