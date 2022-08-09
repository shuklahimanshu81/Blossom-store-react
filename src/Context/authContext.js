import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("token") || ""
  );

  const location = useLocation();
  let navigate = useNavigate();
  console.log(location);
  let from = location.state?.from?.pathname || "/";

  const signUp = async (formData) => {
    try {
      const res = await axios.post("/api/auth/signup", formData);
      localStorage.setItem("token", res.data.encodedToken);
      setAuthToken(res.data.encodedToken);

      toast.success("Sign Up Successfully");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Please try again after sometime");
    }
  };
  const logInUser = async (formData) => {
    console.log(formData);
    try {
      const response = await axios.post("/api/auth/login", formData);
      localStorage.setItem("token", response?.data?.encodedToken);
      setAuthToken(response?.data?.encodedToken);
      toast.success("Logged In successfully");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Please try again after sometime");
    }
  };

  const logoutUser = () => {
    setAuthToken("");
    localStorage.clear();
    navigate("/");
  };

  const logInAsGuest = async (e) => {
    e.preventDefault();
    const guestCreds = {
      email: "adarshbalika@gmail.com",
      password: "Adarshbalika@123",
    };

    try {
      const response = await axios.post("/api/auth/login", guestCreds);
      localStorage.setItem("token", response?.data?.encodedToken);
      setAuthToken(response?.data?.encodedToken);
      toast.success("Logged In successfully");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Please try again after sometime");
    }
  };

  return (
    <AuthContext.Provider
      value={{ signUp, authToken, logInUser, logoutUser, logInAsGuest }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
