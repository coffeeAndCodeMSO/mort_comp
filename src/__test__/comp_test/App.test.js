import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />);
});
