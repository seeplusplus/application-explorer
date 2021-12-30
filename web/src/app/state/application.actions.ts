import { createSelector, createFeatureSelector, props, createAction } from "@ngrx/store";
import { AppState } from "./app.state";

export const addBookmark = createAction(
    "[Application Item] Application bookmarked",
    props<{ applicationId }>()
)

export const removeBookmark = createAction(
    "[Application Item] Bookmark removed",
    props<{ applicationId }>()
)

export const addForViewLater = createAction(
    "[Application Item] Marked for view later",
    props<{ applicationId }>()
)

export const removeFromViewLater = createAction(
    "[Application Item] Unmarked for view later",
    props<{ applicationId }>()
)

export const retrievedApplications = createAction(
    "[Application Service] Retrieved application",
    props<{ applications }>()
)