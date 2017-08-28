import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      status: "pending..."
    }


  }

  handleClick() {
    this.setState({
      status: "Active"
    })
  }



  render() {
    return (
      <div>
        <p>You need to contact{this.props.firstName} {this.props.lastName} at {this.props.phoneNumber} </p>
        <button onClick={this.handleClick}>{this.state.status}</button>
      </div>
    )

  }
}

export default Contact;

