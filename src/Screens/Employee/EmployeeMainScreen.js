import EmployeeCard from "../../Components/EmployeeCard";
import Navigation from "../../Components/Navigation";
import WildCard from "../../Components/WildCard";
import "../../Styles/Components/employee.css"
import "../../Styles/Components/navigation.css"

function EmployeeMainScreen() {

var employees = [];
for (var i = 0; i < 10; i++) {
  employees.push(
    <EmployeeCard/>
  );
}

var wildCards = [];
for (var i = 0; i < 10; i++) {
  wildCards.push(
    <WildCard/>
  );
}


    return(
        <div className="screen employee-main-screen">
            <Navigation/>
            <div className="wrapper">

                <div className="wildCards">

                    {wildCards}

                </div>

                <div className="employees">

                    {employees}

                </div>


            </div>
            
        </div>
    );
  }

  export default EmployeeMainScreen;