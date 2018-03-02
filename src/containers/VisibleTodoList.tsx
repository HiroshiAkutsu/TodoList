import { connect, Dispatch } from 'react-redux';
import { toggleTodo, DispatchTodo } from '../actions/actions';
import TodoList from '../components/TodoList';
import { TodoState, StoreState } from '../types/index';

const getVisibleTodos = (todos: TodoState[], filter: string) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};
const mapStateToProps = (state: StoreState) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};
const mapDispatchToProps = (dispatch: Dispatch<DispatchTodo>) => {
    return {
        onTodoClick: (id: number) => {
            dispatch(toggleTodo(id));
        }
    };
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
export default VisibleTodoList;