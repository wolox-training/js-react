import React, { Component } from 'react';

class Textarea extends Component {

  handleChange = (e) => {
    this.props.onChange(this.props.id,e.target.value);
  }

  render() {
    return (
      <textarea
        value={this.props.newComment}
        onChange={this.handleChange}
        className={this.props.className}/>
    )
  }
}

export default Textarea;
