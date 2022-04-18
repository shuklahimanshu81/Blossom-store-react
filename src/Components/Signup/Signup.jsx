const Signup = () => {
    return<div>
          <h1 className="heading"> Sign Up  </h1>
    <main className="main-div flex">
        <div className="form-inputs flex">
            
            <form className="form">
                <label className="label">
                    First Name
                    <input type="text" className="input" placeholder="Himanshu"/>
                </label>
                <label className="label">
                    Last Name
                    <input type="text" className="input"  placeholder="Shukla"/>
                </label>
                <label className="label">
                    Email Address
                    <input type="email" name="email" className="input" placeholder="john@xyz.com"/>
                </label>
               <label className="label">
                Password
                   <input type="password" name="password" className="input" placeholder="* * * * * * * *"/>
               </label>
               <label className="label">
                Confirm Password
                   <input type="password" name="password" className="input" placeholder="* * * * * * * *"/>
               </label>
                
               <div className="forgot-pass-div flex">
                   <label>
                    <input type="checkbox" /> I accept all Terms & Conditions.
                   </label>
               
               </div>
                <button className="submit-form-btn primary-btn btn btn-signup"> Sign Up </button>
            </form>
        </div>
    </main>
    <p className="new-user">
        <a href="/Authentication/login-page.html">
            Already have an account? Log In
        </a>
    </p>
    
    </div>
 }

export default Signup