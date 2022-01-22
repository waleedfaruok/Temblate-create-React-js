import React, { Component } from 'react';
import axios from 'axios'
import './Style.css'

 class About extends Component {

  state ={
    work : []
  }

  componentDidMount(){
    axios.get('js/main.json').then((res) => {this.setState({
      work : res.data.about
    })});
  }
  render() {
    const {work} = this.state;
    const workliist = work.map((pop) =>{
      return(
        <div className='rowe' key={pop.id}>
        <div className='imge'>
         <img src={pop.img}alt='this is img'/>
        </div>
        <div className='work'>
         <h1>{pop.title}</h1>
         <p>{pop.address}</p>
         <button>read more</button>
        </div>
       </div>
      )
    })
    return(
      <div className='working'>
       <div className='container'>
       <div className='about'>About us</div>
        {workliist}
       </div>
      </div>
    );
  }
}
export default  About; 