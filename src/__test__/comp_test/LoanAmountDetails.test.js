import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoanAmountDetails from '../../comp/LoanAmountDetails';

Enzyme.configure({ adapter: new Adapter() });

describe('Loan Amount Details test suite', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<LoanAmountDetails />);
  });
});
