import React, { Component } from "react";
// import ContactsList from "components/Contacts/Contacts";

class FilterContacts extends Component {
  state = {
    filter: "",
  };

  onInputAdd = (e) => {
    this.setState({ filter: e.target.value });
    // const filterValue = this.state.filter;
    // this.props.onSubmit(filterValue);
    // console.log(this.props.value)
    this.props.onSubmit(this.state.filter);
  };

  //     resetForm=() => {
  //       this.setState({
  //         filter: "",
  //     })
  // }

  dataTransfer = (e) => {
    // e.preventDefault();
    this.props.onSubmit(e.target.value);
    // this.resetForm();
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
        <form>
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
      <form>
        <label>
          Find contacts by name
          <input type="text" name="filter" onChange={this.twoInOne} />
        </label>
      </form>
    );
  }
}

export default FilterContacts;
