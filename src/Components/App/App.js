import React, { Component } from 'react';
import './App.css';

class App extends Component {

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
  render() {
    const card = this.getRandomCard();

    return(
      <div className="Flash">
        <h1>FLASH</h1>
      </div>
    )
  }
}

export default App;
