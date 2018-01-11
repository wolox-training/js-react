import React, { Component } from 'react';

class Input extends Component {

  static defaultProps = {
    type: 'text'
  }

  handleChange = (e) => {
    this.props.onChange(this.props.id, e.target.value);
  }

  render() {
    return (
      <div className={`${this.props.containerClass} ${this.props.title ? 'flex-column padding-top-20' : ''}`}>
        {this.props.title ? <span className={this.props.titleClass}>{this.props.title}</span> : ''}
        <input
          type={this.props.type}
          onChange={this.handleChange}
          className={this.props.className}
          placeholder={this.props.placeholder}/>
      </div>
    )
  }
}

export default Input;
