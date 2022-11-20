import {useState, useEffect} from 'react'
import {DndContext} from '@dnd-kit/core';
import EmployeeCard from "../../Components/EmployeeCard";
import EmployeeCardDroppable from "../../Components/EmployeeCardDroppable";
import Navigation from "../../Components/Navigation";
import WildCard from "../../Components/WildCard";
import "../../Styles/Components/employee.css";
import "../../Styles/Components/navigation.css";
import {
  useParams
} from "react-router-dom";


function EmployeeMainScreen() {

  const [isDropped, setIsDropped] = useState(false);
  const [d, setD] = useState([]);

  const url = "https://witty-otters-beg-78-94-15-62.loca.lt/getWildcard";
  const data = {"projectId": 1};


  useEffect(() => {

    const params = {
      headers: {
  
        "content-type": "application/json; charset=UTF-8"
  
      },
      body: data,
      method: "POST"
  
    }
  
    fetch(url, params)
      .then(response=>response.json())
      .then(data=>setD(data))
      

  }, []);

  


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

  d.forEach(function(wildCard){

    if(wildCard.employee === null || wildCard.employee === undefined){

      wildCards.push(<WildCard data={wildCard} id={wildCard.id}/>)

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

              <DndContext onDragEnd={handleDragEnd}>

              <h2>Mitarbeiter im Projekt:</h2>

              <div className="wildCards">

                  {wildCards}

              </div>

              {console.log(d)}

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