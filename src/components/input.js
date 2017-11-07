import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();
    this.state = {value:''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value})
    this.props.onChange(this.props.id, e.target.value);
  }

  render() {
    return (
      <input 
        type='text' 
        value={this.state.value} 
        onChange={this.handleChange} 
        className={this.props.className}
        placeholder={this.props.placeholder}/>
    )
  }
}

export default Input;
