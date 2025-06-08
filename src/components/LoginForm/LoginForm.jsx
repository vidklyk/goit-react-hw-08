import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, helpers) => {
    try {
      const res = await dispatch(login(values)).unwrap();
      if (res.token) navigate("/contacts");
      helpers.resetForm();
    } catch (e) {
      alert(e);
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
          <ErrorMessage name="email" component="p" />
        </label>
        <label>
          Password
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="p" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
