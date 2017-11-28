import React, { Component } from 'react';
import search_image from '../../assets/search.svg';
import Input from '../customComponents/input';
import Select from '../customComponents/select';
import { bindActionCreators } from 'redux'

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import bookActions from '../redux/actions/bookActions';

let FiltersContainer = ({applyFilter}) => {
  const selectOptions = ['author', 'title']
  return (
    <div className="filters-container">
      <Select className='filter-select desc-1 italic' onChange={this.props.onChange} searchCategory={this.props.searchCategory} id='searchCat' nullOption={true} options={selectOptions}/>
      <div className='search-combo'>
        <Input className='search-text italic' containerClass='inline' searchText={this.props.searchText} onChange={this.props.onChange} id='searchText' placeholder='Buscar...'/>
        <img alt='search' className='search-button' src={search_image} onClick={applyFilter}/>
      </div>
    </div>
  )
}

FiltersContainer.propTypes = {
  applyFilter: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  filters: {
    searchText: PropTypes.string,
    searchCategory: PropTypes.string
  },
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    books: state.books,
    filters: state.filters
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer)