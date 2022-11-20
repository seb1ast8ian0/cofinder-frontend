import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Header from './Components/Header';
<<<<<<< HEAD
import EmployeeBasicData from "./Screens/EmployeeBasicData";
import ErrorScreen from "./Screens/ErrorScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProjectScreen from './Screens/Manager/ProjectScreen';
import ProjectsScreen from './Screens/Manager/ProjectsScreen';
import StartScreen from './Screens/StartScreen';
=======
import EmployeeMainScreen from './Screens/Employee/EmployeeMainScreen';
import EmployeeBasicData from "./Screens/EmployeeBasicData";
import ErrorScreen from "./Screens/ErrorScreen";
import LoginScreen from "./Screens/LoginScreen";
import ManagerProjectScreen from './Screens/Manager/ManagerProjectScreen';
>>>>>>> 4c7646421c726d38e67801513b789bb53a1a4eb8
import TestEditWildCardModalScreen from "./Screens/TestEditWildCardModalScreen";
import './Styles/main.css';

function App() {
  return (
    <div className='app'>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={StartScreen()} />
          <Route path="/login" element={LoginScreen()} />
          <Route path="/employeebasicdata" element={EmployeeBasicData()} />
<<<<<<< HEAD
          <Route path="/projects" element={ProjectsScreen()} />
          <Route path="/projects/project/:id" element={ProjectScreen()} />
=======
          <Route path="/employee" element={EmployeeMainScreen()} />
>>>>>>> 4c7646421c726d38e67801513b789bb53a1a4eb8
          <Route path="/testeditwildcardmodal" element={TestEditWildCardModalScreen()} />
          <Route path="*" element={ErrorScreen()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
