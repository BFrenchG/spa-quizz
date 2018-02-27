// @flow

import type {Connector} from 'react-redux';
import {connect} from 'react-redux';

import type {Dispatch, State} from '../types/index';
import type {Props} from '../components/question-page.component';
import QuestionPage from '../components/question-page.component';
import type {Id, Question} from '../types/qizz.type';
import {fetchAnswers, fetchQuiz, selectAnswer, setQuestionInfo} from '../actions/quiz.actions';


const mapStateToProps = (state: State) => {
    return {
        quiz: state.quiz
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getQuestions: () => {
            console.log(typeof fetchQuiz("/dummy/url"));
            dispatch(fetchQuiz("/dummy/url"));
        },
        onOptionSelect: (questionId: Id, optionId: Id) => {
            dispatch(selectAnswer(questionId, optionId));
        },
        onSubmit: (questions: Array<Question>) => {
            let errorCount = 0;
            questions.forEach(question => {
                if (!question.hasOwnProperty("selected")) {
                    dispatch(setQuestionInfo(question.id, "Please review selection", true));
                    errorCount++;
                }else{
                    dispatch(setQuestionInfo(question.id, "", false));

                }
            });

            if (errorCount !== 0) {
                return;
            }

            dispatch(fetchAnswers("/dummy/url"));
        },
    };
};

const connector: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(QuestionPage);