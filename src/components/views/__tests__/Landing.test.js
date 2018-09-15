import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../test/testUtils';
import Landing from '../Landing';

test('welcome component render without error', () => {
    const wrapper = shallow(<Landing />);
    const component = findByTestAttr(wrapper, 'component-welcome');
    expect(component.length).toBe(1);
});