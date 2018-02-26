//@flow
import * as types from '../types/action.type';
import typeof State from '../types/state.type';
import initialState from './initial.state';

export default (state: State = initialState.exam, action: Action) => {
    switch (action.type) {
        case 'SAMPLE_ACTION':
            return action.authors;

        default:
            return state;
    }
}
