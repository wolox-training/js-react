import React, { Component } from 'react';
import './dashboard.css';
import '../../base.css';
import books from './books';
import BooksContainer from './booksContainer';
import FiltersContainer from './filtersContainer';

class GeneralContainer extends Component {

  state = {
    searchText: '',
    searchCat:'',
    books: books
  }

  handleChange = (key, value) => {
    this.setState({[key]: value});
  }

  applyFilter = () => {
    if(this.state.searchCat) {
      this.setState({books: books.filter((b) => {
        return b[this.state.searchCat].toLowerCase().search(this.state.searchText.toLowerCase()) !== -1
        })})
    }
  }

  render() {
    return (
      <div className='general-container'>
        <FiltersContainer searchText={this.state.searchText} searchCategory={this.state.searchCat} onChange={this.handleChange} onSearch={this.applyFilter}/>
        <BooksContainer books={this.state.books}/>
      </div>
    );
  }
}

export default GeneralContainer;
