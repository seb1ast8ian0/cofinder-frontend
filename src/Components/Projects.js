import React from "react";
import Project from "./Project";
import '../Styles/Components/project.css'

function Projects(){

    var projects = [];
    for (var i = 0; i < 10; i++) {
      projects.push(
        <Project id={i}/>
      );
    }

      return (
        <div className="wrapper">
            <h2>Meine Projekte:</h2>
            <div className="projects">
                
                {projects}
            </div>
        </div>
        
      );

    
    
   }
   export default Projects;