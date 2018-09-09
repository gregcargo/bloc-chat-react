import React, { Component } from 'react';

class MessageList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			content: "",
			sentAt: "",
			messages: [],
		};

		this.messagesRef = this.props.firebase.database().ref('messages');
		};

	componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
             const message = snapshot.val();
               message.key = snapshot.key;

       	this.setState({ messages: this.state.messages.concat( message) })
        });
   		}



	render() {
		const messageList = this.state.messages.map((message) =>
        <li className="message-item">
          <p
            element="span"
            className="msg-sent-at">
            {message.sentAt}
          </p>
          <p className="msg-username">
          	{message.username}
          </p>
          <p className="msg-content">
          	{message.content}
          </p>
        </li>
    );

		return (
			<section>
				{messageList}
			</section>
		)}

};
	
	






export default MessageList;