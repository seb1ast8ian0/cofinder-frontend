import React from "react";
//import "../../Styles/Screens/loginScreen.css"

class EmployeeCard extends React.Component {
    render() {
      return (
        <div className="employeeCard">
            <div className="name-and-title">
                <div className="name">Max Mustermann</div>
                <div className="title">Junior Software Developer</div>
            </div>
            <div className="profilepicture">
                <img src="/stock_profilepicture.jpg"/>
            </div>
            <div className="available-hours">
              <span className="material-symbols-outlined">schedule</span>
              <div className="text">20 Stunden, verfügbar</div>
            </div>

            <div className="experience">
              <span className="material-symbols-outlined">work_history</span>
              <div className="text">3 Jahre</div>
            </div>
            
            <div className="salary">
              <span className="material-symbols-outlined">attach_money</span>
              <div className="text">90€/h</div>
            </div>

            <div className="more-info">
              <div className="title">Kenntnisse:</div>
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
   export default EmployeeCard;