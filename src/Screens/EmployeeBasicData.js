import EmployeePersonForm from '../Components/Forms/EmployeePersonForm';
import EmployeeWorkForm from '../Components/Forms/EmployeeWorkForm';
import EmployeeQualificationForm from '../Components/Forms/EmployeeQualificationForm';
import EmployeeCertification from '../Components/Forms/EmployeeCertificationForm';
import EmployeeLanguagesForm from '../Components/Forms/EmployeeLanguagesForm';

import EmployeeTopSkills from '../Components/EmployeeTopSkills';
import EmployeeITSkills from '../Components/EmployeeITSkills';
import Navigation from '../Components/Navigation';

function EmployeeBasicData() {

    return(
        
        <div className="basic-data">

            <Navigation/>

            <div className="data-container">
       
            <h2>Stammdaten bearbeiten</h2>
            <EmployeePersonForm/>
            <EmployeeWorkForm/>
           
            <h2>Qualifikationen bearbeiten</h2>
            <h3>Meine Berufserfahrung</h3>
            <EmployeeQualificationForm/>
            
            <h3>Meine Zertifikate</h3>
            <EmployeeCertification/>

            <h3>Meine IT-Kenntnisse</h3>
            <EmployeeITSkills/>

            <h3>Meine Sprachen</h3>
            <EmployeeLanguagesForm/>
            <br></br><br></br><br></br>
            <h3>Meine Top 3 Soft Skills</h3>
            <EmployeeTopSkills/>

            </div>
          
        </div>
    );
  }

  export default EmployeeBasicData;