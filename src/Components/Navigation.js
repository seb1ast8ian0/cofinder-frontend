import {
    NavLink
  } from "react-router-dom";

function Navigation() {

    return(
        <div className="navigation">

            <nav>
                <ul>
                    <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")} >
                        <span className="material-symbols-outlined">home</span>
                        <span>Start</span>
                    </NavLink>
                    <NavLink to='/projects' className={({ isActive }) => (isActive ? "active" : "")} >
                        <span className="material-symbols-outlined">folder_open</span>
                        <span>Meine Projekte</span>
                    </NavLink>
                    {/**<NavLink to='/xyz' className={({ isActive }) => (isActive ? "active" : "")} >
                        <span className="material-symbols-outlined">home</span>
                        <span>Profil</span>
                    </NavLink>**/}
                    <NavLink to='/employee/new' className={({ isActive }) => (isActive ? "active" : "")} >
                        <span className="material-symbols-outlined">add</span>
                        <span>Mitarbeiter</span>
                    </NavLink>
                    <NavLink to='/xyz'className="red" >
                        <span className="material-symbols-outlined">logout</span>
                        <span>Logout</span>
                    </NavLink>
                    
                    
                </ul>
            </nav>

        </div>
        
    );
  }

  export default Navigation;