import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../Context/authContext";

const RequiresAuth = ({ children }) => {
  const { authToken } = useAuth();
  const location = useLocation();
  console.log(location);
  return authToken ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }}></Navigate>
  );
};
export default RequiresAuth;
