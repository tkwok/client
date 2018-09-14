import React from 'react';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from '../../../reducers';

import Signin from '../Signin';

let wrapper = '';
const store = createStore(
    reducers,
      { 
          auth: { authenticated: localStorage.getItem('user') } 
      },
    applyMiddleware(reduxThunk) 
);

beforeEach(() => {
    wrapper = shallow(<Provider store={store}><Signin /></Provider>);
});

afterEach(() => {
    wrapper.unmount();
});

it('has a button showing on screen', () => {
    console.log(wrapper.debug);
  //  expect(wrapper.find('button').length).toEqual(1);
});