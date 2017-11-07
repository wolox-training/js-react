import React, { Component } from 'react';
import search_image from '../assets/search.svg';
import Input from '../components/input';
import Select from '../components/select';

class FiltersContainer extends Component {
  render() {
    const selectOptions = ['author', 'title']
    return (
      <div className="filters-container">
        <Select className='filter-select desc-1 italic' onChange={this.props.onChange} searchCat={this.props.searchCat} id='searchCat' nullOption={true} options={selectOptions}/>
        <div className='search-combo'>
          <Input className='search-text italic' searchText={this.props.searchText} onChange={this.props.onChange} id='searchText' placeholder='Buscar...'/>
          <img className='search-button' src={search_image} onClick={this.props.onSearch}/>
        </div>
      </div>
    );
  }
}

export default FiltersContainer;