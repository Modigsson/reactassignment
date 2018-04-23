import React, { Component } from "react";

class Listing extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
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
