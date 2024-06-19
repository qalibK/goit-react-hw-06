import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contactSlice";

export default function SearchBox() {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const setChangeFilter = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        value={filter}
        onChange={setChangeFilter}
        type="text
      "
      />
    </div>
  );
}
