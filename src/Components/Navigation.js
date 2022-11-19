function Navigation() {

    return(
        <div className="navigation">

            <nav>
                <ul>
                    <li className="active">
                        <span className="material-symbols-outlined">home</span>
                        <span>Start</span>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">folder_open</span>
                        <span>Meine Projekte</span>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">manage_accounts</span>
                        <span>Profil</span>
                    </li>
                    
                </ul>
            </nav>

        </div>
        
    );
  }

  export default Navigation;