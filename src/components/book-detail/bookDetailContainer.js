import React, { Component } from 'react';
import './bookDetail.css';
import '../../base.css';
import CommentsContainer from './commentsContainer';
import SuggestionsContainer from './suggestionsContainer';
import BookDetail from './bookDetail';
import BackButton from '../customComponents/backButton';

class BookDetailContainer extends Component {

  state = {
    newComment: '',
    book: this.props.location.state.book
  }

  handleChange = (key, value) => {
    this.setState({[key]: value})
  }

  render() {
    const comments = [{commenter:'Margarita Stolbizer', text:'hola aca en la pile con calorrr comentenn', date:'18/12/1992',
      image_url:'https://pbs.twimg.com/profile_images/893991289276035080/Dwthm1jY.jpg'}]
    const suggestions = [{cover:'http://placepu.gs/500/400'},{cover:'http://placepu.gs/300/200'}];

    return (
      <div>
        <BackButton/>
        <div className='general-container'>
          <BookDetail book={this.state.book}/>
          <div className='separator'/>
          <SuggestionsContainer suggestions={suggestions}/>
          <div className='separator'/>
          <CommentsContainer newComment={this.state.newComment} onChange={this.handleChange} comments={comments}/>
        </div>
      </div>
    );

  }
}

export default BookDetailContainer;
