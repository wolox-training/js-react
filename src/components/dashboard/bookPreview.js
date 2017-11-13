import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import default_book from '../../assets/default_book.svg';
class BookPreview extends Component {

  state = {redirect:false}

  redirectPage = () => {
    this.setState({redirect: true})
  }

  render() {
    const book = this.props.book
    if (this.state.redirect) {
      return <Redirect to={`/books/${book.id}`}/>;
    }

    return (
      <div className="book" onClick={this.redirectPage}>
        {book.image_url ? <img alt='cover' className='book-cover' src={book.image_url}/> : <div className='book-cover default-book'><img alt='cover' src={default_book}/></div>}
        <div className='book-details'>
          <span className='desc-1 bold'>{book.title}</span>
          <span className='desc-2'>{book.author}</span>
        </div>
      </div>
    );
  }
}

export default BookPreview;
