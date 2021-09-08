const ContactList = ({ data }) => {
  const { contacts } = this.props.data;
  const filtered = contacts.filter((item) => {
    return item.name
      .toLowerCase()
      .includes(this.props.data.filter.toLowerCase());
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
};

export default ContactList;
