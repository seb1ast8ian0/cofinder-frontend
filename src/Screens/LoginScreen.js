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

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='backdrop'>
                <path fill="#c6cfea" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,181.3C384,181,480,107,576,101.3C672,96,768,160,864,202.7C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>

        </div>
    );
  }

  export default LoginScreen;