import React from "react";
import "../../Styles/Screens/employeeBasicDataScreen.css"

class EmployeeLanguagesForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div className="gridy">
                    <select className="" >
                        <option value="" disabled selected hidden>Wählen </option>
                        <option value="0">Deutsch</option>
                        <option value="1">Englisch</option>
                        <option value="2">Spanisch</option>
                    </select>
                    </div>
                    <div className="fourgrid">
                    <button><span className="material-symbols-outlined">do_not_disturb_on</span>
                        <span> Deutsch</span>

                    </button>
                    <button><span className="material-symbols-outlined">do_not_disturb_on</span>
                        <span> English</span>

                    </button>
                    <button><span className="material-symbols-outlined">do_not_disturb_on</span>
                        <span> Spanish</span>

                    </button>
                    </div>


                </form>

            </div>
        );
    }
}
export default EmployeeLanguagesForm;