import React, { Component } from "react";
import ContactsList from "components/Contacts/Contacts";

class FilterContacts extends Component {
  state = {
    filter: "",
  };

  onInputAdd = (e) => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  twoInOne = (e) => {
    this.onInputAdd(e);
    this.props.onSubmit(this.state.filter);
  };

  filterInput = (e) => {
    // const database=this.props.value.contacts;
    // const filtered = database.filter(item => {return item.name.toLowerCase().includes(this.state.filter.toLowerCase())})
    return (
      <div>
        <form onChange={this.twoInOne}>
          <label>
            Find contacts by name
            <input type="text" name="filter" onChange={this.twoInOne} />
          </label>
        </form>
        {/* <ContactsList value={filtered}/> */}
        {/* <ul> 
             { filtered.map((item) => {
              return (
              <li key={item.id}>{item.name}: {item.number}</li>
              );
            })
            } 
             </ul> */}
      </div>
    );
  };

  render() {
    return (
      // <>
      <form>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.twoInOne}
          />
        </label>
      </form>
      /* <ContactsList data={this.state} value={this.props.data.contacts}/>
      </> */
    );
  }
}

export default FilterContacts;
