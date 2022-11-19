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
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={LoginScreen()} />
          <Route path="/employeebasicdata" element={EmployeeBasicData()} />
          <Route path="*" element={ErrorScreen()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
