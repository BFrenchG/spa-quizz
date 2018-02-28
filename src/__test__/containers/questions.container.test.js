// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import Questions from '../../containers/questions.container';

const setup = (setupProps = {}) => {
    const store = configureStore()({ todos: [] });
    const wrapper = shallow(<Questions store={store} />);

    return {
        store,
        wrapper
    };
};

describe('Questions', () => {
    test('renders without crashing', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    });
});
