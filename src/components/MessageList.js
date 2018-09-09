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

	render() {
		const messageList = this.state.messages.map((message) =>
        <li className="message-item">
          <p
            element="span"
            className="msg-sent-at">
            {message.sentAt}
          </p>
          {message.updatedTime ?
            <span className="msg-updated-at">
            Edited on: {" "}
              <p
                element="span"
                format="MM/DD/YY hh:mm A">
                {message.updatedTime}
              </p>
            </span>
            : null
          }
          <h4 className="msg-username">{message.username}</h4>
          {(this.state.toEdit === message.key) && (this.props.user.displayName === message.username) ?
            this.editMessage(message)
            :
            <div>
              {this.props.user.displayName === message.username ?
                <span
                  className="fa fa-wrench edit-msg"
                  onClick={() => this.setState({toEdit: message.key})}
                />
                :
                <div className="no-edit-msg" />
              }
              <p className="msg-content">{message.content}</p>
            </div>
          }
        </li>
    );

		return (
			<section>
				{messageList}
			</section>
		)}

};
	
	






export default MessageList;