import css from "./ContactList.module.css";
import { IoPerson, IoCall } from "react-icons/io5";
import { deleteContact } from "../../redux/contactSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filtredValue = useSelector((state) => state.contacts.filter);

  const deleteContactById = (id) => {
    dispatch(deleteContact(id));
  };

  const validFilter = filtredValue.trim().toLowerCase();
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(validFilter)
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={css.contact}>
          <div className={css.left}>
            <div className={css.info}>
              <IoPerson />
              <p>{contact.name}</p>
            </div>
            <div className={css.info}>
              <IoCall />
              <p>{contact.number}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => deleteContactById(contact.id)}
            className={css.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
