import Navigation from "../../Components/Navigation";
import "../../Styles/Components/employee.css";
import "../../Styles/Components/navigation.css";
import "../../Styles/Screens/createProjectScreen.css";

function CreateProjectScreen() {

    return(
        <div className="screen create-project-screen">
            <Navigation/>

            <div className="wrapper">
                
                <div className="heading">Projekt erstellen</div>

                <div className="row row1">
                    <div className="named-field name-input">
                        <label for="name-input">Projektname</label>
                        <input type="text" name="name-input" />
                    </div>
                    <div className="named-field category-input">
                        <label for="category-input">Kategorie</label>
                        <select name="category-input">
                            <option value="" disabled selected hidden>Wählen </option>
                            <option>Softwareentwicklung</option>
                            <option>Consulting</option>
                        </select>
                    </div>
                </div>

                <div className="row row2">
                    <div className="named-field desc-input">
                        <label for="desc-input">Beschreibung</label>
                        <textarea name="desc-input" />
                    </div>
                </div>

                <div className="row row3">
                    <div className="named-field startdate-input">
                        <label for="startdate-input">Startdatum</label>
                        <input type="text" name="startdate-input" />
                    </div>

                    <div className="named-field duration-input">
                        <label for="duration-input">geschätzte Dauer</label>
                        <input type="text" name="duration-input" />
                    </div>

                    <div className="named-field effort-input">
                        <label for="effort-input">Aufwand</label>
                        <select name="effort-input">
                            <option value="" disabled selected hidden>Wählen </option>
                            <option>Gering</option>
                            <option>Mittel</option>
                            <option>Hoch</option>
                        </select>
                    </div>
                </div>

                <div className="row row4">
                    <div className="named-field customer-input">
                        <label for="customer-input">Unternehmen/Kunde</label>
                        <input type="text" name="customer-input" />
                    </div>

                    <div className="named-field location-input">
                        <label for="location-input">Projektname</label>
                        <input type="text" name="location-input" />
                    </div>
                </div>

                <div className="buttons">
                    <button>Weiter</button>
                </div>
            </div>
        </div>
    );
  }

  export default CreateProjectScreen;