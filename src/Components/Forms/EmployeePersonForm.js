import React from "react";
import "../../Styles/Screens/employeeBasicDataScreen.css"

class EmployeePersonForm extends React.Component {
    render() {
        return (
            <div className="employee-person">
                <form>
                    <div className="data">
                    <div className="smallgridy">
                            <div className="person-input">
                                <label htmlFor="firstname">Vorname</label>
                                <input type="text" name="firstname" placeholder="Vorname" />
                            </div>
                            
                            <div className="person-input">
                                <label htmlFor="lastname">Nachname</label>
                                <input type="text" name="lastname" placeholder="Nachname"/>
                            </div>
                            
                        </div>
                        <div className="smallgridy">

                            <div className="small-person-input">

                                <label htmlFor="birthday">Geburtstag</label>
                                <input type="date" name="birthday" />
                            </div>
                            
                            <div className="person-input">

                                <label htmlFor="email">Email-adresse</label>
                                <input type="text" name="lastname" placeholder="verySweetEmail@123"/>
                                </div>

                            </div>
                        
                        
                    </div>


                </form>

            </div>
        );
    }
}
export default EmployeePersonForm;