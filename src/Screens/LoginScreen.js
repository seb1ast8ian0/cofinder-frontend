import LoginForm from '../Components/Forms/LoginForm';

function LoginScreen() {

    return(
        <div className="screen login-screen">
            <div className="container login-container">
                <div className="greeting">
                    <span>Willkommen bei</span>
                    <div className="logo">
                        <img src="/cofinder_text.png"/>
                    </div>
                </div>
                <div className="container login-form-container">
                    <h2>Anmelden</h2>

                    <LoginForm/>

                </div>
                
            </div>
        </div>
    );
  }

  export default LoginScreen;