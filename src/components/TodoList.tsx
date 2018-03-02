import * as React from 'react';
import Todo from './Todo';

interface TodoListProps {
    todos: {
        id: number,
        completed: boolean,
        text: string
    }[];
    onTodoClick: (idx: number) => undefined;
}
const TodoList = ({todos, onTodoClick}: TodoListProps) => (
    <ul>
        {
            todos.map((todo, index) => (
                <Todo key={index} {...todo} onClick={() => onTodoClick(index)} /> 
            ))
        }
    </ul>
);
export default TodoList;