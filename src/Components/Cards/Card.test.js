import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration } from '@babel/types';

Enzyme.configure({ adapter: new Adapter('enzyme-adapter-react-15') });

describe('Card', () => {
let wrapper;

beforeEach(() => {
  wrapper= shallow(<Card />);
})

it('should match the snapshot if showAnswer is false', () => {
  expect(wrapper).toMatchSnapshot(); 
})

it('should match the snapshot if showAnswer is true', () => {
  wrapper.instance().setState({
    showAnswer: true,
  })
  expect(wrapper).toMatchSnapshot();
})
  
describe('showAnswer', () => {
  it('should set showAnswer to the opposite of its current value', () => {
    expect(wrapper.state('showAnswer')).toEqual(false);
    wrapper.instance().showAnswer();
    expect(wrapper.state('showAnswer')).toEqual(true);
  })
})
})

