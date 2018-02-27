// @flow

import type {Answer, Id, Quiz, QuizzActions} from '../types/qizz.type';
import type {GetState} from "../types/qizz.type";
import type {Dispatch} from "../types";
import QuizApi from "../api/mockQuizApi";

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

export function fetchQuiz(url: string) {
    return (dispatch: Dispatch) => {
        QuizApi.getQuiz()
            .then((quiz) => {
                dispatch(loadAllQuestions(quiz));
            })
    };

}

export function fetchAnswers(url: string) {
    return (dispatch: Dispatch, getState: GetState) => {
        QuizApi.getAnswers().then(answers => {
            const { quiz } = getState();

            let questions = quiz.questions;
            let totalQuestions = questions.length;
            let correctAnswers = 0;

            questions.forEach(question => {
                let answerKey: Answer = answers.find(answer => answer.questionId === question.id);

                if(answerKey.answerId.toString() === question.selected){
                    correctAnswers++;
                }
            });

            let percentage = Math.round((correctAnswers / totalQuestions) * 100);
            dispatch(setScore(percentage));
        });
    };

}
