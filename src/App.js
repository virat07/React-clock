import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      date:new Date()
    }
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
      
  } 
  componentWillUnMount(){
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });

  }

  render() {
    return (
      <div className="clock">
        <header className="clock-header">
          <img src={logo} className="clock-logo" alt="logo" />
          <div>
            <h1>Hi! Vk</h1>
            <h2>It's {this.state.date.toLocaleTimeString()}</h2>
          </div>
        </header>
      </div>
    );
  }
}

export default clock;
