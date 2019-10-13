import React, { Component } from 'react';
import './App.css';
import Card from '../Cards/Card'
import Sidebar from '../Sidebar/Sidebar'
import data from '../../questions'

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardData: this.formatCards(),
      score: 0,
      selectedCards: []
    }
  }

  formatCards() {
    const cards = data.map((card, index) => {
      return (
        <Card
          key={index}
          category={card.category}
          question={card.question}
          answer={card.answer}
          updateScore={this.updateScore}
        />
      );
    })
    return cards
  }

  getRandomCard() {
    let stateKey = 'selectedCards'
    if (!this.state.selectedCards.length) {
      stateKey = 'cardData'
    } 
    const index = Math.floor(Math.random() * ((this.state[stateKey].length - 1) - 0 + 1)) + 0

    return this.state[stateKey][index]
  }

  updateScore = (score) => {
    let newScore = this.state.score
    this.setState({
      score: newScore += score
    })
  }

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
        <header>
        <h1 aria-label="Applcation name"><i>Flash</i> Cards</h1>
        <h2 aria-label="Total points">Total Points: {this.state.score}</h2>
        </header>
        <main>
          <Sidebar filterCards={this.filterCards}/>
          {card}
        </main>
      </div>
    )
  }
}

export default App;
