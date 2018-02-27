// @flow

import reducer from '../../reducers';

describe('root reducer', () => {
    it('should combine all reducers', () => {
        expect(reducer({}, {type: '@@INIT'})).toEqual({
            "quiz": {
                "id": 0,
                "isLoading": false,
                "questions": [],
                "title": ""
            }
        });
    });
});
