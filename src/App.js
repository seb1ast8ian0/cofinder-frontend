import './Styles/main.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import ErrorScreen from "./Screens/ErrorScreen";

function App() {
  return (
    <div className='app'>
      <div>
        Navigation
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={LoginScreen()} />
          <Route path="*" element={ErrorScreen()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
