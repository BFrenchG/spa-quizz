// @flow

import React from 'react';
import {shallow} from 'enzyme';

import QuestionCard from '../../components/question.component';
import {dummyQuiz} from "../utils/test.data";

const setup = (setupProps = {}) => {

    const question = dummyQuiz.questions[0];

    const props = {question, ...setupProps};

    const wrapper = shallow(<QuestionCard question={props.question} quizSubmitted={props.quizSubmitted}
                                          handleChanged={props.handleChange}/>);

    return {
        props,
        wrapper
    };
};

describe('QuestionCard', () => {
    test('renders without crashing', () => {
        const {wrapper} = setup();
        expect(wrapper).toMatchSnapshot();
    });

    test('shows message', () => {
        const {wrapper} = setup({
            questions: [{
                info: "test"
            }]
        });

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
