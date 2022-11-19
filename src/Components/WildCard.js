import React from "react";
import {useDroppable} from '@dnd-kit/core';
//import "../../Styles/Screens/loginScreen.css"

function WildCard(props){

  const {isOver, setNodeRef} = useDroppable({
    id: props.data.zuteilungsId,
  });
  const style = {
    opacity: isOver ? '0.2' : undefined,
  };

  var wildCard = props.data;

      return (
        <div className="wildCard" ref={setNodeRef} style={style}>
            <div className="name-and-title">
                <div className="title">{wildCard.rollenbezeichnung.toString()}</div>
            </div>
            <div className="profilepicture">
                <img src="/cofinder-placeholder.png"/>
            </div>
            <div className="required-hours">
              <span className="material-symbols-outlined">schedule</span>
              <div className="text">{wildCard.hoursRequired} Stunden benötigt</div>
            </div>

            <div className="required-experience">
              <span className="material-symbols-outlined">work_history</span>
              <div className="text">{wildCard.yearsInJobRequired} Jahre</div>
            </div>
            
            <div className="maximum-salary">
              <span className="material-symbols-outlined">attach_money</span>
              <div className="text">{wildCard.salaryMax}€/h</div>
            </div>

            <div className="more-info">
              <div className="title">Benötigte Kenntnisse:</div>
              <div className="text">UI/UX-Design, Figma, JavaScript, HTML, CSS</div>
            </div>

            <div className="languages">
              <div className="flag">
                <img src="https://countryflagsapi.com/png/de" />
              </div>
              <div className="flag">
                <img src="https://countryflagsapi.com/png/gb" />
              </div>
              <div className="flag">
                <img src="https://countryflagsapi.com/png/ro" />
              </div>
            </div>

        </div>
      );
    }
   export default WildCard;