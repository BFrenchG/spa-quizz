// @flow

import type {Answer, Id, Quiz, QuizzActions} from '../types/qizz.type';
import type {Dispatch, State} from "../types";

export const loadAllQuestions = (quiz: Quiz): QuizzActions => {
    return {
        type: 'LOAD_QUIZZ',
        quiz
    };
};

export const loadAllAnswers = (answers: Array<Answer>): QuizzActions => {
    return {
        type: 'LOAD_ANSWERS',
        answers
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

export const setQuestionError = (questionId: Id, error: string): QuizzActions => {
    return {
        type: 'SET_QUESTION_ERROR',
        questionId,
        error
    };
};


