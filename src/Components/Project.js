import React from "react";
import { Link } from "react-router-dom";

function Project(params) {


    
      return (
        <Link to={'/projects/project/'+params.id}>
            <div className="project" onClick={()=>navigate()}>
            <div className="name">Beispielprojekt</div>
            <div className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
            <div className="team">
                <span className="title">Team</span>
                <div className="profiles">
                    <div className="profile">
                        <div className="profilepicture">
                            <img src="./stock_profilepicture.jpg"/>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="profilepicture">
                            <img src="./stock_profilepicture.jpg"/>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="profilepicture">
                            <img src="./stock_profilepicture.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="attribute location">
                <span className="material-symbols-outlined">location_on</span>
                <span>München, DE</span>
            </div>
            <div className="attribute time">
                <span className="material-symbols-outlined">hourglass_empty</span>
                <span>3 Monate verbleibend</span>
            </div>
            </div>
        </Link>
      );


      function navigate(){
      }

    
   }
   export default Project;