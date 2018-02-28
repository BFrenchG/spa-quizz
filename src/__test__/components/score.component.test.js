// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Score from "../../components/score.component";



const setup = (setupProps = {}) => {

    const defaultProps = {
        score: 75,
        retry: jest.fn()
    };

    const props = {...defaultProps, ...setupProps};

    const wrapper = shallow(<Score score={props.score} retry={props.retry} />);

    return {
        wrapper
    };
};

describe('Score', () => {
    test('renders without crashing', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    });
});