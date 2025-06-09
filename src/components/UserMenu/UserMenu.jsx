import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => dispatch(logout());

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <span>{user?.email}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
