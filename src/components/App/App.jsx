import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";

import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage";
import ContactsPage from "../../pages/ContactsPage";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <p>Loading session...</p>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="register"
          element={<RestrictedRoute component={RegistrationPage} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={LoginPage} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
