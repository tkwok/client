import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../Header';
import Welcome from '../views/Welcome';
import { Signin, Signout, Signup } from '../auth';
let wrapper;

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('shows the Header component', () => {
  wrapper = shallow(<App />);
  expect(wrapper.find(Header).length).toEqual(1);
});

it('shows the Welcome component', () => {
  wrapper = shallow(<App><Welcome /></App>);
  expect(wrapper.find(Welcome).length).toEqual(1);
});

it('shows the Signin component', () => {
  wrapper = shallow(<App><Signin /></App>);
  expect(wrapper.find(Signin).length).toEqual(1);
});

it('shows the Signout component', () => {
  wrapper = shallow(<App><Signout /></App>);
  expect(wrapper.find(Signout).length).toEqual(1);
});

it('shows the Signup component', () => {
  wrapper = shallow(<App><Signup /></App>);
  expect(wrapper.find(Signup).length).toEqual(1);
});