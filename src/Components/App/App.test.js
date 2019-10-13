import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import data from '../../questions'

Enzyme.configure({ adapter: new Adapter('enzyme-adapter-react-15') });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('formatCards', () => {

    it('returns an array of 30 cards', () => {
      const expected = wrapper.instance().formatCards()
      expect(expected.length).toEqual(30)
    })
  })

  describe('getRandomCard', () => {

    it('returns a random card from state.selectedCards if it has length', () => {
      wrapper.instance().setState({
        selectedCards: data
      })
      const randomCard = wrapper.instance().getRandomCard()
      const expected = wrapper.state('selectedCards').includes(randomCard)
      expect(expected).toEqual(true)
    })

    it('returns a random card from state.cardData if state.selectedCards does not have length', () => {
      wrapper.instance().setState({
        selectedCards: []
      })
      const randomCard = wrapper.instance().getRandomCard()
      const expected = wrapper.state('cardData').includes(randomCard)
      expect(expected).toEqual(true)
    })
  })

  describe('updateScore', () => {

    it('should add the score it is sent as an argument to the score in state', () => {
      expect(wrapper.state('score')).toEqual(0);
      wrapper.instance().updateScore(1)
      expect(wrapper.state('score')).toEqual(1);
    })
  })

  describe('filterCards', () => {

    it('should set selectedCards with all the cards if no sidebarState values are true', () => {
      expect(wrapper.state('selectedCards').length).toEqual(0);
      wrapper.instance().filterCards({Animals: false});
      expect(wrapper.state('selectedCards').length).toEqual(30);
    })

    it('should set selectedCards with cards that match sidebarState keys that have a true value', () => {
      expect(wrapper.state('selectedCards').length).toEqual(0)

      wrapper.instance().filterCards({ Animals: true, Earth: false })
      expect(wrapper.state('selectedCards').length).toEqual(5)
      
      wrapper.instance().filterCards({Animals: true, Earth: true})
      expect(wrapper.state('selectedCards').length).toEqual(10)
    })

  })
  
})

