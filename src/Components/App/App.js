import React, { Component } from 'react';
import './App.css';
import Card from '../Cards/Card'
import data from '../../questions'

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardData: data,
      score: 0,
    }
  }

  getRandomCard() {
    const cards = this.state.cardData.map((card, index) => {
      return (
        <Card
          key={index}
          category={card.category}
          question={card.question}
          answer={card.answer}
          addPoint={this.addPoint}
        />
      );
    });

    const index = Math.floor(Math.random() * ((cards.length - 1) - 0 + 1)) + 0

    return cards[index]
  }

  addPoint = () => {
    let newScore = this.state.score
    this.setState({
  filterCards = (sidebarState) => {
    if (!Object.values(sidebarState).includes(true)) {
      this.setState({
        selectedCards: this.formatCards()
      })
    } else {
      const stateKeys = Object.keys(sidebarState)
      const filteredCards = []
      stateKeys.forEach(key => {
        if (sidebarState[key] === true) {
          this.state.cardData.forEach(card => {
            if (card.props.category === key) {
              filteredCards.push(card)
            }
          })
        }
    })
      this.setState({
        selectedCards: filteredCards
      })
  }
  }

  render() {
    const card = this.getRandomCard();

    return(
      <div className="Flash">
        <h2>Total Points: {this.state.score}</h2>
        {card}
      </div>
    )
  }
}

export default App;
