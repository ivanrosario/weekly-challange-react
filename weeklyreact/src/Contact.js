import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  render() {
    return (
      <div>
        <p>You need to contact{this.props.firstName} {this.props.lastName} at {this.props.phoneNumber} </p>
        <button>{this.props.status}</button>
      </div>
    )

  }
}

export default Contact;

