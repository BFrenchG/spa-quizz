// @flow


import type {State} from "./index";

export type GetState = () => State;

export type Id = number;

export type Option = {
    id: Id,
    option: string
}

export type Question = {
    +id: Id,
    +title: string,
    +options: Array<Option>,
    +selected?: Id,
    +warning: boolean,
    +info: string
};

export type Answer = {
    +questionId: Id,
    +answerId: Id
}

export type Quiz = {
    +id: Id,
    +title: string,
    +questions: Array<Question>,
    +answers?:  Array<Answer>,
    +score?: number,
    +error?: string,
    +isLoading: boolean
};

export type QuizzState = {
    +quiz: Quiz
};

export type QuizzActions =
    | { type: 'LOAD_QUIZ', +quiz: Quiz }
    | { type: 'QUIZ_LOADING', +isLoading: boolean }
    | { type: 'SELECT_ANSWER', +questionId: Id, +optionId: Id }
    | { type: 'SET_SCORE', +score: number }
    | { type: 'SET_QUESTION_INFO', +questionId: Id, +info: string, +warning: boolean}
    | { type: 'SET_QUIZ_ERROR', +error: string };
