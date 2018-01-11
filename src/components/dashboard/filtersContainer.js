import React, { Component } from 'react';
import search_image from '../../assets/search.svg';
import Input from '../customComponents/input';
import Select from '../customComponents/select';

class FiltersContainer extends Component {
  render() {
    const selectOptions = ['author', 'title']
    return (
      <div className="filters-container">
        <Select className='filter-select desc-1 italic' onChange={this.props.onChange} searchCategory={this.props.searchCategory} id='searchCat' nullOption={true} options={selectOptions}/>
        <div className='search-combo'>
          <Input className='search-text italic' containerClass='inline' searchText={this.props.searchText} onChange={this.props.onChange} id='searchText' placeholder='Buscar...'/>
          <img alt='search' className='search-button' src={search_image} onClick={this.props.onSearch}/>
        </div>
      </div>
    );
  }
}

export default FiltersContainer;
