import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div>
        <h1 >Hello world, {this.props.name}  </h1>
      </div>
    )

  }
}

export default Name;