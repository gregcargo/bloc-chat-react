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
     		const room = snapshot.val();
       		room.key = snapshot.key;
       
       	this.setState({ rooms: this.state.rooms.concat( room ) })
     	});
   		}

   	handleChange(event) {
    	event.preventDefault();
    	this.setState({newRoomName: event.target.value});
  }

   	createRoom = (e) => {
   		this.roomsRef.push({
  		name: this.state.newRoomName
		});
   		}

	render() {
		return (
			<div>
				<div>
					{this.state.rooms.map ( (rooms) =>
						<section className="RoomList" key={rooms.key}>
    					{rooms.name}
  						</section>

  					)}
  				</div>
  				<form onSubmit={this.createRoom}>
  					<input placeholder='New room' 
  						value={this.state.newRoomName}
						onChange={e => this.setState({newRoomName: e.target.value})}
							/>
  					<input type='submit' value='Create room' />
				</form>
			</div>	
  			)}
	
	}



export default RoomList;