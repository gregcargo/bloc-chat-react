import React, { Component } from 'react';

class RoomList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rooms: [],
			newRoomName: '',
		};

		this.roomsRef = this.props.firebase.database().ref('rooms');
		};

	componentDidMount() {
     	this.roomsRef.on('child_added', snapshot => {
     		const rooms = snapshot.val();
       		rooms.key = snapshot.key;
       
       	this.setState({ rooms: this.state.rooms.concat( rooms ) })
     	});
   		}

   	handleChange(event) {
    	event.preventDefault();
    	if (!this.state.newRoomName) { return }
    	this.setState({newRoomName: event.target.value});

  		}

  	

   	createRoom = (e) => {
   		e.preventDefault();
     	console.log('createRoom called');
   		this.roomsRef.push({
  		name: this.state.newRoomName
		});
		this.setState({ newRoomName: '' })
   		}

	render() {
		return (
			<div>
				<div>
					{this.state.rooms.map ( (rooms) =>
						<section className="RoomList" key={rooms.key} onClick={ () => this.props.setRoom(rooms) }>
    					{rooms.name}
  						</section>

  					)}
  				</div>
  				<form onSubmit={this.createRoom}>
  					<input placeholder='New room' 
  						value={this.state.newRoomName}
						onChange={e => this.setState({newRoomName: e.target.value} )}
							/>
  					<input type='submit' value='Create room' />
				</form>
			</div>	
  			)}
	
	}



export default RoomList;