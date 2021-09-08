import PhoneForm from "components/PhoneForm/PhoneForm";
import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import FilterContacts from "components/FilterContacts/FilterContacts";
import ContactList from "components/ContactList/ContactList";
import MainContainer from "components/MainContainer/MainContainer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        //     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: "",
    };
  }

  formSubmitHandler = (data) => {
    this.state.contacts.find(
      (item) =>
        item.name.toLowerCase().trim() === data.name.toLowerCase().trim()
    )
      ? alert(`${data.name} is already in contacts`)
      : this.setState((prevState) => {
          let newArr = [];
          const newItem = {
            name: data.name,
            number: data.number,
            id: uuidv4(),
          };

          newArr = [...prevState.contacts, newItem];
          return { contacts: newArr };
        });
  };

  handleFilterField = (event) => this.setState({ filter: event.target.value });

  handleInputChange = (e) =>
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });

  deleteButtonHandler = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => {
        return contact.id !== id;
      }),
    }));
  };

  render() {
    return (
      <>
        <MainContainer>
          <h1>Phonebook</h1>
          <PhoneForm onSubmit={this.formSubmitHandler} />
          <h2>Contacts:</h2>
          <FilterContacts
            value={this.state.filter}
            onSubmit={this.handleFilterField}
          />
          <ContactList
            data={this.state}
            onDeleteItem={this.deleteButtonHandler}
          />
        </MainContainer>
      </>
    );
  }
}

export default App;
