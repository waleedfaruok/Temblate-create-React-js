import React, { Component } from "react";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Pricecing from './Pricecing';
import Review from './Review';
import Contact from './Contact';
import Blogs from "./Blogs";
import Footr from "./Footer";

class App extends Component {
    constructor(){
        super();
        this.addtogale = () =>{
          const list =  document.querySelector('.list1');
          if(list.style.display === 'none'){
            list.style.display ='block'
          }else{
            list.style.display  ='none'
          }
        }
    }
    render() {
        return (
            <div>
            <Navbar addtoglelist={this.addtogale}/>
            <Home/>
            <About/>
            <Services/>
            <Projects/>
            <Pricecing/>
            <Review/>
            <Contact/>
            <Blogs/>
            <Footr/>
            </div>
        )
    }
}
export default App;
