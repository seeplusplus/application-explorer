import { createReducer, on } from '@ngrx/store';
import { removeFromViewLater, addForViewLater } from './application.actions';

export const initialState: ReadonlyArray<number> = [];

export const viewlaterReducer = createReducer(
    initialState,
    on(addForViewLater, (state, { applicationId }) => {
        if (state.indexOf(applicationId) > -1) { return state; }

        return [...state, applicationId];
    }),
    on(removeFromViewLater, (state, {applicationId }) => {
        return state.filter(id => id !== applicationId);
    })
);
