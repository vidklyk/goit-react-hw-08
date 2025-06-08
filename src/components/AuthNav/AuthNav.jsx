import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <nav>
      <NavLink to="/login">Log In</NavLink>
      {" | "}
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
}
