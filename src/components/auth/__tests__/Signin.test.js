import React, { Component } from 'react';
import { mount } from 'enzyme';
import Signin from '../Signin';
import App from '../../App';

let wrapped = '';

beforeEach(() => {
    wrapped = mount(<App><Signin /></App>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has', () => {
    expect(wrapped.find('button').length).toEqual(1);
});