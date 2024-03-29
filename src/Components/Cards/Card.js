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
    if (!this.state.showAnswer) {
      return (
        <div 
          className='Card' 
          aria-label="Flash card"
          onClick={() => {
          this.showAnswer()
        }}>
          <h2 className='category'>Category: {this.props.category}</h2>
          <h4 className='question' aria-label="Question">{this.props.question}</h4>
          <p>*Click card to see the answer</p>
        </div>
      );
    } else {
      return (
        <div className='Card' aria-label="Flash card">
          <h2 className="category">Answer</h2>
          <h4 className="answer" aria-label="Answer">The correct answer is: {this.props.answer}</h4>
          <p>Did you guess the correct answer?</p>
          <button 
            className="yes-btn" 
            aria-label="Yes button"
            onClick={() => {
            this.setState({
              showAnswer: false,
            })
            this.props.updateScore(1)
          }}>Yes</button>
          <button 
            className="no-btn" 
            aria-label="No button"
            onClick={() => {
            this.setState({
              showAnswer: false,
            })
            this.props.updateScore(0)
          }}>No</button>
        </div>
      );
    }
  }
}
export default Card;
