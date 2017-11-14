import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComparisonResults from '../../comp/ComparisonResults';
import Mortgage from '../../lib/mortgage.js'

Enzyme.configure({ adapter: new Adapter() });

const testMortA = new Mortgage(400000, 0.03250, 15, 350.00);
const testMortB = new Mortgage(400000, 0.03930, 30, 350.00);

describe('Input Cell test suite', () => {
  it('renders without crashing', () => {
    const shallow = Enzyme.shallow(<ComparisonResults mortA={testMortA} mortB={testMortB} />);
  });
});
