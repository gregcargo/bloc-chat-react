import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import * as firebase from 'firebase';

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
  constructor(props) {
    super(props);
    this.state = {activeRoom: ""};
  }

  setRoom(room) {
    this.setState({ activeRoom: room });
    console.log(this.state.activeRoom);
  }


  render() {
    return (
      <div className="App">
        <RoomList firebase= {firebase} setRoom={this.setRoom.bind(this)} activeRoom ={this.state.activeRoom} />
        <MessageList firebase= {firebase} />
      </div>
    );
  }
}

export default App;
