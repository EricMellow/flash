import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super()
  }
  
  render() {
      return (
        <div className='Card'>
          <h3 className='category'>{this.props.category}</h3>
            <h4 className='question'>{this.props.question}</h4>
        </div>
      );
  }
}
export default Card;
