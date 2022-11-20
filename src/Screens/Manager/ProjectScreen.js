import { DndContext } from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  const [e, setE] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const {id} = useParams();

  const url = "https://big-coats-reply-78-94-15-62.loca.lt/";
  const data = {"projectId": 2}; //TODO: wenns noch keine wildcard zu einem Projekt gibt, fehler abfangen

  /** */


  useEffect(() => {

    

    var temp = JSON.parse(httpGet(url + "getWildcards", true));
    var empl = JSON.parse(httpGet(url + "getMitarbeiterFiltered", false));

    console.log(temp)
    console.log(empl)
    console.log(id)


    setD(temp);
    setE(empl);

    
    
   

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


  e.forEach(function(employee){
    employees.push(
      <EmployeeCard data={employee}/>
    )
  } 
  )


  d.forEach(function(wildCard){

      if (wildCard.employee.id === "null" || wildCard.employee.id === undefined){

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
              <h4>Projektnummer: {id}</h4>

              <div className="wildCards">

                  {wildCards}

              </div>

              {console.log(d)}

              <h2>Vorgeschlagene Mitarbeiter:</h2>
              <h4>Anzahl: {employees.length}</h4>

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

        var tUrl = url + "changeWildcards";

        var body = {"id": event.over.id, "MitarbeiterID": event.active.id};

      var resp;
    
      try {
    
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", tUrl, false); // false for synchronous request

          xmlHttp.send(JSON.stringify(body));
        
        
        resp =  xmlHttp.responseText;
        
      } catch (error) {
    
        console.log(error);
        resp =  null;
        
      }


      }

      setD(JSON.parse(httpGet(url + "getWildcards", true)));
    }

    function httpGet(theUrl, json){

      console.log("start fetching: " + theUrl);
      var resp;
    
      try {
    
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", theUrl, false); // false for synchronous request

        if(json){
          console.log("oben");
          xmlHttp.send(JSON.stringify({"projectId": 2}));
        } else {
          xmlHttp.send();
        }
        
        resp =  xmlHttp.responseText;
        
      } catch (error) {
    
        console.log(error);
        resp =  null;
        
      }

      console.log(xmlHttp.responseText);
    
      return xmlHttp.responseText;   
    
    }
 
  }

  export default EmployeeMainScreen;