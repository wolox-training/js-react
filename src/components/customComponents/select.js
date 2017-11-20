import React, { Component } from 'react';

class Select extends Component {
  handleChange = (e) => {
    this.props.onChange(this.props.id, e.target.value);
  }

  render() {
    return (
      <select
        onChange={this.handleChange}
        value={this.props.searchCategory}
        className={this.props.className} defaultValue=''>
        {this.props.nullOption ? <option  value='' disabled>Seleccionar Filtro</option> : ''}
        {this.props.options.map((opt) => {
          return <option value={opt}>{opt}</option>
          })}
      </select>
    )
  }
}

export default Select;
