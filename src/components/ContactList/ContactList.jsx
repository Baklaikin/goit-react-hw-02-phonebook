function ContactList({ data }) {
  const database = this.props.value.contacts;
  const filtered = database.filter((item) => {
    return item.name
      .toLowerCase()
      .includes(this.props.value.filter.toLowerCase());
  });
  return (
    <ul>
      {filtered.map((item) => {
        return (
          <li key={item.id}>
            {item.name}: {item.number}
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
