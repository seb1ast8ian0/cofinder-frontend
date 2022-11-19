import React from "react";


class EditWildCardDescription extends React.Component {
    render() {
        return (
            <div className="editWildCardDescription">
                <div className="text-label-group">
                    <input type="text"/>
                    <div className="description">Stunden pro</div>
                </div>
                <div className="rb-label-group">
                    <input type="radio"/>
                    <div className="description">Tag</div>
                </div>
                <div className="rb-label-group">
                    <input type="radio" />
                    <div className="description">Woche</div>
                </div>
                <div className="rb-label-group">
                    <input type="radio"/>
                    <div className="description">Monat</div>
                </div>
            </div>
        );
    }
}
export default EditWildCardDescription;
