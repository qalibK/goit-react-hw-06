import { Formik, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addContact } from "../../redux/contactSlice";

export default function ContactForm() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const checkingUniqueNames = (name) => {
    return contacts.some((contact) => contact.name === name);
  };

  const setAddContact = (name, number) => {
    if (checkingUniqueNames(name)) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      const newContact = {
        name,
        number,
        id: crypto.randomUUID(),
      };

      dispatch(addContact(newContact));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = () => {
    setAddContact(name, number);
    setName("");
    setNumber("");
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    number: Yup.string().required("Number is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}
    >
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.info}>
          <label htmlFor="name"> Name</label>
          <Field type="text" name="name" value={name} onChange={handleChange} />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />
          <label htmlFor="number">Number</label>
          <Field
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button className={css.add_button} type="submit">
          Add contact
        </button>
      </form>
    </Formik>
  );
}
