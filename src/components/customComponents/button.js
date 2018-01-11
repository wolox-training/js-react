import React, { Component } from 'react';

class Button extends Component {

  static defaultProps = {
    type: 'button'
  }

  handleClick = () => {
    this.props.onClick();
  }

  render() {
    return (
      <button
        type={this.props.type}
        {...this.props}
        onClick={this.handleClick}>
        {this.props.text}
      </button>
    )
  }
}

export default Button;
