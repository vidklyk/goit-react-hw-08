import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          Email
          <Field type="email" name="email" required />
        </label>
        <label>
          Пароль
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Увійти</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
