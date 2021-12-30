import { Application } from '../types/application';

export interface AppState
{
    applications: Application[];
    bookmarks: ReadonlyArray<number>;
    savedForLater: ReadonlyArray<number>;
}
