import './Styles/main.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import ErrorScreen from "./Screens/ErrorScreen";
import Header from './Components/Header';
import EmployeeMainScreen from './Screens/Employee/EmployeeMainScreen';

function App() {
  return (
    <div className='app'>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={LoginScreen()} />
          <Route path="/employee" element={EmployeeMainScreen()} />
          <Route path="*" element={ErrorScreen()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
