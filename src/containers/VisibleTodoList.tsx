import { connect, Dispatch } from 'react-redux';
import { toggleTodo } from '../actions/actions';
import TodoList from '../components/TodoList';

interface TodoType {
    completed: boolean;
}
interface StateType {
    todos: TodoType[];
    visibilityFilter: string; 
}
const getVisibleTodos = (todos: TodoType[], filter: string) => {
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
const mapStateToProps = (state: StateType) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};
const mapDispatchToProps = (dispatch: Dispatch<{type: string, index: number}>) => {
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