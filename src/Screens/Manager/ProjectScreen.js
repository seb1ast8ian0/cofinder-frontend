import { DndContext } from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import AddWildCard from '../../Components/AddWildCard';
import EditWildCardModal from '../../Components/EditWildCardModal';
import EmployeeCard from "../../Components/EmployeeCard";
import EmployeeCardDroppable from "../../Components/EmployeeCardDroppable";
import Navigation from "../../Components/Navigation";
import WildCard from "../../Components/WildCard";
import "../../Styles/Components/employee.css";
import "../../Styles/Components/navigation.css";

function EmployeeMainScreen() {

  const [isDropped, setIsDropped] = useState(false);
  const [d, setD] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const url = "https://spotty-rocks-teach-78-94-15-62.loca.lt/getWildcards";
  const data = {"projectId": 1};

  /** */


  useEffect(() => {

    var temp = JSON.parse(httpGet(url));

    console.log(temp)


    setD(temp);
    

      

  }, []);

  

  
  function addWildCard(){
    let data = {
        "zuteilungsId":4,
        "projectId":2,
        "rollenbezeichnung":"Platzhalter",
        "hoursRequired": 9,
        "yearsInJobRequired": 5,
        "salaryMax": 55,
        "MitarbeiterID" : null,
    }
            
    wildCards.push(<WildCard data={data} id={wildCards.length} showModal={setShowModal}/>);
    setD(wildCards);
  }

  var employees = [];
  var wildCards = [<AddWildCard callback={addWildCard}/>];
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

    function httpGet(theUrl){

      console.log("start fetching: " + theUrl);
      var resp;
    
      try {
    
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", theUrl, false); // false for synchronous request
        xmlHttp.send(JSON.stringify({"projectId": 2}));
        resp =  xmlHttp.responseText;
        
      } catch (error) {
    
        console.log(error);
        resp =  null;
        
      }
    
      return xmlHttp.responseText;
    
    
    }
    

    
    


  }

  export default EmployeeMainScreen;