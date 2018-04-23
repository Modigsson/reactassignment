import React, { Component } from 'react';
import './App.css';
import Listing from './Listing';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem=this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";

    console.log(this.state.items);

    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          </header>
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="Add stuff"></input>
            <button type="Submit">Add</button>
            </form>
            <Listing entries={this.state.items}/>
      </div>
    );
  }
}

export default App;
