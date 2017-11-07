import React, { Component } from 'react';

class Select extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onChange(this.props.id, e.target.value);
  }

  render() {
    return (
      <select 
        type='text' 
        value={this.props.searchCat} 
        onChange={this.handleChange} 
        className={this.props.className}>
        {this.props.nullOption ? <option  value='' selected disabled>Seleccionar Filtro</option> : ''}
        {this.props.options.map((opt) => {
          return <option value={opt}>{opt}</option>
          })}
      </select>
    )
  }
}

export default Select;