import React, { Component } from "react";
import axios from "axios";
import './Style.css'

class Services extends Component{

    state = {
        srvire :[]
    }
    componentDidMount(){
        axios.get('js/main.json').then((res) =>{this.setState({
            srvire : res.data.serefer
        })});
    }
    render(){
        const {srvire} = this.state
        const serveclist = srvire.map((respons) =>{
            return(
                <div className="rweo" key={respons.id}>
                <i className={respons.icon}></i>
                <h2>{respons.titlee}</h2>
                <p>{respons.addres}</p>
                </div>
            );
        })
        return(
         <div className="server">
         <div className="container">
          <div className="servere">our Services</div>
          <div className="rowe-server">
          {serveclist}
          </div>
         </div>
         </div>
        );
    }
}

export default Services;