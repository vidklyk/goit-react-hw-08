import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.li}>
      <span>
        {name}: {number}
      </span>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
