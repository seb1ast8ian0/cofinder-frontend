import EmployeePersonForm from '../Components/Forms/EmployeePersonForm';
import EmployeeWorkForm from '../Components/Forms/EmployeeWorkForm';
import EmployeeQualificationForm from '../Components/Forms/EmployeeQualificationForm';
import EmployeeCertification from '../Components/Forms/EmployeeCertificationForm';
//import Header from '../Components/Header';

function EmployeeBasicData() {

    return(
        
        <div className="basic-data">
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

            <h3>Meine Sprachen</h3>
            <h3>Meine Top 3 Soft Skills</h3>
            </div>
          
        </div>
    );
  }

  export default EmployeeBasicData;