import React, { Component } from 'react';
import './bookDetail.css';

class SuggestionsContainer extends Component {

  render() {
    return (
      <div>
        <span className='section-title bold green'>Suggestions</span>
        <div className='padding-top-20'>
          {this.props.suggestions.map((suggestion) => {
          return <img key={suggestion.cover} alt='cover' className='suggestion-cover' src={suggestion.cover}/>
          })}
        </div>
      </div>
    );
  }
}

export default SuggestionsContainer;
