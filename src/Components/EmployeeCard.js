import React from "react";
//import "../../Styles/Screens/loginScreen.css"

class EmployeeCard extends React.Component {
    render() {
      return (
        <div className="employee">
            <div className="picture-name">
                <div className="profilepicture">
                    <img src="./stock_profilepicture.jpg"/>
                </div>
                <div className="name">

                    <p>Vorname</p>
                    <p>Nachname</p>
                    <span>Junior Software Developer</span>

                </div>
                
                
            </div>
            
        </div>
      );
    }
   }
   export default EmployeeCard;