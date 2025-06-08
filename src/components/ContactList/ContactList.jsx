import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from "../../redux/contacts/selectors";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
