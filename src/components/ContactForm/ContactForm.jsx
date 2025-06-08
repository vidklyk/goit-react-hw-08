import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  number: Yup.string()
    .matches(/^\d+$/, "Можна ввести тільки номер")
    .required("Number is required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field name="name" />
          <ErrorMessage className={css.error} name="name" component="p" />
        </label>

        <label className="css.error">
          Number
          <Field
            name="number"
            type="tel"
            pattern="\d+"
            title="Please enter digits only"
          />
          <ErrorMessage className={css.error} name="number" component="p" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
