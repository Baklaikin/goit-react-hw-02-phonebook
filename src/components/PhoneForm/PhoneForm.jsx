import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    const data = e.currentTarget.value;
    this.setState({ [e.currentTarget.name]: data });
  };

  addToContacts = (e, database) => {
    e.preventDefault();
    // this.setState((prevState)=>{
    //   let newArr=[];
    //   const newItem = {
    //     name:this.state.name,
    //     number:this.state.number,
    //     id: uuidv4()
    //   };

    //   if(this.state.contacts.length !== 0){
    //     newArr=[
    //         ...prevState.contacts,
    //        newItem
    //       ]
    //   }
    //   newArr=[newItem]
    //   console.log(newArr)
    //   return {contacts: newArr}
    // })
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
      <form onSubmit={this.addToContacts}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add to contacts</button>
      </form>
    );
  }
}

export default PhoneForm;
