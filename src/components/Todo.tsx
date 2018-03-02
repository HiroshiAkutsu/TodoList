import * as React from 'react';

interface TodoProps {
    completed: boolean;
    text: string;
    onClick: () => undefined;
}

const Todo = ({onClick, completed, text}: TodoProps) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
    {text}
    </li>
);
export default Todo;