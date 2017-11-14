import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputCell from '../../comp/InputCell';

Enzyme.configure({ adapter: new Adapter() });

describe('Input Cell test suite', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<InputCell />);
  });
});
