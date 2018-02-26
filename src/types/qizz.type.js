// @flow

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
    +error: string
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
    +error?: string
};

export type QuizzState = {
    +quiz: Quiz
};

export type QuizzActions =
    | { type: 'LOAD_QUIZZ', +quiz: Quiz }
    | { type: 'LOAD_ANSWERS', +answers: Array<Answer> }
    | { type: 'SELECT_ANSWER', +questionId: Id, +optionId: Id }
    | { type: 'SET_SCORE', +score: number }
    | { type: 'SET_QUESTION_ERROR', +questionId: Id, +error: string }
    | { type: 'SET_QUIZZ_ERROR', +error: string };
