// @flow

import React from 'react';
import {shallow} from 'enzyme';

import QuestionPage from '../../components/question-page.component';
import {dummyQuiz} from "../utils/test.data";

const setup = (setupProps = {}) => {

    const defaultProps = {
        quiz: dummyQuiz,
        getQuestions: jest.fn(),
        onOptionSelect: jest.fn(),
        onSubmit: jest.fn(),
    };

    const props = {...defaultProps, ...setupProps};

    console.log(dummyQuiz);

    const wrapper = shallow(<QuestionPage quiz={props.quiz}
                                          getQuestions={props.getQuestions}
                                          onOptionSelect={props.onOptionSelect}
                                          onSubmit={props.onSubmit}
                            />);

    return {
        props,
        wrapper
    };
};

describe('QuestionPage', () => {
    test('renders without crashing', () => {
        const {wrapper} = setup();
        expect(wrapper).toMatchSnapshot();
    });

    test('calls handleChange when option is selected', () => {
        const {props, wrapper} = setup();
        expect(wrapper).toMatchSnapshot();

        wrapper.find('input').forEach((node) => {
            node.simulate('click');
            expect(props.handleChange).toHaveBeenCalled();
        });
    });
});
