import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPgQlyFlyKmUdh0KRCOUribfy1EBs0uv8",
    authDomain: "bloc-chat-react-71abc.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-71abc.firebaseio.com",
    projectId: "bloc-chat-react-71abc",
    storageBucket: "bloc-chat-react-71abc.appspot.com",
    messagingSenderId: "613486536320"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
