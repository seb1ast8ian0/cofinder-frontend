import React from "react";
//import "../../Styles/Screens/loginScreen.css"

class WildCard extends React.Component {
    render() {
      return (
        <div className="wildCard">
            <div className="name-and-title">
                <div className="title">Junior Software Developer</div>
            </div>
            <div className="profilepicture">
                <img src="./cofinder-placeholder.png"/>
            </div>
            <div className="required-hours">
              <span className="material-symbols-outlined">schedule</span>
              <div className="text">20 Stunden benötigt</div>
            </div>

            <div className="required-experience">
              <span className="material-symbols-outlined">work_history</span>
              <div className="text">3 Jahre</div>
            </div>
            
            <div className="maximum-salary">
              <span className="material-symbols-outlined">attach_money</span>
              <div className="text">90€/h</div>
            </div>

            <div className="more-info">
              <div className="title">Benötigte Kenntnisse:</div>
              <div className="text">UI/UX-Design, Figma, JavaScript, HTML, CSS</div>
            </div>

            <div className="languages">
              <div className="flag">
                <img src="https://countryflagsapi.com/png/de" />
              </div>
              <div className="flag">
                <img src="https://countryflagsapi.com/png/gb" />
              </div>
              <div className="flag">
                <img src="https://countryflagsapi.com/png/ro" />
              </div>
            </div>

        </div>
      );
    }
   }
   export default WildCard;