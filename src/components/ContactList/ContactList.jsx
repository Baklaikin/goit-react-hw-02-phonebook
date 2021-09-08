// import { v4 as uuidv4 } from "uuid";
import s from "components/ContactList/ContactList.module.css";

const ContactList = ({ data, onDeleteItem }) => {
  const { contacts } = data;
  const filtered = contacts.filter((item) => {
    return item.name
      .toLowerCase()
      .trim()
      .includes(data.filter.toLowerCase().trim());
  });
  return (
    <ul className={s.list}>
      {filtered.map((item) => {
        return (
          <li key={item.id} className={s.item}>
            {item.name}: {item.number}
            <button
              className={s.deleteBtn}
              type="button"
              name="delete"
              onClick={() => onDeleteItem(item.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
