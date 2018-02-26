// @flow

import type {Connector} from 'react-redux';
import {connect} from 'react-redux';

import type {Dispatch, State} from '../types/index';
import type {Props} from '../components/question-page.component';
import QuestionPage from '../components/question-page.component';
import type {Id, Question, Quiz} from '../types/qizz.type';
import {loadAllQuestions, selectAnswer, setQuestionError, setScore} from '../actions/quiz.actions';

const dummyQuizz: Quiz = {
    id: 0,
    title: "Test Quiz",
    questions: [{
        id: 0,
        title: 'test Question',
        options: [{
            id: 0,
            option: 'this is one option'
        }, {
            id: 1,
            option: 'this is another option'
        }, {
            id: 2,
            option: 'this is one option'
        }, {
            id: 3,
            option: 'this is another option'
        }],
        error: ""
    }, {
        id: 1,
        title: 'test Question 1',
        options: [{
            id: 0,
            option: 'this is one option'
        }, {
            id: 1,
            option: 'this is another option'
        }, {
            id: 2,
            option: 'this is one option'
        }, {
            id: 3,
            option: 'this is another option'
        }],
        error: ""
    }]
};


const mapStateToProps = (state: State) => {
    return {
        quiz: state.quiz
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getQuestions: () => {
            dispatch(loadAllQuestions(dummyQuizz))
        },
        onOptionSelect: (questionId: Id, optionId: Id) => {
            dispatch(selectAnswer(questionId, optionId));
        },
        onSubmit: (questions: Array<Question>) => {

            let correctCount = 0;
            let totalCount = questions.length;
            let errorCount = 0;

            console.log(questions);

            questions.forEach(question => {
                if (!question.hasOwnProperty("selected")) {
                    dispatch(setQuestionError(question.id, "Please review selection"))
                    errorCount++;
                }
                correctCount++;
            });

            if (errorCount > 0) {
                return;
            }
            let percentage = Math.round((correctCount / totalCount) * 100);
            console.log(percentage);

            dispatch(setScore(percentage));
        }
    };
};

const connector: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(QuestionPage);