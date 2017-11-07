import React, { Component } from 'react';
import logo from '../logo.svg';
import './dashboard.css';
import books from './books';
import BooksContainer from './booksContainer';
import FiltersContainer from './filtersContainer';

class GeneralContainer extends Component {

  constructor(){
    super()

    this.state = {
      searchText: '',
      searchCat:'',
      books: books
    }
    this.handleChange = this.handleChange.bind(this)
    this.applyFilter = this.applyFilter.bind(this)
  }

  handleChange(key, value){
    var newState = {};
    newState[key] = value;
    this.setState(newState);
  }

  applyFilter(){
    if(this.state.searchCat) {
      this.setState({books: books.filter((b) => {
        return b[this.state.searchCat].toLowerCase().search(this.state.searchText.toLowerCase()) !== -1
        })})
    }
  }

  render() {
    return (
      <div className='general-container'>
        <FiltersContainer searchText={this.state.searchText} searchCat={this.state.searchCat} onChange={this.handleChange} onSearch={this.applyFilter}/>
        <BooksContainer books={this.state.books}/>
      </div>
    );
  }
}

export default GeneralContainer;
