import React, { Component } from "react";
import s from "components/PhoneForm/PhoneForm.module.css";

class PhoneForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    const data = e.currentTarget.value;
    this.setState({ [e.currentTarget.name]: data });
  };

  addToContacts = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.addToContacts} className={s.form}>
        <label className={s.formLabel}>
          Name
          <input
            className={s.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label className={s.formLabel}>
          Number
          <input
            className={s.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>
        <button className={s.addToContacts} type="submit">
          Add to contacts
        </button>
      </form>
    );
  }
}

export default PhoneForm;
