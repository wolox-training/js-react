import React, { Component } from 'react';
import BookPreview from './bookPreview';

class BooksContainer extends Component {
  render() {
    return (
      <div className="book-container">
        {this.props.books.map((book) => {
          return <BookPreview key={book.id} book={book}/>
          })}
      </div>
    );
  }
}

export default BooksContainer;
