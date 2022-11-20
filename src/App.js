import './Styles/main.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import EmployeeBasicData from "./Screens/EmployeeBasicData";
import ErrorScreen from "./Screens/ErrorScreen";
import Header from './Components/Header';
import ProjectScreen from './Screens/Manager/ProjectScreen';
import ProjectsScreen from './Screens/Manager/ProjectsScreen'
import StartScreen from './Screens/StartScreen';

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
          <Route path="*" element={ErrorScreen()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
