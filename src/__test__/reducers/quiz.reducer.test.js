// @flow

import {
    loadQuiz, fetchAnswers, loadingQuestions, selectAnswer, setScore,
    setQuestionInfo, setQuizError, fetchQuiz
} from '../../actions/quiz.actions';
import quiz from '../../reducers/quiz.reducer';
import type {Quiz} from "../../types/qizz.type";
import {answeredQuiz, dummyQuiz} from "../utils/test.data";
import {mockStore} from "../utils/mock.store";

const defaultQuiz: Quiz = {
    id: 0,
    title: '',
    questions: [],
    isLoading: false
};


describe('todos reducer', () => {

    it('should dispatch LOAD_QUIZ and set QUIZ_LOADING during load or ERROR', () => {
        const store = mockStore({quiz: defaultQuiz});
        return store.dispatch(fetchQuiz("/url"))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual(loadingQuestions(true));
                expect(actions[1]).toEqual(loadQuiz(defaultQuiz));
                expect(actions[2]).toEqual(loadingQuestions(false));
            })
            .catch(() => {
                const actions = store.getActions();
                console.log(actions);
            })
    });

    it('should dispatch SET_SCORE and QUIZ_ERROR when quiz data is returned', () => {
        const store = mockStore({quiz: answeredQuiz});

        return store.dispatch(fetchAnswers("/url"))
            .then(() => {
                const actions = store.getActions();
                console.log(actions);
                expect(actions[0]).toEqual(setQuestionInfo(0, 'Correct answer was: "Lodon"' ,true));
                expect(actions[1]).toEqual(setQuizError(''));
                expect(actions[2]).toEqual(setScore(0));
            })
    });

    it('should handle LOAD_QUIZ', () => {
        expect(quiz(defaultQuiz, loadQuiz(dummyQuiz))).toEqual(
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
