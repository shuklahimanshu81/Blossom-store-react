import './login.css'


const Login = () => {
    return <div className="login-page">
    <h1 className="heading"> Log In  </h1>
    <main className="main-div flex">
        <div className="form-inputs flex">            
            <form className="form">
                <label className="label">
                    Email Address
                    <input type="email" name="email" className="input" placeholder="john@xyz.com"/>
                </label>
               <label className="label">
                Password
                   <input type="password" name="password" className="input" placeholder="* * * * * * * *"/>
               </label>
                
               <div className="forgot-pass-div flex">
                   <label>
                    <input type="checkbox" /> Remember me
                   </label>
                <p className="forgot-pass">
                    <a href="/" className="forgot-pass-link" >
                        Forgot your Password?
                    </a>
                </p>               
               </div>
                <button className="submit-form-btn primary-btn btn btn-login"> Log In </button>
            </form>

         
        </div>
    </main>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <p className="new-user">
        <a href="/Authentication/sign-up.html">
            New here ? Create New Account.
        </a>
    </p>
    </div>
}

export default Login