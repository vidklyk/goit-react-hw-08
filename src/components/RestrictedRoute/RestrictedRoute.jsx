import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({
  component: Component,
  redirectTo = "/contacts",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : <Component />;
};

export default RestrictedRoute;
