import React, { Component } from 'react';
import Calendar from './Calendar';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>Calendar</h1>
        <Calendar start={1} end={30} />
      </div>
    );
  }
}

export default App;
