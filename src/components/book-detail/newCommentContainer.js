import React, { Component } from 'react';
import Button from '../customComponents/button';
import Textarea from '../customComponents/textarea';


class NewCommentContainer extends Component {
  render() {
    return (
      <div className="padding-top-20 flex">
        <img alt='profile-pic' className='commenter-avatar' src='https://www.pets4homes.co.uk/images/articles/1646/kitten-emergencies-signs-to-look-out-for-537479947ec1c.jpg'/>
        <div className='new-comment padding-left-15 flex-column'>
          <span className='bold'>Agregar Comentario</span>
          <Textarea className='margin-v-15 comment-textarea' id='newComment' onChange={this.props.onChange} newComment={this.props.newComment}/>
          <Button className='send-commnet-button section-title white' text='Enviar'/>
        </div>
      </div>
    );
  }
}

export default NewCommentContainer;
