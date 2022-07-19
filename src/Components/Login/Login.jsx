import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/authContext";
import { validPass } from "../../Utils/password-checker";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { logInUser, logInAsGuest } = useAuth();

  const loginDataHandler = ({ type, payload }) => {
    setFormData({ ...formData, [type]: payload });
  };
  const logInFormSubmit = (e) => {
    e.preventDefault();
    if (formData.email.length === 0 || formData.password.length === 0) {
      toast.error("Fill in all fields.");
    } else if (!validPass.test(formData.password)) {
      toast.error(
        "Password should contain atleast one capital and small letter, a number and a special character and must be atleast 8 character long"
      );
    } else {
      logInUser(formData);
    }
  };
  return (
    <div className="login-page">
      <h1 className="heading"> Log In </h1>
      <main className="main-div flex">
        <div className="form-inputs flex">
          <form className="form">
            <label className="label">
              Email Address
              <input
                type="email"
                name="email"
                className="input"
                placeholder="john@xyz.com"
                onChange={(e) =>
                  loginDataHandler({ type: "email", payload: e.target.value })
                }
              />
            </label>
            <label className="label">
              Password
              <input
                type="password"
                name="password"
                className="input"
                placeholder="* * * * * * * *"
                onChange={(e) =>
                  loginDataHandler({
                    type: "password",
                    payload: e.target.value,
                  })
                }
              />
            </label>
            <button
              onClick={logInFormSubmit}
              className="submit-form-btn primary-btn btn btn-login"
            >
              Log In
            </button>
            <h3>Or</h3>
            <button
              onClick={(e) => logInAsGuest(e)}
              className="submit-form-btn primary-btn btn btn-login"
            >
              Log In As Guest
            </button>
          </form>
        </div>
      </main>
      <p className="new-user">
        New User?{" "}
        <Link className="signup-page-link" to={"/signup"}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
