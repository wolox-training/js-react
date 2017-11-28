import React, { Component } from 'react';
import './dashboard.css';
import '../../base.css';
import books from './books';
import BooksContainer from './booksContainer';
import FiltersContainer from './filtersContainer';
import BookService from '../customComponents/bookService';


class GeneralContainer extends Component {

  state = {
    searchText: '',
    searchCat:'',
    books: []
  }
  
  getBooks = () => {
    BookService.bookList().then((response) => {
      this.setState({books: response.data})
    })
  }

  handleChange = (key, value) => {
    this.setState({[key]: value});
  }


  componentWillMount() {
    this.getBooks()
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