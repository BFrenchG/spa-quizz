// @flow

import type {Connector} from 'react-redux';
import {connect} from 'react-redux';

import type {Dispatch, State} from '../types/index';
import type {Props} from '../components/question-page.component';
import QuestionPage from '../components/question-page.component';
import type {Answer, Id, Question, Quiz} from '../types/qizz.type';
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

let dummyAnswers: Array<Answer> = [
    {
        questionId: 0,
        answerId: 1
    },
    {
        questionId: 1,
        answerId: 3
    }
];

export function fetchAnswers(url: string) {
    return (dispatch: Dispatch, getState: State) => {
        console.log("trigerred");
        dispatch(setScore(100));
    };

}


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
            let errorCount = 0;
            questions.forEach(question => {
                if (!question.hasOwnProperty("selected")) {
                    dispatch(setQuestionError(question.id, "Please review selection"));
                    errorCount++;
                }else{
                    dispatch(setQuestionError(question.id, ""));

                }
            });

            if (errorCount !== 0) {
                return;
            }

            console.log('trying');
            fetchAnswers("");
        },
        setError: (questionId: Id) => {
            dispatch(setQuestionError(questionId, "Please review selection"))
        },
        setScore: (score: number) => {
            dispatch(setScore(score));
        }
    };
};

const connector: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(QuestionPage);