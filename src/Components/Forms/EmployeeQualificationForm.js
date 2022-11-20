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
                            <div className="smallgrid">
                            <div className="small-position-input">
                                <label htmlFor="positions">Positionsbezeichnung</label>
                                <input type="text" name="position" />
                            </div>
                            <div className="downdown">
                                <label htmlFor="worktype">Beschäftigungsart</label>
                                <select name="worktype" >
                                    <option value="" disabled selected hidden>Wählen </option>
                                    <option value="0">Vollzeit</option>
                                    <option value="1">Teilzeit</option>
                                    <option value="2">Praktikum</option>
                                </select>
                            </div>
                            </div>
                        </form>
                        <br></br><br></br><br></br>
                        <h4><br></br>Unternehmen</h4>
                        <form>
                        <div className="smallgrid">
                            <div className="position-input">
                                <label htmlFor="company">Name</label>
                                <input type="text" name="company" />
                            </div>
                            <div className="person-input">
                                <label htmlFor="branche">Branche</label>
                                <select name="worktype" >
                                    <option value="" disabled selected hidden>Wählen </option>
                                    <option value="0">IT</option>
                                    <option value="1">Management</option>
                                </select>
                            </div>
                            </div>
                        </form>
                        <br></br><br></br><br></br>
                        <h4><br></br>Zeitraum</h4>
                        <form>
                            <div className="flex">

                                <div>
                                    <p>von</p>
                                </div>
                                <div className="normal">
                                    <input type="date" name="startTime" />
                                </div>
                                <div>
                                    <p>bis</p>
                                </div>
                                <div className="person-input">
                                    <input type="date" name="endTime" />
                                </div>

                            </div>
                        </form>
                        <br></br><br></br><br></br>
                        <h4><br></br>Beschreibung (optional)</h4>
                        <div class="textbox"></div>
                    </div>
                </div>

            </div>




        );
    }
}
export default EmployeeQualificationForm;