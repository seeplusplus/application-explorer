import { createSelector } from '@ngrx/store';
import { AppState } from "../state/app.state";
import { Application } from "../application";

export const applicationsSelector = (state: AppState) => state.applications;
export const bookmarksSelector = (state: AppState) => state.bookmarks;
export const savedApplicationsSelector = (state: AppState) => state.savedForLater;

export const selectBookmarkedApplications = createSelector(
    applicationsSelector,
    bookmarksSelector,
    (applications: Application[], bookmarks: ReadonlyArray<number>) => 
        applications.filter(a => bookmarks.indexOf(a.id) > -1)
);

export const selectSavedApplications = createSelector(
    applicationsSelector,
    savedApplicationsSelector,
    (applications: Application[], saved: ReadonlyArray<number>) => 
        applications.filter(a => saved.indexOf(a.id) > -1)
);

export const selectApplicationById = createSelector(
    applicationsSelector,
    (applications: Application[], props) => applications.find(a => a.id === +props.id)
);