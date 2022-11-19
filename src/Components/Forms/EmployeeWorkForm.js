import React from "react";
import "../../Styles/Screens/employeeBasicDataScreen.css"

class EmployeeWorkForm extends React.Component {
    render() {
        return (
            <div className="employee-work">
                <form>
                    <div className="work-data">
                        <div className="row">
                            <div className="work-input">
                                <label htmlFor="since">Bei msg seit ..</label>
                                <input type="date" name="since"  />
                            </div>
                            <div className="work-input">
                                <label htmlFor="location">Standort</label>
                                <select name="location" >
                                <option value="" disabled selected hidden>Standort wählen </option>
                                </select>

                            </div>
                            <div className="work-input">

                                <label htmlFor="specialization">Fachrichtung</label>
                                <select name="specialization" >
                                <option value="" disabled selected hidden>Fachrichtung wählen </option>
                                </select>
                            </div>
                            <div className="work-input">

                                <label htmlFor="hours">Stundensatz</label>
                                <select name="hours" >
                                <option value="" disabled selected hidden>Fachrichtung wählen </option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="work-input">
                                <label htmlFor="travel">Reisebereitschaft</label>
                                <select name="travel" >
                                <option value="" disabled selected hidden>Bitte Auswählen </option>
                                </select>
                            </div>
                            <div className="work-input">
                                <label htmlFor="department">Abteilung</label>
                                <select name="department" >
                                <option value="" disabled selected hidden>Abteilung wählen </option>
                                </select>
                            </div>
                            <div className="work-input">

                                <label htmlFor="type">Funktion</label>
                                <select name="type" >
                                <option value="" disabled selected hidden>Funktion wählen </option>
                                </select>
                            </div>
                            <div className="work-input">

                                <label htmlFor="workhours">Stundenzahl</label>
                                <select name="workhours" >
                                <option value="" disabled selected hidden>Wählen </option>
                                </select>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="save">
                    <button>Speichern</button>
                            </div>
                            



                </form>

            </div>
        );
    }
}
export default EmployeeWorkForm;