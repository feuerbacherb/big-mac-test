import React, { Component } from 'react';

class SearchAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: ""
    };
  }

  render() {
    
    return (
      <div className="SearchAPI">
        <h1>SearchAPI</h1>
        <h5>{this.props.countryName}</h5>
        <h5>{this.props.ip}</h5>
      </div>
    )
  }
}

export default SearchAPI;