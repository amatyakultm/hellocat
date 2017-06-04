import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './main.scss';
import Service from './service.js';
import inputdata from './inputdata';

/*
  GetImage ==> Service.getImageItems(number)
*/

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Value was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Cat Gallery</h2>
      </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Type amount of images:
          </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button>
             Submit
          </button>
          <h4>{this.state.data}</h4>
        </form>



      </div>
    );
  }
}

export default App;
