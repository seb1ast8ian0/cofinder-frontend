import React from "react";

class Project extends React.Component {
    render() {
      return (
        <div className="project">
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
      );
    }
   }
   export default Project;