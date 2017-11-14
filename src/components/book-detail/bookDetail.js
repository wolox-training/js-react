import React, { Component } from 'react';
import './bookDetail.css';
import '../dashboard/dashboard.css';
import Button from '../customComponents/button'

class BookDetail extends Component {

  render() {
    const book = this.props.book
    return (
      <div className='book-detail flex'>
        <img className='book-cover' src={book.image_url}/>
        <div className='book-info-container flex-column'>
          <span className='section-title bold'>{book.title}</span>
          <span className='sub-title grey'>{book.author}</span>
          <span className='sub-title grey'>{book.year}</span>
          <span className='sub-title grey'>{book.genre}</span>
          <p className='book-description light-grey'>Hola esta es la extensa descripcion del libro</p>
          <Button className='rent-button section-title bold white' text='Rent'/>
        </div>
      </div>
    );
  }
}

export default BookDetail;
