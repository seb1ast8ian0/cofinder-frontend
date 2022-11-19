import React from "react";
<<<<<<< HEAD

class EditWildCardModal extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="editWildCardModal">
                <div className="wrapper">
                    <div className="heading">Platzhalter bearbeiten</div>
                    <div className="settings">
                        <div className="row1">
                            <div className="named-field function-input">
                                <label htmlFor="function">Funktion</label>
                                <select name="function">
                                    <option>Junior Developer</option>
                                    <option>Senior Developer</option>
                                    <option>IT-Consultant</option>
                                </select>
                            </div>
                            <div className="named-field experience-input">
                                <label htmlFor="experience">Berufserfahrung</label>
                                <select name="experience">
                                    <option>weniger als 5 Jahre</option>
                                    <option>weniger als 10 Jahre</option>
                                    <option>mehr als 10 Jahre</option>
                                </select>
                            </div>
                            <div className="named-field hours-input">
                                <label htmlFor="hours">Stundenzahl</label>
                                <input type="text" name="hours" />
                                <div className="variable-hours-rb">
                                    <input type="checkbox" name="variable-hours" />
                                    <label htmlFor="variable-hours">flexibel</label>
                                </div>
                            </div>
                        </div>

                        <div className="row2">
                            <div className="named-field location-input">
                                <label htmlFor="location">Standort</label>
                                <select name="location">
                                    <option>München</option>
                                    <option>Berlin</option>
                                    <option>Frankfurt</option>
                                </select>
                            </div>
                            <div className="named-field language-input">
                                <label htmlFor="language">Sprachen</label>
                                <div className="icon-and-text">
                                    <span className="material-symbols-outlined">add</span>
                                    <div className="language">Sprache hinzufügen</div>
                                </div>
                            </div>
                        </div>

                        <div className="row3">
                            <div className="named-field skills-input">
                                <label htmlFor="skills">Kompetenzen</label>
                                <div name="location"/>
                            </div>
                            <div className="skills-suggestion">
                                <div className="heading">Typische Kompetenzen:</div>
                                <div className="suggested-skills">
                                    <div className="item">Java</div>
                                    <div className="item">SQL</div>
                                    <div className="item">Python</div>
                                    <div className="item">Scrum</div>
                                    <div className="item">C,C++</div>
                                    <div className="item">Docker</div>
                                </div>
                                <div className="heading">Weitere Kompetenzen:</div>
                                <div className="suggested-skills">
                                    <div className="item">UI/UX</div>
                                    <div className="item">Code</div>
                                    <div className="item">QA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="cancel button-light" onClick={() => this.props.setShow(false)}>Abbrechen</button>
                        <button className="confirm">Bestätigen</button>
                    </div>
                </div>
=======
import EditWildCardDescription from "./Forms/EditWildCard/EditWildCardDescription";

class EditWildCardModal extends React.Component {
    render() {
        return (
            <div className="editWildCardModal">
                <div className="heading">Platzhalter bearbeiten</div>
                <div className="settings">
                    <div className="select-requirement">
                        <div className="title">Anforderung wählen</div>
                        <ul>
                            <li className="item">
                                <span className="material-symbols-outlined">description</span>
                                <div className="requirement">Bezeichnung</div>
                            </li>
                            <li className="item">
                                <span className="material-symbols-outlined">schedule</span>
                                <div className="requirement">Stundenzahl</div>
                            </li>
                            <li className="item">
                                <span className="material-symbols-outlined">work_history</span>
                                <div className="requirement">Arbeitserfahrung</div>
                            </li>
                            <li className="item">
                                <span className="material-symbols-outlined">attach_money</span>
                                <div className="requirement">Stundenlohn</div>
                            </li>
                            <li className="item">
                                <span className="material-symbols-outlined">code_blocks</span>
                                <div className="requirement">IT-Kenntnisse</div>
                            </li>
                        </ul>
                    </div>
                    <div className="edit-requirement">
                        <EditWildCardDescription/>
                    </div>
                </div>
                <div className="buttons">
                    <button className="cancel button-light">Abbrechen</button>
                    <button className="confirm">Bestätigen</button>
                </div>
>>>>>>> f0c867e (EditWildCardDescription)
            </div>
        );
    }
}
export default EditWildCardModal;