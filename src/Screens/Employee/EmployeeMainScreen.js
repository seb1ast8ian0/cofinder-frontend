import {useState} from 'react'
import {DndContext} from '@dnd-kit/core';
import EmployeeCard from "../../Components/EmployeeCard";
import Navigation from "../../Components/Navigation";
import WildCard from "../../Components/WildCard";
import "../../Styles/Components/employee.css";
import "../../Styles/Components/navigation.css";


function EmployeeMainScreen() {

  const [isDropped, setIsDropped] = useState(false);

  var employees = [];
  for (var i = 1; i < 10; i++) {
    employees.push(
      <EmployeeCard id={i}/>
    );
  }

  var wildCards = [];
  for (var i = 1; i < 5; i++) {
    wildCards.push(
      <WildCard id={i}/>
    );
  }


    return(

        <div className="screen employee-main-screen">
            <Navigation/>
            <div className="wrapper">

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

  export default EmployeeMainScreen;