import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null
    };
  }

  handleCityChange = event => this.setState({
    city: event.target.value
  });

  render() {
    return (
      <div className="search-input-container">
        <input
          className="search-input-text"
          type="text"
          placeholder="City"
          value={this.state.city}
          onChange={this.handleCityChange}
        />
        <button className="search-button">Search</button>
      </div>
    );
  }
}
