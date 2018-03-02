import { combineReducers } from 'redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
    DispatchTodo,
    SetVisibilityFilter
} from '../actions/actions';
import { TodoState } from '../types/index';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state: string = SHOW_ALL, action: SetVisibilityFilter) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state: TodoState[] = [] , action: DispatchTodo) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo: TodoState, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default :
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;