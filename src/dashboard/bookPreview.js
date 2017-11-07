import React, { Component } from 'react';

import default_book from '../assets/default_book.svg';
class BookPreview extends Component {
  render() {
    const book = this.props.book
    return (
      <div className="book">
        {book.image_url ? <img className='book-cover' src={book.image_url}/> : <div className='book-cover default-book'><img src={default_book}/></div>} 
        <div className='book-details'>
          <span className='desc-1 bold'>{book.title}</span>
          <span className='desc-2'>{book.author}</span>
        </div>
      </div>
    );
  }
}

export default BookPreview;