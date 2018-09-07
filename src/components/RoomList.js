import React, { Component } from 'react';

class RoomList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rooms: []
		};

		this.roomsRef = this.props.firebase.database().ref('rooms');
		};

		render() {
			return this.state.rooms.map ( (rooms) =>
				<section className="RoomList" key={rooms.key}>
    				{rooms.name}
  				</section>
  			);
		}

componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
     	const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
     });
   }
}



export default RoomList;