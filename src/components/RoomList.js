import React, { Component } from 'react';

class RoomList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rooms: []
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

   	createRoom () {
   		const newRoomName = this.state.rooms.name();
   		this.roomsRef.push({
  		name: newRoomName
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
  					<label>Name:<input type="text" name="name" /></label>
  					<input type="submit" value="Submit" />
				</form>
			</div>	
  			)}
	
	}



export default RoomList;