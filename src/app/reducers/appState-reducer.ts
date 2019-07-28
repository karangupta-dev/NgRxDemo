import { Action } from "../models/action";

export const UPDATE_TODO_LIST = 'UPDATE_TODO_LIST';

const initialState = {
    todoList: [],
}

export function appState(state: any = initialState, action: Action) {
    switch (action.type) {
        case UPDATE_TODO_LIST:
            let newState = makeClone(state);
            newState.todoList = [...action.payload];
            return newState;
        default:
            return state;
    }
}

export const makeClone = (original) => {
    return JSON.parse(JSON.stringify(original));
};