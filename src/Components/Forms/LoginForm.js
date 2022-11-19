import React from "react";
import "../../Styles/Screens/loginScreen.css"

class LoginForm extends React.Component {
    render() {
      return (
        <div className="login-form">
            <form>
                <div className="login-input">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"/>
                </div>

                <div className="login-input">
                    <label htmlFor="password">Passwort</label>
                    <input type="text" name="password"/>
                </div>

                <button>Log In</button>
                <div className="register-text">
                    <span>Noch nicht angemeldet?</span>
                    <a href="#">Konto anfordern</a>
                </div>
                
                
            </form>
        </div>
      );
    }
   }
   export default LoginForm;