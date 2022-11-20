
import Projects from "../../Components/Projects";
import Navigation from "../../Components/Navigation";
import "../../Styles/Components/employee.css"
import "../../Styles/Components/navigation.css"

function ProjectsScreen() {

    return(
        <div className="screen manager-project-screen">
            <Navigation/>
            <div className="wrapper">
                <Projects/>
                <button>Projekt Hinzufügen</button>         
            </div>
            

        </div>
    );
  }

  export default ProjectsScreen;