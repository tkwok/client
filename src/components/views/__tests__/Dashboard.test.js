import React from 'react';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import { findByTestAttr } from '../../../test/testUtils';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import Dashboard from '../Dashboard';
import reducers from '../../../reducers';

const defaultProps = { success: false };

const store = createStore(
    reducers,
      { 
          auth: { authenticated: localStorage.getItem('user') } 
      },
    applyMiddleware(reduxThunk) 
);

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Provider store={store}><Dashboard {...setupProps} /></Provider>);
};

test('renders without error', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-dashboard');
    console.log(wrapper.debug());
});