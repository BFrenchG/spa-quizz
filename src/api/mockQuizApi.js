import delay from './delay';
import type {Answer, Quiz} from '../types/qizz.type';

const dummyQuizz: Quiz = {
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
    }, {
        id: 1,
        title: 'React is awesome',
        options: [{
            id: 0,
            option: 'True'
        }, {
            id: 1,
            option: 'False'
        }],
        info: ''
    }, {
        id: 2,
        title: 'Flow is powerful',
        options: [{
            id: 0,
            option: 'True'
        }, {
            id: 1,
            option: 'False'
        }],
        info: ''
    }, {
        id: 3,
        title: 'Marmite is great',
        options: [{
            id: 0,
            option: 'True'
        }, {
            id: 1,
            option: 'False'
        }],
        info: ''
    }]
};

let dummyAnswers: Array<Answer> = [
    {
        questionId: 0,
        answerId: 1
    },
    {
        questionId: 1,
        answerId: 0
    },
    {
        questionId: 2,
        answerId: 0
    },
    {
        questionId: 3,
        answerId: 1
    }
];

class QuizApi {
    static getQuiz() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (delay < 3000) {
                    resolve(Object.assign([], dummyQuizz));
                } else {
                    reject('Page Load Timeout');
                }
            }, delay);
        });
    }

    static getAnswers(author) {
        return new Promise((resolve, reject) => {
            if (delay < 2000) {
                resolve(Object.assign([], dummyAnswers));
            } else {
                reject('Answer Load Timeout');
            }
        });
    }
}

export default QuizApi;
