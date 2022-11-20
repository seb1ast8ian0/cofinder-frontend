import { DndContext } from '@dnd-kit/core';
import { useState } from 'react';
import EditWildCardModal from '../../Components/EditWildCardModal';
import EmployeeCard from "../../Components/EmployeeCard";
import EmployeeCardDroppable from "../../Components/EmployeeCardDroppable";
import Navigation from "../../Components/Navigation";
import WildCard from "../../Components/WildCard";
import "../../Styles/Components/employee.css";
import "../../Styles/Components/navigation.css";

function EmployeeMainScreen() {

  const [isDropped, setIsDropped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const url = "https://yummy-oranges-type-78-94-15-62.loca.lt";

  console.log(getProject(url, "1"));

  var employees = [];
  var wildCards = [];
  let employee_json = require('../../data.json');
  let wildcard_json = require('../../wildcard.json');

  console.log(wildcard_json);


  employee_json.forEach(function(employee){
    employees.push(
      <EmployeeCard data={employee}/>
    )
  } 
  )

  wildcard_json.forEach(function(wildCard){

    if(wildCard.employee === null || wildCard.employee === undefined){

      wildCards.push(<WildCard data={wildCard} id={wildCard.id} showModal={setShowModal}/>)

    } else {

      wildCards.push(<EmployeeCardDroppable data={wildCard}/>)
 
    }
    
  } 
  )

  console.log(employee_json);

  /*
  for (var i = 1; i < 5; i++) {
    wildCards.push(
      <WildCard id={i}/>
    );
  }*/


    return(

        <div className="screen employee-main-screen">
            <Navigation/>
            <div className="wrapper">

              <EditWildCardModal show={showModal} setShow={setShowModal}/>

              <DndContext onDragEnd={handleDragEnd}>

              <h2>Mitarbeiter im Projekt:</h2>

              <div className="wildCards">

                  {wildCards}

              </div>

              <h2>Vorgeschlagene Mitarbeiter:</h2>

              <div className="employees">

                  {employees}

              </div>

              </DndContext>
              


            </div>
            
        </div>
    );

    function handleDragEnd(event) {
      if (event.over) {
        setIsDropped(true);
        console.log(event.active.id)
        console.log(event.over.id)
      }
    }

    function getProject(url, id){

      const xhr = new XMLHttpRequest();
      //xhr.open("POST", 'http://localhost:9999/getProjects', true);
      //xhr.open("POST", 'http://localhost:9990/getMitarbeiterFiltered', true);
      xhr.open("GET", url + "/getWildcards", true);
      
      //Send the proper header information along with the request
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      
      
      xhr.onreadystatechange = () => { // Call a function when the state changes.
        //console.log(xhr);

          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

          return (xhr.responseText);
       
        }
      }
      //xhr.send();
      //xhr.send(JSON.stringify({zuweisungsID: "5", projectID: "4" }));
      xhr.send(JSON.stringify({"projectId": id}));


    }


  }

  export default EmployeeMainScreen;