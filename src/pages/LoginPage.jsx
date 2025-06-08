import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/auth/operations";

const schema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const resultAction = await dispatch(login(values));
      if (login.fulfilled.match(resultAction)) {
        resetForm();
        navigate("/contacts");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Email
          <Field name="email" type="email" />
          <ErrorMessage component="p" name="email" />
        </label>
        <label>
          Password
          <Field name="password" type="password" />
          <ErrorMessage component="p" name="password" />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
