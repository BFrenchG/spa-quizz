import delay from './delay';
import type {Answer, Quiz} from "../types/qizz.type";

const dummyQuizz: Quiz = {
    id: 0,
    title: "Test Quiz",
    questions: [{
        id: 0,
        title: 'test Question',
        options: [{
            id: 0,
            option: 'this is one option'
        }, {
            id: 1,
            option: 'this is another option'
        }, {
            id: 2,
            option: 'this is one option'
        }, {
            id: 3,
            option: 'this is another option'
        }],
        error: ""
    }, {
        id: 1,
        title: 'test Question 1',
        options: [{
            id: 0,
            option: 'this is one option'
        }, {
            id: 1,
            option: 'this is another option'
        }, {
            id: 2,
            option: 'this is one option'
        }, {
            id: 3,
            option: 'this is another option'
        }],
        error: ""
    }]
};

let dummyAnswers: Array<Answer> = [
    {
        questionId: 0,
        answerId: 1
    },
    {
        questionId: 1,
        answerId: 3
    }
];

class QuizApi {
    static getQuiz() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], dummyQuizz));
            }, delay);
        });
    }

    static getAnswers(author) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], dummyAnswers));
            }, delay);
        });
    }
}

export default QuizApi;
