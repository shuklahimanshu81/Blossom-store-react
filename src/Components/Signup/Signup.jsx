import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/authContext";
import { validPass } from "../../Utils/password-checker";

const Signup = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const setGuestLogInData = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "Sample",
      lastName: "User",
      email: "sampleuser@gmail.com",
      password: "Sample@123",
      confirmPassword: "Sample@123",
    });
  };
  const { signUp } = useAuth();
  const [formData, setFormData] = useState(initialFormData);
  const signUpDataHandler = ({ type, payload }) => {
    setFormData({ ...formData, [type]: payload });
  };

  const signUpFormSubmit = (e) => {
    e.preventDefault();
    if (!validPass.test(formData.password)) {
      toast.error(
        "Password should contain atleast one capital and small letter, a number and a special character and must be atleast 8 character long"
      );
    } else if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password should be same.");
    }
    if (formData.password === formData.confirmPassword) {
      signUp({ email: formData.email, password: formData.password });
    }
  };
  return (
    <div>
      <h1 className="heading"> Sign Up </h1>
      <main className="main-div flex">
        <div className="form-inputs flex">
          <form className="form">
            <label className="label">
              First Name
              <input
                type="text"
                value={formData.firstName}
                className="input"
                placeholder="Himanshu"
                onChange={(e) =>
                  signUpDataHandler({
                    type: "firstName",
                    payload: e.target.value,
                  })
                }
                required
              />
            </label>
            <label className="label">
              Last Name
              <input
                type="text"
                value={formData.lastName}
                className="input"
                placeholder="Shukla"
                required
                onChange={(e) =>
                  signUpDataHandler({
                    type: "lastName",
                    payload: e.target.value,
                  })
                }
              />
            </label>
            <label className="label">
              Email Address
              <input
                type="email"
                value={formData.email}
                name="email"
                className="input"
                placeholder="john@xyz.com"
                onChange={(e) =>
                  signUpDataHandler({ type: "email", payload: e.target.value })
                }
                required
              />
            </label>
            <label className="label">
              Password
              <input
                type="password"
                value={formData.password}
                name="password"
                className="input"
                placeholder="* * * * * * * *"
                onChange={(e) =>
                  signUpDataHandler({
                    type: "password",
                    payload: e.target.value,
                  })
                }
                required
              />
            </label>
            <label className="label">
              Confirm Password
              <input
                type="password"
                value={formData.confirmPassword}
                name="ConfirmPassword"
                className="input"
                placeholder="* * * * * * * *"
                onChange={(e) =>
                  signUpDataHandler({
                    type: "confirmPassword",
                    payload: e.target.value,
                  })
                }
                required
              />
            </label>
            <button
              onClick={signUpFormSubmit}
              className="primary-btn btn btn-signup"
            >
              Sign Up
            </button>
            <h3>Or</h3>
            <button
              onClick={setGuestLogInData}
              className="secondary-btn btn btn-signup"
            >
              Fill test deatils
            </button>
          </form>
        </div>
      </main>
      <p className="old-user">
        Already User?
        <Link className="login-page-link" to={"/Login"}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
