import { DndContext } from '@dnd-kit/core';
import { useState } from 'react';
import EditWildCardModal from '../../Components/EditWildCardModal';
import EmployeeCard from "../../Components/EmployeeCard";
import Navigation from "../../Components/Navigation";
import WildCard from "../../Components/WildCard";
import "../../Styles/Components/employee.css";
import "../../Styles/Components/navigation.css";


function ProjectsScreen() {

  const [isDropped, setIsDropped] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  function openWildCardModal(){
    setShowModal(true);
  }
  
  var employees = [];
  for (var i = 1; i < 10; i++) {
    employees.push(
      <EmployeeCard id={i}/>
    );
  }

  var wildCards = [];
  for (var i = 1; i < 5; i++) {
    wildCards.push(
      <WildCard id={i} showModal={setShowModal}/>
    );
  }



    return(

        <div className="screen employee-main-screen">
            <Navigation/>
            <div className="wrapper">

              <EditWildCardModal show={showModal} setShow={setShowModal}/>

              <DndContext onDragEnd={handleDragEnd}>

              <h2>Platzhalter im Projekt:</h2>

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


  }

  export default ProjectsScreen;