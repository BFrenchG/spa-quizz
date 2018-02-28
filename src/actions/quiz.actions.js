// @flow

import type {Answer, GetState, Id, Quiz, QuizzActions} from '../types/qizz.type';
import type {Dispatch} from '../types';
import QuizApi from '../api/mockQuizApi';
import delay from "../api/delay";

export const loadQuiz = (quiz: Quiz): QuizzActions => {
    return {
        type: 'LOAD_QUIZ',
        quiz
    };
};

export const loadingQuestions = (isLoading: boolean): QuizzActions => {
    return {
        type: 'QUIZ_LOADING',
        isLoading
    };
};

export const setQuizError = (error: string): QuizzActions => {
    return {
        type: 'SET_QUIZ_ERROR',
        error
    };
};

export const selectAnswer = (questionId: Id, optionId: Id): QuizzActions => {
    return {
        type: 'SELECT_ANSWER',
        questionId,
        optionId
    };
};

export const setScore = (score: number): QuizzActions => {
    return {
        type: 'SET_SCORE',
        score
    };
};

export const setQuestionInfo = (questionId: Id, info: string, warning: boolean): QuizzActions => {
    return {
        type: 'SET_QUESTION_INFO',
        questionId,
        info,
        warning
    };
};

export function fetchQuiz(url: string, time: number = delay) {
    return (dispatch: Dispatch) => {
        dispatch(loadingQuestions(true));
        return QuizApi.getQuiz(time)
            .then((quiz) => {
                dispatch(loadQuiz(quiz));
                dispatch(loadingQuestions(false));
            })
            .catch(error => {
                dispatch(setQuizError(error));
                dispatch(loadingQuestions(false));
            });
    };

}

export function fetchAnswers(url: string, time: number = delay) {
    return (dispatch: Dispatch, getState: GetState) => {
        return QuizApi.getAnswers(time)
            .then(answers => {
                const {quiz} = getState();
                let questions = quiz.questions;
                let totalQuestions = questions.length;
                let correctAnswers = 0;

                questions.forEach(question => {
                    let answerKey: Answer = answers.find(answer => answer.questionId === question.id);
                    if (answerKey.answerId.toString() === question.selected) {
                        dispatch(setQuestionInfo(answerKey.questionId, 'Correct!', false));
                        correctAnswers++;
                    } else {
                        dispatch(setQuestionInfo(answerKey.questionId, 'Correct answer was: "' + question.options[answerKey.answerId].option + '"', true));
                    }
                });

                let percentage = Math.round((correctAnswers / totalQuestions) * 100);
                dispatch(setQuizError(""));
                dispatch(setScore(percentage));
            }).catch(error => {
                dispatch(setQuizError(error));
            });
    };

}
