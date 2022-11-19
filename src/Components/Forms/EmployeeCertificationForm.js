import React from "react";
import "../../Styles/Screens/employeeBasicDataScreen.css"

class EmployeeQualificationForm extends React.Component {
    render() {
        return (
            <div className="employee-work">
                <form>
                    <div className="quali-data">
                        <div className="addButton">
                            <button><span className="material-symbols-outlined">add_circle</span>
                                <span> Zertifikat hinzufügen</span>

                            </button>
                        </div>

                    </div>

                </form>

            </div>
        );
    }
}
export default EmployeeQualificationForm;