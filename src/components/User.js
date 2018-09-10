import React, { Component } from 'react';

class User extends Component {
	constructor(props) {
		super(props);
		this.signIn = this.signIn.bind(this);
    	this.signOut = this.signOut.bind(this);

	}

	componentDidMount() {
		this.props.firebase.auth().onAuthStateChanged( user => {
  		this.props.setUser(user);
		});
	}

	signIn() {
		const provider = new this.props.firebase.auth.GoogleAuthProvider();
		this.props.firebase.auth().signInWithPopup( provider );
	}

	signOut() {
		this.props.firebase.auth().signOut();
	}

	render() {
		return (
			<section>
				{this.props.user.displayName}
			</section>
		)}	

};













export default User;