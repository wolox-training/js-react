import React, { Component } from 'react';

class Button extends Component {
  handleClick = () => {
    this.props.onClick();
  }

  render() {
    return (
      <button
        type='button'
        {...this.props}
        onClick={this.handleClick}>
        {this.props.text}
      </button>
    )
  }
}

export default Button;
