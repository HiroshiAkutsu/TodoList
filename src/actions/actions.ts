export const ADD_TODO = 'ADD_TODO';
export type ADD_TODO = typeof ADD_TODO;
export const TOGGLE_TODO = 'TOGGLE_TODO';
export type TOGGLE_TODO = typeof TOGGLE_TODO;
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export type SET_VISIBILITY_FILTER = typeof SET_VISIBILITY_FILTER;

export interface AddTodo {
    type: ADD_TODO;
    text: string;
}
export interface ToggleTodo {
    type: TOGGLE_TODO;
    index: number;
}
export type DispatchTodo = AddTodo | ToggleTodo;
export interface SetVisibilityFilter {
    type: SET_VISIBILITY_FILTER;
    filter: string;
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text: string) {
    return {type: ADD_TODO, text};
}
export function toggleTodo(index: number) {
    return {type: TOGGLE_TODO, index};
}
export function setVisibilityFilter(filter: string) {
    return {type: SET_VISIBILITY_FILTER, filter};
}