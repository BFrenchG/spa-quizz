// @flow

import type {Quiz} from '../types/qizz.type';
import type {Action} from '../types';

export const defaultState: Quiz = {
    id: 0,
    title: '',
    questions: [],
    isLoading: false
};


const quiz = (state: Quiz = defaultState, action: Action): Quiz => {
        switch (action.type) {
            case 'LOAD_QUIZ':
                return action.quiz;
            case 'LOAD_ANSWERS':
                return Object.assign({}, state,
                    {answers: action.answers});
            case 'QUIZ_LOADING':
                return Object.assign({}, state,
                    {isLoading: action.isLoading});
            case 'SELECT_ANSWER':
                //maybe over the top with immutability
                return Object.assign({}, state,
                    {
                        questions: Object.assign([...state.questions],
                            {
                                [action.questionId]: Object.assign({}, state.questions[action.questionId], {
                                    selected: action.optionId
                                })
                            }
                        )
                    });
            case 'SET_SCORE':
                return Object.assign({}, state,
                    {score: action.score});
            case 'SET_QUESTION_INFO':
                //maybe over the top with immutability
                return Object.assign({}, state,
                    {
                        questions: Object.assign([...state.questions],
                            {
                                [action.questionId]: Object.assign({}, state.questions[action.questionId], {
                                    warning: action.warning,
                                    info: action.info
                                })
                            }
                        )
                    });
            case 'SET_QUIZ_ERROR':
                return Object.assign({}, state,
                    {
                        error: action.error
                    });
            default:
                return state;
        }
    }
;

export default quiz;
