
import React, { Component } from 'react';
import './Style.css'
import axios from 'axios';

 class Pricecing extends Component {

    state = {
        pricing :[]
    }

    componentDidMount(){
        axios.get('js/main.json').then((res) =>{this.setState({
            pricing : res.data.pricin
        })});
    }
  render() {
      const {pricing} = this.state;
      const pricenglist = pricing.map((respos) =>{
          return(
            <div className='prod' key={respos.id}>
            <i className={respos.icon}></i>
            <p className='pd'>{respos.title}</p>
            <div className='dolr'>
                <h1><span>$</span>150<span>/mo</span></h1>
            </div>
            <p>{respos.desgin}</p>
            <p>{respos.shiment}</p>
            <p>{respos.supply}</p>
            <p>{respos.ance}</p>
            <p>{respos.support}</p>
            <button>choose plan</button>
            </div>
          );
      });
    return (
      <div className='pricin'>
       <div className='container'>
       <div className='pro'>our pricing</div>
       <div className='row-peicing'>
         {pricenglist}
       </div>
       </div>
      </div>
    );
  }
}
export default Pricecing;
