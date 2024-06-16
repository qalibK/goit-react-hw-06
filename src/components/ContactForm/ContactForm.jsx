import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <Formik initialValues={{ username: "", number: "" }}>
      <Form className={css.formContainer}>
        <label htmlFor="username">Name</label>
        <Field id="username" name="username" />
        <label htmlFor="number">Number</label>
        <Field id="number" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
