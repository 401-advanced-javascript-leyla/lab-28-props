import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import Message from '../components/Message.jsx';

Enzyme.configure({ adapter: new Adapter() });


describe('<Message />', () => {
  it('renders the Message component', () => {
    const app = shallow(<Message />);
    expect(app.find('div').exists()).toBeTruthy();
  });
});
