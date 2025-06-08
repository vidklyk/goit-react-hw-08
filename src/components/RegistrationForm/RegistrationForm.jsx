import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const schema = Yup.object().shape({
  name: Yup.string().min(3).required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field name="name" />
          <ErrorMessage component="p" name="name" />
        </label>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
