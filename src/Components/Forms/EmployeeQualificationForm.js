import React from "react";
import "../../Styles/Screens/employeeBasicDataScreen.css"

class EmployeeQualificationForm extends React.Component {
    render() {
        return (
            <div className="employee-work">
                <div className="quali-data">
                    <div className="addButton">
                        <button><span className="material-symbols-outlined">add_circle</span>
                            <span> Berufserfahrung hinzufügen</span>

                        </button>
                    </div>
                    <div className="experience-box">
                        <h4>Berufserfahrung bearbeiten</h4>
                        <h4>Position</h4>
                        <form>
                            <div className="small-position-input">
                                <label htmlFor="surname">Positionsbezeichnung</label>
                                <input type="text" name="surname" />
                            </div>
                            <div className="person-input">
                                <label htmlFor="worktype">Beschäftigungsart</label>
                                <select name="worktype" >
                                    <option value="" disabled selected hidden>Wählen </option>
                                </select>
                            </div>
                        </form>
                        <br></br><br></br><br></br>
                    <h4><br></br>Unternehmen</h4>
                    <form>

                            <div className="position-input">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="surname" />
                            </div>
                            <div className="person-input">
                                <label htmlFor="branche">Branche</label>
                                <select name="worktype" >
                                    <option value="" disabled selected hidden>Wählen </option>
                                </select>
                            </div>
                        </form>
                        <br></br><br></br><br></br>
                    <h4><br></br>Zeitraum</h4>
                    <p>von</p><p>bis</p>
                    <h4>Beschreibung (optional)</h4>
                    </div>
                </div>

            </div>




        );
    }
}
export default EmployeeQualificationForm;