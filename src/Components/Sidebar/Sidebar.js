import React, { Component } from 'react';
import './Sidebar.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Animals: false,
      Computers: false,
      Earth: false,
      Geek: false,
      Literature: false,
      Science: false,
    }
  }

  render() {
    return(
      <div className="Sidebar">
        <h4>Filter cards by category</h4>
        <div>
        <input 
          type="checkbox" 
          id="Animals" 
          onChange={() => {
          this.setState({
            Animals: !this.state.Animals
          }, () => {
              this.props.filterCards(this.state)
          })
        }}></input>
        <label htmlFor="Animals">Animals</label>
        </div>
        <div>
        <input 
          type="checkbox" 
          id="Computers" 
          onChange={() => {
            this.setState({
              Computers: !this.state.Computers
            }, () => {
              this.props.filterCards(this.state)
            })
        }}></input>
        <label htmlFor="Computers">Computers</label>
        </div>
        <div>
        <input 
          type="checkbox" 
          id="Earth" 
          onChange={() => {
            this.setState({
              Earth: !this.state.Earth
            }, () => {
              this.props.filterCards(this.state)
            })
        }}></input>
        <label htmlFor="Earth">Earth</label>
        </div>
        <div>
        <input 
          type="checkbox" 
          id="Geek" 
          onChange={() => {
            this.setState({
              Geek: !this.state.Geek
            }, () => {
              this.props.filterCards(this.state)
            })
        }}></input>
        <label htmlFor="Geek">Geek</label>
        </div>
        <div>
        <input 
          type="checkbox" 
          id="Literature" 
          onChange={() => {
            this.setState({
              Literature: !this.state.Literature
            }, () => {
              this.props.filterCards(this.state)
            })
        }}></input>
        <label htmlFor="Literature">Literature</label>
        </div>
        <div>
        <input 
          type="checkbox" 
          id="Science" 
          onChange={() => {
            this.setState({
              Science: !this.state.Science
            }, () => {
              this.props.filterCards(this.state)
            })
        }}></input>
        <label htmlFor="Science">Science</label>
        </div>
      </div>
    )
  }
}

export default Sidebar;