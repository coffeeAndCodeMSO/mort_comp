import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MortgageComparison from '../../comp/MortgageComparison';

Enzyme.configure({ adapter: new Adapter() });

describe('Mortgage Comparison test suite', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MortgageComparison />);
  });
});
