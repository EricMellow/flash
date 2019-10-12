import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super()
    this.state = {
      showAnswer: false,
    }
  }

  showAnswer() {
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }
  
  render() {
      return (
        <div className='Card' onClick={() => {
          this.showAnswer()
        }}>
          <h3 className='category'>{this.props.category}</h3>
          <h4 className='question'>{this.props.question}</h4>
          {this.state.showAnswer ? 
            <div>
            <h4 className="answer">The correct answer is: {this.props.answer}</h4>
            <h4>Did you guess the correct answer?</h4>
            <button onClick={() => {
            this.props.addPoint()}}>Yes</button>
            </div> : null}
        </div>
      );
  }
}
export default Card;
