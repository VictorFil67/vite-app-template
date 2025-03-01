import { useSelector } from "react-redux";
import { selectUser } from "../store/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);
  return !user ? <Navigate to={"/"} /> : children;
};

export default PrivateRoute;
