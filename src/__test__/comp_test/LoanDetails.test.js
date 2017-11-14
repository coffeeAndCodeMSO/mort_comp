import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoanDetails from '../../comp/LoanDetails';
import Mortgage from '../../lib/mortgage.js'

Enzyme.configure({ adapter: new Adapter() });

const testMortB = new Mortgage(400000, 0.03930, 30, 350.00);

describe('Loan Details test suite', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<LoanDetails mortgage={ testMortB } />);
  });
});
