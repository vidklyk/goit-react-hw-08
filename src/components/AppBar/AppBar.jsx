import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>

      {isLoggedIn ? (
        <div>
          <span>{user.email}</span>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <nav>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
      )}
    </header>
  );
}
