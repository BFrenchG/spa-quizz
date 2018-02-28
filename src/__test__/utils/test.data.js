export const dummyQuiz: Quiz = {
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

export const answeredQuiz: Quiz = {
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
    }]
};

export const dummyAnswer: Array<Answer> = [{
    answerId: 1,
    questionId: 0
}];