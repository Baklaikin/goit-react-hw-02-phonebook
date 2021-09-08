import PhoneForm from "components/PhoneForm/PhoneForm";
// import ContactsList from "components/Contacts/Contacts";
import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import FilterContacts from "components/FilterContacts/FilterContacts";
import ContactsList from "components/Contacts/Contacts";

class App extends React.Component {
  constructor() {
    super();
    // this.formSubmitHandler = this.formSubmitHandler.bind(this);
    // this.filterField = this.filterField.bind(this);

    this.state = {
      contacts: [],
      filter: "",
    };
  }

  formSubmitHandler = (data) => {
    console.log(data);
    this.setState((prevState) => {
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

  handleFilterField = (info) => {
    console.log(info);
    this.setState = { filter: info };
  };

  handleInputChange = (e) => {
    const data = e.currentTarget.value;
    this.setState({ [e.currentTarget.name]: data });
  };

  // renderContacts = () => {
  //   const database = this.state.contacts;
  //   return(
  //     <div>
  //     <h2>Contacts: </h2>
  //     <form onChange={this.filterContacts}>
  //       <label>
  //         Find contacts by name
  //         <input type="text" name="filter" value={this.state.filter}
  //             onChange={this.handleInputChange}/>
  //       </label>
  //     </form>
  //     <ul>
  //     { database.map((item) => {
  //       return (
  //       <li key={item.id}>{item.name}: {item.number}</li>
  //       )
  //     })
  //     }
  //     </ul>
  //   </div>
  //   )
  // }

  // filterContacts = (e)=> {
  //   const database=this.state.contacts;
  //   const filtered = database.filter((item) => item.name.toLowerCase().includes(this.state.filter.toLowerCase())
  // );

  //   return(  <div>
  //     <h2>Contacts: </h2>
  //     <form onChange={this.handleInputChange}>
  //       <label>
  //         Find contacts by name
  //         <input type="text" name="filter"
  //             onChange={this.handleInputChange}/>
  //       </label>
  //     </form>
  //     <ul>
  //     { filtered.map((item) => {
  //       return (
  //       <li key={item.id}>{item.name}: {item.number}</li>
  //       )
  //     })
  //     }
  //     </ul>
  //   </div> )
  // }

  render() {
    console.log(this.state.filter);
    return (
      <>
        <h1>Phonebook</h1>
        <PhoneForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts:</h2>
        <FilterContacts data={this.state} onSubmit={this.handleFilterField} />
        {/* <this.filterContacts database={this.state.contacts}/> */}
        <ContactsList data={this.state} />
      </>
    );
  }
}

export default App;
