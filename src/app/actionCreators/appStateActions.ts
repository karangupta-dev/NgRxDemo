import { Action, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { UPDATE_TODO_LIST } from "../reducers/appState-reducer";

@Injectable()
export class AppStateActions implements Action {

    readonly type = UPDATE_TODO_LIST ;

    constructor(private _store:Store<any>){}

    public updateToDoList(stateChanges){
        this._store.dispatch({
            type: UPDATE_TODO_LIST,
            payload: stateChanges
        }); 
    }

}