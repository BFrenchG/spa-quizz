// @flow

import {
    loadAllQuestions, fetchAnswers, loadingQuestions, selectAnswer, setScore,
    setQuestionInfo, setQuizError
} from '../../actions/quiz.actions';
import quiz from '../../reducers/quiz.reducer';
import type {Quiz} from "../../types/qizz.type";
import {dummyQuiz} from "../test-helpers/test.data";

const defaultQuiz: Quiz = {
    id: 0,
    title: '',
    questions: [],
    isLoading: false
};


describe('todos reducer', () => {

    it('should handle LOAD_QUIZ', () => {
        expect(quiz(defaultQuiz, loadAllQuestions(dummyQuiz))).toEqual(
            dummyQuiz
        );
    });

    it('should handle QUIZ_LOADING', () => {
        expect(quiz({isLoading: false}, loadingQuestions(true))).toEqual(
            {isLoading: true}
        );
    });

    it('should handle SELECT_ANSWER', () => {
        expect(
            quiz(
                {"id": 0, "isLoading": false, "questions": [{"id": 0, "option": "True"}], "title": ""},
                selectAnswer(0, 1)
            )
        ).toEqual({
            "id": 0,
            "isLoading": false,
            "questions": [{"id": 0, "option": "True", "selected": 1}],
            "title": ""
        });
    });

    it('should handle SET_SCORE', () => {
        expect(quiz({}, setScore(100))).toEqual(
            {score: 100}
        );
    });

    it('should handle SET_QUESTION_INFO', () => {
        expect(
            quiz(
                {"id": 0, "isLoading": false, "questions": [{"id": 0, "option": "True"}], "title": ""},
                setQuestionInfo(0, "test message", false)
            )
        ).toEqual({
            "id": 0,
            "isLoading": false,
            "questions": [{"id": 0, "info": "test message", "option": "True", "warning": false}],
            "title": ""
        });
    });

    it('should handle SET_QUIZ_ERROR', () => {
        expect(quiz({error: ""}, setQuizError("test error"))).toEqual(
            {error: "test error"}
        );
    });
});
