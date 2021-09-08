import React, { Component } from "react";
import s from "components/FilterContacts/FilterContacts.module.css";

class FilterContacts extends Component {
  render() {
    return (
      <form className={s.findForm}>
        <label className={s.findFormLabel}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={this.props.value}
            onChange={this.props.onSubmit}
          />
        </label>
      </form>
    );
  }
}

export default FilterContacts;
