import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const comment = this.props.comment
    return (
      <div {...this.props}>
        <img alt='profile-pic' className='commenter-avatar' src={comment.image_url}/>
        <div className='padding-left-15 comment-body flex-column'>
          <div className='comment-header flex-column'>
            <span className='desc-1 bold'>{comment.commenter}</span>
            <span className='desc-2 light-grey'>{comment.date}</span>
          </div>
          <span className='desc-1 padding-top-10 light-grey'>{comment.text}</span>
        </div>
      </div>
    );
  }
}

export default Comment;
