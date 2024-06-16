import { IoPerson, IoCall } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={css.contact}>
      <div className={css.left}>
        <div className={css.info}>
          <IoPerson />
          <p>Johny Death</p>
        </div>
        <div className={css.info}>
          <IoCall />
          <p>123-456-7890</p>
        </div>
      </div>
      <button type="button" className={css.deleteButton}>
        Delete
      </button>
    </div>
  );
}
