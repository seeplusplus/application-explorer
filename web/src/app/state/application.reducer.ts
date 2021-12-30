import { createReducer, on } from '@ngrx/store';
import { retrievedApplications } from './application.actions';
import { Application } from '../types/application';

export const initialState: Application[] = [];

export const applicationReducer = createReducer(
    initialState,
    on(retrievedApplications, (state, { applications }) =>
        state.concat(
            applications.filter(app =>
                state.filter(s => s.id === app.id).length === 0)
        )
    )
);
