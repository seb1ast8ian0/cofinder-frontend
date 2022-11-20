import React from "react";
import "../Styles/Components/addWildCard.css";

class AddWildCard extends React.Component {
    render() {
        return (
            <div className="add-wild-card" onClick={() => this.props.callback()}>
                <div className="wrapper">
                    <div className="text">Neuen Platzhalter hinzufügen</div>
                </div>
            </div>
        );
    }
}

export default AddWildCard;