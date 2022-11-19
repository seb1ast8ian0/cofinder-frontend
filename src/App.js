import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Header from './Components/Header';
import EmployeeMainScreen from './Screens/Employee/EmployeeMainScreen';
import EmployeeBasicData from "./Screens/EmployeeBasicData";
import ErrorScreen from "./Screens/ErrorScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProjectScreen from './Screens/Manager/ProjectScreen';
import ProjectsScreen from './Screens/Manager/ProjectsScreen';
import StartScreen from './Screens/StartScreen';
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
          <Route path="/projects" element={ProjectsScreen()} />
          <Route path="/projects/project/:id" element={ProjectScreen()} />
          <Route path="/employee" element={EmployeeMainScreen()} />
          <Route path="/testeditwildcardmodal" element={TestEditWildCardModalScreen()} />
          <Route path="*" element={ErrorScreen()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
