import React, { Component } from 'react';
import axios from 'axios';
import './Style.css'

class Projects extends Component {
  state ={
      project : []
  }

  componentDidMount(){
      axios.get('js/main.json').then((res) =>{this.setState({
        project : res.data.Projects
      })});
  }
  render() {
      const {project} = this.state;
      const projectslist = project.map((projecte) =>{
          return(
            <div className='rwo' key={projecte.id}>
            <div className='imges'>
             <img src={projecte.imges}/>
            </div>
             <div className='dreame'>
               <div className='Hme'>
                 <p>{projecte.tit}</p>
                 <p>{projecte.disghin}</p>
               </div>
               <div className='icon'>
               <i className={projecte.icones}></i>
               </div>
             </div>
           </div>
          );
      })
    return (
     <div className='Projects'>
      <div className='container'>
      <div className='dare'>our Projects</div>
       <div className='row-Projects'>
         {projectslist}
       </div>
      </div>
     </div>
    );

  }
}
export default Projects;