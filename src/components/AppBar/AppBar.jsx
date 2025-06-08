import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header style={{ marginBottom: 20 }}>
      <Navigation />
      {isLoggedIn ? (
        <UserMenu user={user} onLogout={() => dispatch(logout())} />
      ) : (
        <AuthNav />
      )}
    </header>
  );
}
