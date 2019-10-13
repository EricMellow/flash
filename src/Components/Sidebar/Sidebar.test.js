import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter('enzyme-adapter-react-15') });

describe('Sidebar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Sidebar />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sidebar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
})

