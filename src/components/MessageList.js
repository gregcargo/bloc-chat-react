import React, { Component } from 'react';

class MessageList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			content: "",
			sentAt: "",
			messages: [],
			roomID: "",
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

   	handleChange(e) {
    	e.preventDefault();
    	this.setState({
      		username: this.props.user.displayName,
      		content: e.target.value,
      		sentAt: this.props.firebase.database.ServerValue.TIMESTAMP
    	});
  		}

   	createMessage = (e) => {
   		e.preventDefault();
     	console.log('createMessage called');
   		this.messagesRef.push({
  		name: this.state.content
		});
		this.setState({ content: '' })
   		}

	render() {
	
		const messageBar = (
      		<form onSubmit={this.createMessage}>
        		<input 
        			type="text" 
        			value={this.state.content}
              		placeholder="Enter Message"
              		onChange={this.handleChange}		
            	/>
            	<button type="submit">Send</button>
      		</form>
    		);

		const messageList = this.state.messages.filter(message => message.roomId === this.props.activeRoom.key).map((message) =>
        <section className="message-item" key={message.key}>
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
        </section>
    );

		return (
			<section>
				{messageList}
				{messageBar}
			</section>
		)}

};
	
	






export default MessageList;