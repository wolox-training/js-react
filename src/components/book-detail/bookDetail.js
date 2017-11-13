import React, { Component } from 'react';
import './bookDetail.css';
import '../dashboard/dashboard.css';
import Button from '../customComponents/button'

class BookDetail extends Component {

  render() {
    return (
      <div className='book-detail flex'>
        <img className='book-cover' src='http://kittentoob.com/wp-content/uploads/2014/09/SF1-1024x768.jpg'/>
        <div className='book-info-container flex-column'>
          <span className='section-title bold'>Titulo</span>
          <span className='sub-title grey'>Autor</span>
          <span className='sub-title grey'>Año</span>
          <span className='sub-title grey'>Tematica</span>
          <p className='book-description light-grey'>Hola esta es la extensa descripcion del libro</p>
          <Button className='rent-button section-title bold white' text='Alquilar'/>
        </div>
      </div>
    );
  }
}

export default BookDetail;
