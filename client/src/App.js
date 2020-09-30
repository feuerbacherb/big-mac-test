import React, { Component } from 'react';
import './App.css';
import SearchAPI from './pages/SearchAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      countryName: "",
      ip: ""
    };
  }

  callAPI() {
    if (localStorage.getItem('ip') === "" || localStorage.getItem('ip') === null ) {
      fetch("http://localhost:3001/ip")
        .then(res => res.json())
        .then(res => {
          this.setState({ 
            countryName: res.country_name,
            ip: res.ip
          });
          localStorage.setItem('countryName', res.country_name);
          localStorage.setItem('ip', res.ip);
        })
        .catch(err => err);
    } else {
      this.setState({
        countryName: localStorage.getItem('countryName'),
        ip: localStorage.getItem('ip')
      });
    }
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    //const apiInfo = this.callAPI();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1 className="App-intro">This is where the apiResponse is: {this.state.countryName}</h1>
        <SearchAPI ip={this.state.ip} countryName={this.state.countryName} />
      </div>
    );
  }
}


export default App;
