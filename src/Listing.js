import React, { Component } from "react";
import "./App.css";

class Listing extends Component {

  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li class="li"  onClick={() => this.delete(item.key)}
      key={item.key}>{item.text}</li>
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var ListingEntries = this.props.entries;
    var listItems = ListingEntries.map(this.createTasks);

    return (
      <ul className="list">
          {listItems}
      </ul>
    );
  }
}

export default Listing;
