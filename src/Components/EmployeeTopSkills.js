import React from "react";
import "../Styles/Screens/employeeBasicDataScreen.css"

class EmployeeTopSkills extends React.Component {
    render() {
        return (
            <div>
                <div className="employee-skills">
                    <div className="halfcontainer">
                    <button><span className="material-symbols-outlined">check_circle</span>
                    </button>
                        <button className="skillButton">
                            <span> Kreativität</span>

                        </button>
                        <button className="skillButton">
                            <span> Kommunikation</span>

                        </button>
                        <button className="skillButton">
                            <span> Flexibilität</span>

                        </button>
                    </div>
                    <div className="halfcontainer">
                        <div className="whitebox">
                            <button className="toSelect">
                                <span> Teamfähigkeit</span>

                            </button>
                            <button className="toSelect">
                                <span> Zeitmanagment</span>

                            </button>
                            <button className="toSelect">
                                <span> Präsentationsstärke</span>

                            </button>
                            <button className="toSelect">
                                <span> Interkulturelle Kompetenz</span>

                            </button>
                            <button className="toSelect">
                                <span> Durchsetzungsvermögen</span>

                            </button>
                            <button className="toSelect">
                                <span> Belastbarkeit</span>

                            </button>
                            <button className="toSelect">
                                <span> Empathie</span>

                            </button>
                            <button className="toSelect">
                                <span> Lernbereitschaft</span>

                            </button>
                            <button className="toSelect">
                                <span> Ehrgeiz</span>

                            </button>
                        </div>
                    </div>

                </div>
                <div className="save">
                    <button>Speichern</button>
                </div>
            </div>

        );
    }
}
export default EmployeeTopSkills;