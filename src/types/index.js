// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type {QuizzActions, QuizzState} from "./qizz.type";


export type State = QuizzState;

export type Action = QuizzActions;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;