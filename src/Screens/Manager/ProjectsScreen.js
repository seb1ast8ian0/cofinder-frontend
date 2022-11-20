import { Link } from "react-router-dom";
import Navigation from "../../Components/Navigation";
import Projects from "../../Components/Projects";
import "../../Styles/Components/employee.css";
import "../../Styles/Components/navigation.css";

function ProjectsScreen() {

    return(
        <div className="screen manager-project-screen">
            <Navigation/>
            <div className="wrapper">
                <Projects/>
                <Link to={"/projects/create"}>
                    <button>Projekt Hinzufügen</button>         
                </Link>
            </div>
            

        </div>
    );
  }

  export default ProjectsScreen;