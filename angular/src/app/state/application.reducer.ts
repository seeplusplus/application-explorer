import { Action, createReducer, on } from "@ngrx/store";
import { retrievedApplications } from "./application.actions"
import { AppState } from './app.state';
import { Application } from "../application";

export const initialState: Application[] = [];

export const applicationReducer = createReducer(
    initialState,
    on(retrievedApplications, (state, { applications }) => state.concat(applications))
);
