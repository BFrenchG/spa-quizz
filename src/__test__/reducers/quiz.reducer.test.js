// @flow

import {loadAllQuestions, fetchAnswers} from '../../actions/quiz.actions';
import quiz from '../../reducers/quiz.reducer';

describe('todos reducer', () => {

    it('should handle LOAD_QUIZ', () => {
        const dummyQuizz = {
            id: 0,
            title: 'Random Quiz',
            questions: [{
                id: 0,
                title: 'Capital of England',
                options: [{
                    id: 0,
                    option: 'Lyon'
                }, {
                    id: 1,
                    option: 'Lodon'
                }, {
                    id: 2,
                    option: 'Paris'
                }],
                info: ''
            }],
            isLoading: false
        };
        expect(quiz(dummyQuizz, loadAllQuestions(true))).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 0
            }
        ]);

        expect(
            todos(
                [
                    {
                        text: 'Run the tests',
                        completed: false,
                        id: 0
                    }
                ],
                addTodo('Use Redux')
            )
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 0
            },
            {
                text: 'Use Redux',
                completed: false,
                id: 1
            }
        ]);

        expect(
            todos(
                [
                    {
                        text: 'Run the tests',
                        completed: false,
                        id: 0
                    },
                    {
                        text: 'Use Redux',
                        completed: false,
                        id: 1
                    }
                ],
                addTodo('Fix the tests')
            )
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 0
            },
            {
                text: 'Use Redux',
                completed: false,
                id: 1
            },
            {
                text: 'Fix the tests',
                completed: false,
                id: 2
            }
        ]);
    });

    it('should handle TOGGLE_TODO', () => {
        expect(
            todos(
                [
                    {
                        text: 'Run the tests',
                        completed: false,
                        id: 1
                    },
                    {
                        text: 'Use Redux',
                        completed: false,
                        id: 0
                    }
                ],
                toggleTodo(1)
            )
        ).toEqual([
            {
                text: 'Run the tests',
                completed: true,
                id: 1
            },
            {
                text: 'Use Redux',
                completed: false,
                id: 0
            }
        ]);
    });
});
