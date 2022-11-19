import React from "react";
import "../Styles/Screens/employeeBasicDataScreen.css"

class EmployeeITSkills extends React.Component {
    render() {
        return (
            <div>
                <div className="employee-skills">
                    <div className="halfcontainer">
                        <div className="whitebox">
                            <button className="skillButton">
                                <span> Java</span>

                            </button>
                        </div>

                    </div>
                    <div className="halfcontainer">
                        <button className="programming">
                            <span> C++</span>

                        </button>
                        <button className="programming">
                            <span> Javascript</span>

                        </button>
                        <button className="programming">
                            <span> Python</span>

                        </button>

                    </div>

                </div>
                <div className="save">
                    <button>Speichern</button>
                </div>
            </div>

        );
    }
}
export default EmployeeITSkills;