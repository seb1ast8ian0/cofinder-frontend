import React from "react";
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
            </div>
        );
    }
}
export default EditWildCardModal;