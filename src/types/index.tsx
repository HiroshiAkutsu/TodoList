// this Apps state type below
export interface TodoState {
    text: string;
    completed: boolean;
}
export interface StoreState {
    todos: TodoState[];
    visibilityFilter: string;
}
