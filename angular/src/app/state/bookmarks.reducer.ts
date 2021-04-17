import { Action, createReducer, on } from "@ngrx/store";
import { addBookmark, removeBookmark } from "./application.actions"
import { AppState } from './app.state';

export const initialState: ReadonlyArray<number> = [];

export const bookmarkReducer = createReducer(
    initialState,
    on(addBookmark, (state, { applicationId }) => {
        if (state.indexOf(applicationId) > -1) return state;

        return [...state, applicationId]; 
    }),
    on(removeBookmark, (state, {applicationId }) => {
        return state.filter(id => id !== applicationId);
    })
);
