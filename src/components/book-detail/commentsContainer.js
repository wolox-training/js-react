import React, { Component } from 'react';
import './bookDetail.css';
import NewCommentContainer from './newCommentContainer';
import Comment from './comment';

class CommentsContainer extends Component {

  render() {
    const comment = this.props.comments;
    return (
      <div>
        <span className='section-title bold green'>Comments</span>
        <div className='padding-left-25'>
          <NewCommentContainer newComment={this.props.newComment} onChange={this.props.onChange}/>
          {this.props.comments.map((comment) => {
            return <Comment className='padding-top-25 comment flex' comment={comment}/>
          })}
        </div>
      </div>
    );
  }
}

export default CommentsContainer;
