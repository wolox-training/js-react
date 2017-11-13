import React, { Component } from 'react';

class Input extends Component {

  handleChange = (e) => {
    this.props.onChange(this.props.id, e.target.value);
  }

  render() {
    return (
      <input
        type='text'
        onChange={this.handleChange}
        className={this.props.className}
        placeholder={this.props.placeholder}/>
    )
  }
}

export default Input;
