import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
//VERY HARD: In your list of Contacts, have a status icon by each one that starts as orange "Pending" status. Then have a call button that when clicked, changes the state to a green "Done" status.
    this.state = ({
      status: "pending...",
      className:"pending",
    }
  )


  }

  handleClick() {
    this.setState({
      status: "Done",
      className:"done",
    })
  }



  render() {
    return (
      <div>
        <p>You need to contact{this.props.firstName} {this.props.lastName} at {this.props.phoneNumber} </p>
       <span id={this.state.className}>O</span> <button onClick={this.handleClick}> {this.state.status}</button>
      </div>
    )

  }
}

export default Contact;

