import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };
  }

  handleCityChange = event => this.setState({
    city: event.target.value
  });

  handleSearchOnClick = () => {
    if (this.state.city) {
      this.props.search(this.state.city);
    }
  };

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
        <button className="search-button" onClick={this.handleSearchOnClick}>
          Search
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
};
