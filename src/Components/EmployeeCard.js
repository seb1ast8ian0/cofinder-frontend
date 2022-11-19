import React from "react";
//import "../../Styles/Screens/loginScreen.css";
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

function EmployeeCard(props) {

    var employee = props.data;


      const {attributes, listeners, setNodeRef, transform, transition} = useDraggable({
        id: employee.id,
      });
      
      const style = {
        transform: CSS.Translate.toString(transform),
        
      };

      var sprachenV = [];
      
      employee.Sprachen.forEach(function(sprache){
        sprachenV.push(

          <div className="flag">
                <img src={Object.values(sprache)} />
          </div>

        )
      }

      )




      return (

        <div ref={setNodeRef} style={style} {...attributes} {...listeners} >
        <div  className="employeeCard"  >
            <div className="name-and-title">
                <div className="name">{employee.vorname + " " + employee.name}</div>
                <div className="title">{employee.Funktion}</div>
            </div>
            <div className="profilepicture">
                <img src="/stock_profilepicture.jpg"/>
            </div>
            <div className="available-hours">
              <span className="material-symbols-outlined">schedule</span>
              <div className="text">{employee.stundenzahl} Stunden, verfügbar</div>
            </div>

            <div className="experience">
              <span className="material-symbols-outlined">work_history</span>
              <div className="text">{employee.Berufserfahrung} Jahre</div>
            </div>
            
            <div className="salary">
              <span className="material-symbols-outlined">attach_money</span>
              <div className="text">{employee.stundensatz}/h</div>
            </div>

            <div className="more-info">
              <div className="title">Kenntnisse:</div>
              <div className="text">UI/UX-Design, Figma, JavaScript, HTML, CSS</div>
            </div>

            <div className="languages">
              
              {sprachenV}
              
            </div>

        </div>
        </div>

        
      );
   }
   export default EmployeeCard;