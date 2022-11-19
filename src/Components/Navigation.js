import {
    NavLink
  } from "react-router-dom";

function Navigation() {

    return(
        <div className="navigation">

            <nav>
                <ul>
                    <NavLink to='/employee' className={({ isActive }) => (isActive ? "active" : "")} >
                        <span className="material-symbols-outlined">home</span>
                        <span>Start</span>
                    </NavLink>
                    <NavLink to='/projects' className={({ isActive }) => (isActive ? "active" : "")} >
                        <span className="material-symbols-outlined">folder_open</span>
                        <span>Meine Projekte</span>
                    </NavLink>
                    <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")} >
                        <span className="material-symbols-outlined">home</span>
                        <span>Profil</span>
                    </NavLink>
                    
                    
                </ul>
            </nav>

        </div>
        
    );
  }

  export default Navigation;