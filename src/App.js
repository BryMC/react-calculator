import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props) {
  super()
  this.state = {
    results: 0
  }
}
handleSubmit(e){
  this.setState({
    results: this.state.results
  })
}
  render() {
    let results =
    this.props.results((a, b)) => (
      <Result body=({a}+{b}) />
    )
    return (
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input type="text" />
            <span>+</span>
          <input type="text" />
            <span>=</span>
          <button onClick={(e) => this.handleSubmit(e)} type="submit"> Calculate! </button>
          <h3>Addition results go here!</h3>
        </div>
      </div>
    );
  }
}

export default App;
