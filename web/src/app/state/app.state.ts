import { Application } from "../application";

export interface AppState 
{
    applications: Application[],
    bookmarks: ReadonlyArray<number>;
    savedForLater: ReadonlyArray<number>;
}